package com.xeye.ip;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import javax.annotation.Resource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.xeye.IPUtil;


@Service
public class IPService {

    @Resource(name = "mydbJdbcTemplate")
    private JdbcTemplate myJdbcTemplate;
    
    public String queryInfo(String ip) {
    	int iip = IPUtil.toInt(ip);
    	if(iip < 0) return "{}";
    	String sql = String.format("SELECT * FROM ip_geolocation WHERE ip_from < %d AND ip_to > %d", iip,iip);
    	List<Map<String, Object>> rows = myJdbcTemplate.queryForList(sql);
    	Iterator it = rows.iterator();
    	JSONObject obj = new JSONObject();
    	if(it.hasNext()) {
    		Map<String, Object> r = (Map<String, Object>)it.next();
    		String geo_level = (String)r.get("geo_level");
    		String method = (String)r.get("method");
    		String country_name = (String)r.get("country_name");
    		String city_name = (String)r.get("city_name");
    		String ASN = (String)r.get("ASN");
    		String ISP = (String)r.get("ISP");

    		obj.put("ip", ip);
    		obj.put("geo_level", geo_level);
    		obj.put("method", method);
    		obj.put("country_name", country_name);
    		obj.put("city_name", city_name);
    		obj.put("ASN", ASN);
    		obj.put("ISP", ISP);
    	}
    	return obj.toJSONString();
    }

    public String queryRouter(String ip) {
    	String sql = "SELECT tracer_test.*,probe_loc.* FROM tracer_test,probe_loc WHERE tracer_test.Destination_IP = '" + ip + 
    			"' AND probe_loc.Probe_IP = tracer_test.Source_IP;";
    	List<Map<String, Object>> rows = myJdbcTemplate.queryForList(sql);
    	Iterator it = rows.iterator();
    	Map<String,IPRouter> routers = new TreeMap<String,IPRouter>();
		 while(it.hasNext()) {
			 Map<String, Object> r = (Map<String, Object>)it.next();
			 String Source_IP = (String)r.get("Source_IP");
			 String Router_IP = (String)r.get("Router_IP");
			 String R_Latitude = (String)r.get("R_Latitude");
			 String R_Longitude = (String)r.get("R_Longitude");
			 String Destination_IP = (String)r.get("Destination_IP");
			 String P_Latitude = (String)r.get("P_Latitude");
			 String P_Longitude = (String)r.get("P_Longitude");
			 Object RouterHop = r.get("RouterHop");
			 
			 if(Source_IP == null || Source_IP.length() <= 0) {
				 continue;
			 }
			 
			 IPRouter router = routers.get(Source_IP);
			 if(router == null) {
				 router = new IPRouter();
				 IPHop hop = IPHop.create(Source_IP, P_Longitude, P_Latitude, 0);
				 router.add(hop);
				 routers.put(Source_IP, router);
			 }
			 
			 IPHop hop = IPHop.create(Router_IP, R_Longitude, R_Latitude, RouterHop);
			 router.add(hop);
		 }
		 
		 JSONArray arr = new JSONArray();
		 for (IPRouter value : routers.values()) { 
			  value.verify();
			  arr.add(value.getJson());
		 }
		 return arr.toJSONString();
    }
}
