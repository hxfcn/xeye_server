package com.xeye.topology;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController 
public class TopologyController {

	@Autowired
	private TopologyService topoService;
	
    @RequestMapping(value="/topology/target") 
    public String requestRouter(@RequestParam String ip) {  
    	//System.out.println("Start query!");
    	String res = "";
    	res = topoService.queryTarget(ip);
    	return res;
    }
}
