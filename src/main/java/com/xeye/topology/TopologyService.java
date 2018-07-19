package com.xeye.topology;

import javax.annotation.Resource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class TopologyService {

    @Resource(name = "mydbJdbcTemplate")
    private JdbcTemplate myJdbcTemplate;
    
    public String queryTarget(String tip) {
    	return "";
    }
	
}
