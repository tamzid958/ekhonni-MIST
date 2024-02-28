package com.dsi.backend.service.implententation;

import com.dsi.backend.exception.ProductNotFoundException;
import com.dsi.backend.model.*;

import com.dsi.backend.projection.ProductView;
import com.dsi.backend.projection.implementation.ProductViewImpl;
import com.dsi.backend.repository.AppUserRepository;
import com.dsi.backend.repository.CategoryRepository;
import com.dsi.backend.repository.ProductRepository;
import com.dsi.backend.service.ImageModelService;
import com.dsi.backend.service.JwtTokenService;
import com.dsi.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import org.springframework.data.domain.Sort;

import org.springframework.data.projection.ProjectionFactory;
import org.springframework.data.projection.SpelAwareProxyProjectionFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.*;

import java.util.stream.Collectors;


@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private AppUserRepository appUserRepository;

    @Autowired
    private ImageModelService imageModelService;

    @Autowired
    private JwtTokenService jwtTokenService;

    public ProductView saveProduct(Product product, MultipartFile[] file, String token) {
        product.setIsApprovedByAdmin(null);
        product.setIsSold(false);
        product.setProductTime(LocalDateTime.now());
        Category category = categoryRepository.findByCategoryAndSubCategory(product.getCategory().getCategory(),product.getCategory().getSubCategory());
        if (category == null) {
            throw new IllegalArgumentException("Invalid category name");
        }
        AppUser seller = appUserRepository.findByEmail(jwtTokenService.getUsernameFromToken(token.substring(7)));
        product.setCategory(category);
        product.setSeller(seller);

        try {
            Set<ImageModel> image = imageModelService.uploadImage(file);
            product.setProductImage(image);

        } catch (Exception exception) {
            System.out.println(exception.getMessage());
            return null;
        }
        productRepository.save(product);
        ProjectionFactory projectionFactory = new SpelAwareProxyProjectionFactory();
        return projectionFactory.createProjection(ProductView.class, product);
    }

    public Product updateProduct(Long id, Boolean isApprovedByAdmin) {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));
        existingProduct.setIsApprovedByAdmin(isApprovedByAdmin);
        if(isApprovedByAdmin) existingProduct.setIsBidActive(true); //bid activates immediately after being accepted
        return productRepository.save(existingProduct);
    }

    public List<ProductView> fetchAllRequests() {
        return productRepository.findByIsApprovedByAdminIsNullOrderByProductTimeAsc();
    }

//    public List<Product> fetchAllProducts() {
//        return productRepository.findByIsApprovedByAdminTrue();
//    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(()->new ProductNotFoundException("Product not found by id: "+id));
    }

    public Set<String> getCategoriesBySubcategories(List<String> subcategories) {
        List<Category> categories = categoryRepository.findBySubCategoryIn(subcategories);
        return categories.stream().map(Category::getCategory).collect(Collectors.toSet());
    }

    public Page<ProductView> fetchProducts(int page, List<String> categories, List<String> subCategories, List<String> division, List<Double> price, String sort, String searchKey) {
        List<Product> filteredProducts = new ArrayList<>();
        Set<String> categoriesWithSubcategories = new HashSet<>();

        if (subCategories != null && !subCategories.isEmpty()) {
            categoriesWithSubcategories = getCategoriesBySubcategories(subCategories);
            filteredProducts.addAll(productRepository.findByIsApprovedByAdminTrueAndCategorySubCategoryIn(subCategories));
        }
        if (categories != null && !categories.isEmpty()) {
            categories.removeAll(categoriesWithSubcategories);
            filteredProducts.addAll(productRepository.findByIsApprovedByAdminTrueAndCategoryCategoryIn(categories));
        }
        if (division!= null && !division.isEmpty()) {
            List<Product> districtFilteredProducts = productRepository.findByIsApprovedByAdminTrueAndSellerDivisionIn(division);
            if ((subCategories==null || subCategories.isEmpty()) && (categories==null || categories.isEmpty())) {
                filteredProducts.addAll(districtFilteredProducts);
            }
            else {
                filteredProducts = filteredProducts.stream()
                        .filter(districtFilteredProducts::contains)
                        .collect(Collectors.toList());
            }
        }
        if (price != null && price.size() == 2) {
            Double minPrice = price.get(0);
            Double maxPrice = price.get(1);
            List<Product> priceFilteredProducts = productRepository.findByIsApprovedByAdminTrueAndStartingPriceBetween(minPrice, maxPrice);
            if ((subCategories==null || subCategories.isEmpty()) && (categories==null || categories.isEmpty()) && (division==null || division.isEmpty())) {
                filteredProducts.addAll(priceFilteredProducts);
            }
            else {
                filteredProducts = filteredProducts.stream()
                        .filter(priceFilteredProducts::contains)
                        .collect(Collectors.toList());
            }
        }
        if ((subCategories==null || subCategories.isEmpty()) && (categories==null || categories.isEmpty()) && (division==null || division.isEmpty()) && (price==null || price.isEmpty())) {
            filteredProducts.addAll(productRepository.findByIsApprovedByAdminTrue());
        }
        if(searchKey != null && !searchKey.isEmpty()){
            List<Product> searchedProducts = productRepository.findByIsApprovedByAdminTrueAndNameContainingIgnoreCaseOrDescriptionContainingIgnoreCase(searchKey,searchKey);
            filteredProducts = filteredProducts.stream()
                    .filter(searchedProducts::contains)
                    .collect(Collectors.toList());
        }
        if (sort != null || !sort.isEmpty()) {
            if (sort.equalsIgnoreCase("High_to_low")) filteredProducts.sort(Comparator.comparing(Product::getStartingPrice).reversed());
            else if (sort.equalsIgnoreCase("Low_to_high")) filteredProducts.sort(Comparator.comparing(Product::getStartingPrice));
            else if (sort.equalsIgnoreCase("Old_to_new")) filteredProducts.sort(Comparator.comparing(Product::getProductTime));
            else if (sort.equalsIgnoreCase("New_to_old")) filteredProducts.sort(Comparator.comparing(Product::getProductTime).reversed());
        }

        List<ProductView> productViews = filteredProducts.stream()
                .map(ProductViewImpl::new)
                .collect(Collectors.toList());
        int startIndex = page * 5;
        int endIndex = Math.min(startIndex + 5, filteredProducts.size());
        List<ProductView> productsForPage = productViews.subList(startIndex, endIndex);
        Sort sort1 = Sort.by(Sort.Direction.ASC, "id");
        return new PageImpl<>(productsForPage, PageRequest.of(page, 5, sort1), filteredProducts.size());
    }

