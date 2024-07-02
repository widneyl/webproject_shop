package com.widneydev.compre4qui.control;

import org.springframework.web.bind.annotation.RestController;

import com.widneydev.compre4qui.model.Product;
import com.widneydev.compre4qui.repository.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class Control {
    
    @Autowired
    private Repository action;

    @GetMapping("")
    public String message(){
        return "Hello World!";
    }

    @GetMapping("/welcome/{name}")
    public String welcome(@PathVariable String name){
        return "Welcome "+ name;
    }

    @PostMapping("/product")
    public Product product(@RequestBody Product p){
        return p;
    }

    @PostMapping("/register")
    public Product register(@RequestBody Product p){
        return action.save(p);
    }
}
