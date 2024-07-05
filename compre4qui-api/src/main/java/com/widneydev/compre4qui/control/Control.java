package com.widneydev.compre4qui.control;

import org.springframework.web.bind.annotation.RestController;
import com.widneydev.compre4qui.model.Product;
import com.widneydev.compre4qui.repository.Repository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class Control {
    
    @Autowired
    private Repository action;

    @GetMapping("")
    public String message(){
        return "Hello World!";
    }

    @GetMapping("api/welcome/{name}")
    public String welcome(@PathVariable String name){
        return "Welcome "+ name;
    }

    @PostMapping("api/product")
    public Product product(@RequestBody Product p){
        return p;
    }

    @PostMapping("api/register")
    public Product register(@RequestBody Product p){
        return action.save(p);
    }

    @PutMapping("api/edit")
    public Product edit(@RequestBody Product p){
        return action.save(p);
    }

    @DeleteMapping("api/{id}")
    public void remove(@PathVariable int id){
        Product p = selectID(id);
        action.delete(p);
    }


    @GetMapping("api/select")
    public List<Product> select(){
        return action.findAll();
    }

    @GetMapping("api/select/{id}")
    public Product selectID(@PathVariable int id){
        return action.findById(id);
    }
}
