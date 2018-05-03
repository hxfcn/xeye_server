package com.xeye.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController 
public class TestController {
 
    @RequestMapping(value="/hello")  
    public String hello() {  
        return "Hello World!";  
    }  
    
}
