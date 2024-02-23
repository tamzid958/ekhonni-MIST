package com.dsi.backend.service;

<<<<<<< HEAD
import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.FilterRequest;
import com.dsi.backend.model.Product;
import com.dsi.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
=======
import com.dsi.backend.model.Product;
>>>>>>> 3697b34066df7348909add9b1d12926357f28d00
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public interface ProductService {
    Product saveProduct(Product product, MultipartFile[] file);

    Product updateProduct(Long id, Boolean isApprovedByAdmin);

    List<Product> fetchAllRequests();

    List<Product> fetchAllProducts();

    Product getProductById(Long id);

    List<Product> findSortedProducts(String field, Boolean direction);

    Page<Product> findProductsWithPagination(int offset, int pageSize);

    List<Product> filterProducts(FilterRequest filter);

}
