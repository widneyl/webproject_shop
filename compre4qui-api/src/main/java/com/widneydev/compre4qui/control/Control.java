package com.widneydev.compre4qui.control;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class Control {
    
    @GetMapping("")
    public String message(){
        return "Hello World!";
    }
}
