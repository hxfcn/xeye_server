package com.xeye.ip;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController 
public class IPController {
	
	
	@Autowired
	private IPService ipService;
	
    @RequestMapping(value="/ip/router")  
    public String requestRouter(@RequestParam String ip) {  
    	//System.out.println("Start query!");
    	String res = "";
    	res = ipService.queryRouter(ip);
    	return res;
    }
    
    @RequestMapping(value="/ip/info")  
    public String requestInfo(@RequestParam String ip) {  
    	//System.out.println("Start query!");
    	String res = "";
    	res = ipService.queryInfo(ip);
    	return res;
    }
}
