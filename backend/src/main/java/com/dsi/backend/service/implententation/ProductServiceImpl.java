package com.dsi.backend.service.implententation;

import com.dsi.backend.exception.ProductNotFoundException;
import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.Category;
import com.dsi.backend.model.FilterRequest;
import com.dsi.backend.model.Product;
import com.dsi.backend.repository.AppUserRepository;
import com.dsi.backend.repository.CategoryRepository;
import com.dsi.backend.repository.ProductRepository;
import com.dsi.backend.service.ProductService;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
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
    private EntityManager entityManager;

    public Product saveProduct(Product product) {
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

//    public List<Product> filterProducts(FilterRequest filter) {
//        List<Product> filteredProducts;
//
//        filteredProducts = productRepository.findByIsApprovedByAdminTrue();
//
//        Set<String> categoriesWithSubcategories = getCategoriesBySubcategories(filter.getSubcategories());
//
//        if (filter.getSubcategories() != null && !filter.getSubcategories().isEmpty()) {
//            List<Product> subCategoryFilteredProducts = productRepository.findByIsApprovedByAdminTrueAndCategorySubCategoryIn(filter.getSubcategories());
//            Set<Product> subCategoryFilteredProductsSet = new HashSet<>(subCategoryFilteredProducts);
//            filteredProducts = filteredProducts.stream()
//                    .filter(subCategoryFilteredProductsSet::contains)
//                    .collect(Collectors.toList());
//        }
//
//        if (filter.getCategories() != null && !filter.getCategories().isEmpty()) {
//            List<String> category = filter.getCategories();
//            category.removeAll(categoriesWithSubcategories);
//            List<Product> categoryFilteredProducts = productRepository.findByIsApprovedByAdminTrueAndCategoryCategoryIn(category);
//            Set<Product> categoryFilteredProductsSet = new HashSet<>(categoryFilteredProducts);
//            filteredProducts.addAll(categoryFilteredProductsSet);
//
//            }
//
//        if (filter.getDivision() != null && !filter.getDivision().isEmpty()) {
//            List<Product> districtFilteredProducts = productRepository.findByIsApprovedByAdminTrueAndSellerDivisionIn(filter.getDivision());
//            Set<Product> districtFilteredProductsSet = new HashSet<>(districtFilteredProducts);
//            filteredProducts = filteredProducts.stream()
//                    .filter(districtFilteredProductsSet::contains)
//                    .collect(Collectors.toList());
//        }
//
//        if (filter.getPrice() != null && filter.getPrice().size() == 2) {
//            Double minPrice = filter.getPrice().get(0);
//            Double maxPrice = filter.getPrice().get(1);
//            List<Product> priceFilteredProducts = productRepository.findByIsApprovedByAdminTrueAndStartingPriceBetween(minPrice, maxPrice);
//            Set<Product> priceFilteredProductsSet = new HashSet<>(priceFilteredProducts);
//            filteredProducts = filteredProducts.stream()
//                    .filter(priceFilteredProductsSet::contains)
//                    .collect(Collectors.toList());
//        }
//
//        return filteredProducts;
//    }

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
}
