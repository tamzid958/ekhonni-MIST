package com.dsi.backend.service.implententation;

import com.dsi.backend.exception.ProductNotFoundException;
import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.Category;
import com.dsi.backend.model.FilterRequest;

import com.dsi.backend.model.ImageModel;

import com.dsi.backend.model.Product;
import com.dsi.backend.repository.AppUserRepository;
import com.dsi.backend.repository.CategoryRepository;
import com.dsi.backend.repository.ProductRepository;
import com.dsi.backend.service.ImageModelService;
import com.dsi.backend.service.ProductService;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.*;

import java.util.stream.Collectors;
import java.util.stream.IntStream;


@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private AppUserRepository appUserRepository;

    @Autowired
    private EntityManager entityManager;


    @Autowired
    private ImageModelService imageModelService;



    public Product saveProduct(Product product, MultipartFile[] file) {
        product.setIsApprovedByAdmin(null);
        product.setIsSold(false);
        product.setProductTime(LocalDateTime.now());
        Category category = categoryRepository.findByCategoryAndSubCategory(product.getCategory().getCategory(),product.getCategory().getSubCategory());
        if (category == null) {
            throw new IllegalArgumentException("Invalid category name");
        }
        AppUser seller = appUserRepository.findByEmail(product.getSeller().getEmail());
        product.setCategory(category);
        product.setSeller(seller);

        try {
            Set<ImageModel> image = imageModelService.uploadImage(file);
            product.setProductImage(image);

        } catch (Exception exception) {
            System.out.println(exception.getMessage());
            return null;
        }

        return productRepository.save(product);
    }

    public Product updateProduct(Long id, Boolean isApprovedByAdmin) {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));
        existingProduct.setIsApprovedByAdmin(isApprovedByAdmin);
        if(isApprovedByAdmin) existingProduct.setIsBidActive(true); //bid activates immediately after being accepted
        return productRepository.save(existingProduct);
    }

    public List<Product> fetchAllRequests() {
        return productRepository.findByIsApprovedByAdminIsNullOrderByProductTimeAsc();
    }

    public List<Product> fetchAllProducts() {
        return productRepository.findByIsApprovedByAdminTrue();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(()->new ProductNotFoundException("Product not found by id: "+id));
    }

    public List<Product> findSortedProducts(String field, Boolean direction) {
       if (field.equalsIgnoreCase("startingPrice"))
       {
           if(!direction)
               return productRepository.findByIsApprovedByAdminTrueOrderByStartingPriceAsc();
           else
               return productRepository.findByIsApprovedByAdminTrueOrderByStartingPriceDesc();
       }
       else if (field.equalsIgnoreCase("productTime")) {
           if (!direction)
               return productRepository.findByIsApprovedByAdminTrueOrderByProductTimeAsc();
           else
               return productRepository.findByIsApprovedByAdminTrueOrderByProductTimeDesc();
       }

       else return null;
    }

    public Page<Product> findProductsWithPagination(int page, int size) {
        PageRequest pageable = PageRequest.of(page, size);
        return productRepository.findByIsApprovedByAdminTrue(pageable);
    }

    public Set<String> getCategoriesBySubcategories(List<String> subcategories) {
        List<Category> categories = categoryRepository.findBySubCategoryIn(subcategories);
        return categories.stream().map(Category::getCategory).collect(Collectors.toSet());
    }

    public List<Product> filterProducts(FilterRequest filter) {
        List<Product> filteredProducts = new ArrayList<>();
        Set<String> categoriesWithSubcategories = getCategoriesBySubcategories(filter.getSubcategories());

        if (filter.getSubcategories() != null && !filter.getSubcategories().isEmpty()) {
            filteredProducts.addAll(productRepository.findByIsApprovedByAdminTrueAndCategorySubCategoryIn(filter.getSubcategories()));
        }
        if (filter.getCategories() != null && !filter.getCategories().isEmpty()) {
            List<String> category = filter.getCategories();
            category.removeAll(categoriesWithSubcategories);
            filteredProducts.addAll(productRepository.findByIsApprovedByAdminTrueAndCategoryCategoryIn(category));
        }
        if (filter.getDivision() != null && !filter.getDivision().isEmpty()) {
            List<Product> districtFilteredProducts = productRepository.findByIsApprovedByAdminTrueAndSellerDivisionIn(filter.getDivision());
            if ((filter.getSubcategories().isEmpty()) && (filter.getCategories().isEmpty())) {
                filteredProducts.addAll(districtFilteredProducts);
            }
            else {
            filteredProducts = filteredProducts.stream()
                    .filter(districtFilteredProducts::contains)
                    .collect(Collectors.toList());
            }
        }
        if (filter.getPrice() != null && filter.getPrice().size() == 2) {
            Double minPrice = filter.getPrice().get(0);
            Double maxPrice = filter.getPrice().get(1);
            List<Product> priceFilteredProducts = productRepository.findByIsApprovedByAdminTrueAndStartingPriceBetween(minPrice, maxPrice);
            if ((filter.getSubcategories().isEmpty()) && (filter.getCategories().isEmpty()) && (filter.getDivision().isEmpty())) {
                filteredProducts.addAll(priceFilteredProducts);
            }
            else {
                filteredProducts = filteredProducts.stream()
                    .filter(priceFilteredProducts::contains)
                    .collect(Collectors.toList());
            }
        }
        else if ((filter.getSubcategories().isEmpty()) && (filter.getCategories().isEmpty()) && (filter.getDivision().isEmpty()) && (filter.getPrice().isEmpty())) {
            filteredProducts.addAll(productRepository.findByIsApprovedByAdminTrue());
        }

        return filteredProducts;
    }

    public Map<String,Long> countProducts() {
        List<Product> product= productRepository.findByIsApprovedByAdminTrue();
        Map<String, Long> map=product.stream().collect(Collectors.groupingBy(Product::getCategoryName, Collectors.counting()));
        return map;
    }

    public List<Product> showByCategory(String category){
        return productRepository.findByIsApprovedByAdminTrueAndCategoryCategory(category);
    }
}
