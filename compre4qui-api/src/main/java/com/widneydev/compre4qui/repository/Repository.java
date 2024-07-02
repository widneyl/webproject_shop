package com.widneydev.compre4qui.repository;

import org.springframework.data.repository.CrudRepository;
import com.widneydev.compre4qui.model.Product;


public interface Repository extends CrudRepository<Product, Integer>{
    
}
