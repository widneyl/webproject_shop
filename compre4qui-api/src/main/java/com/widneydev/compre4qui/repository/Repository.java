package com.widneydev.compre4qui.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.widneydev.compre4qui.model.Product;


public interface Repository extends CrudRepository<Product, Integer>{
    
    List<Product> findAll();

    Product findById(int id);
}