//    public Page<ProductView> fetchProducts(int page, FilterRequest filter) {
//        List<Product> filteredProducts = new ArrayList<>();
//        Set<String> categoriesWithSubcategories = new HashSet<>();
//
//        if (filter.getSubcategories() != null && !filter.getSubcategories().isEmpty()) {
//            categoriesWithSubcategories = getCategoriesBySubcategories(filter.getSubcategories());
//            filteredProducts.addAll(productRepository.findByIsApprovedByAdminTrueAndCategorySubCategoryIn(filter.getSubcategories()));
//        }
//        if (filter.getCategories() != null && !filter.getCategories().isEmpty()) {
//            List<String> category = filter.getCategories();
//            category.removeAll(categoriesWithSubcategories);
//            filteredProducts.addAll(productRepository.findByIsApprovedByAdminTrueAndCategoryCategoryIn(category));
//        }
//        if (filter.getDivision() != null && !filter.getDivision().isEmpty()) {
//            List<Product> districtFilteredProducts = productRepository.findByIsApprovedByAdminTrueAndSellerDivisionIn(filter.getDivision());
//            if ((filter.getSubcategories().isEmpty()) && (filter.getCategories().isEmpty())) {
//                filteredProducts.addAll(districtFilteredProducts);
//            }
//            else {
//            filteredProducts = filteredProducts.stream()
//                    .filter(districtFilteredProducts::contains)
//                    .collect(Collectors.toList());
//            }
//        }
//        if (filter.getPrice() != null && filter.getPrice().size() == 2) {
//            Double minPrice = filter.getPrice().get(0);
//            Double maxPrice = filter.getPrice().get(1);
//            List<Product> priceFilteredProducts = productRepository.findByIsApprovedByAdminTrueAndStartingPriceBetween(minPrice, maxPrice);
//            if ((filter.getSubcategories().isEmpty()) && (filter.getCategories().isEmpty()) && (filter.getDivision().isEmpty())) {
//                filteredProducts.addAll(priceFilteredProducts);
//            }
//            else {
//                filteredProducts = filteredProducts.stream()
//                    .filter(priceFilteredProducts::contains)
//                    .collect(Collectors.toList());
//            }
//        }
//        else {
//            if ((filter.getSubcategories().isEmpty()) && (filter.getCategories().isEmpty()) && (filter.getDivision().isEmpty()) && (filter.getPrice().isEmpty())) {
//                filteredProducts.addAll(productRepository.findByIsApprovedByAdminTrue());
//            }
//        }
//        if (filter.getSort() != null) {
//            String field = filter.getSort();
//            if (field.equalsIgnoreCase("High_to_low")) filteredProducts.sort(Comparator.comparing(Product::getStartingPrice).reversed());
//            else if (field.equalsIgnoreCase("Low_to_high")) filteredProducts.sort(Comparator.comparing(Product::getStartingPrice));
//            else if (field.equalsIgnoreCase("Old_to_new")) filteredProducts.sort(Comparator.comparing(Product::getProductTime));
//            else if (field.equalsIgnoreCase("New_to_old")) filteredProducts.sort(Comparator.comparing(Product::getProductTime).reversed());
//    }
//
//        List<ProductView> productViews = filteredProducts.stream()
//                .map(ProductViewImpl::new)
//                .collect(Collectors.toList());
//        int startIndex = page * 5;
//        int endIndex = Math.min(startIndex + 5, filteredProducts.size());
//        List<ProductView> productsForPage = productViews.subList(startIndex, endIndex);
//        Sort sort = Sort.by(Sort.Direction.ASC, "id");
//        return new PageImpl<>(productsForPage, PageRequest.of(page, 5, sort), filteredProducts.size());
//    }

    public Map<String,Long> countProducts(String division) {
        List<Product> product;
        if(Objects.equals(division, "")) {
            product =productRepository.findByIsApprovedByAdminTrue();
        } else {
            product= productRepository.findByIsApprovedByAdminTrueAndSellerDivision(division);
        }
        return product.stream().collect(Collectors.groupingBy(Product::getCategoryName, Collectors.counting()));
    }

    public List<ProductView> showByCategory(String category){
        return productRepository.findByIsApprovedByAdminTrueAndCategoryCategory(category);
    }

    @Override
    public Category insertCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public ResponseEntity<?> removeCategory(Category category) {
        categoryRepository.delete(category);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @Override
    public Page<ProductView> filterProduct(FilterRequest filterRequest) {
        return productRepository.filter(filterRequest);
    }

}
