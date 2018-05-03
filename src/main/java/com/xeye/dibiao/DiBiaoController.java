package com.xeye.dibiao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController 
public class DiBiaoController {
	
	@Autowired
	private DiBiaoService dibiaoService;
	
    @RequestMapping(value="/dibiao/fill")  
    public String fill() {  
    	dibiaoService.fill();
    	return "filled";
    }  
    
    @RequestMapping(value="/dibiao/request")  
    public String request(@RequestParam int level,@RequestParam float[] bbox) {  
    	System.out.println("Start query!");
    	String res =  dibiaoService.query(bbox[0], bbox[1], bbox[2], bbox[3], level);
    	System.out.println("End query!");
    	return res;
    }  
}
