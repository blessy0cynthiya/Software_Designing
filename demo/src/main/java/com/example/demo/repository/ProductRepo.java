
package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.model.Product;



public interface ProductRepo extends JpaRepository<Product,Integer>{
    @Query("SELECT s FROM Product s WHERE s.productId = :productId")
    Product findTicketId(@RequestParam("productId") int productId);
}