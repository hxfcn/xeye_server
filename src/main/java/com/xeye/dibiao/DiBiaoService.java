package com.xeye.dibiao;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

@Service
public class DiBiaoService {
	

    @Resource(name = "mydbJdbcTemplate")
    private JdbcTemplate myJdbcTemplate;
    
    public String query(float l,float b,float r,float t,int level) {
    	
    	String sql = "SELECT * FROM cityip WHERE lon > ? AND lon < ? AND lat > ? AND lat < ? AND type = ?";
    	List<CityDiBiaoInfo> items = myJdbcTemplate.query(sql, new CityDiBiaoMapper(),l,r,b,t,level);
    	
    	System.out.println(String.format("SELECT * FROM dibiao_tongji WHERE lon > %f AND lon < %f AND lat > %f AND lat < %f AND type = %d\n",
    			l,r,b,t,level));
    	JSONArray features = new JSONArray();
    	for(CityDiBiaoInfo item : items){
    		JSONArray coordinates = new JSONArray();
    		coordinates.add(item.getLon());
    		coordinates.add(item.getLat());
    		
    		JSONObject geometry = new JSONObject();
    		geometry.put("type", "Point");
    		geometry.put("coordinates", coordinates);
    		
    		JSONObject properties = new JSONObject();
    		properties.put("id", item.getId());
    		properties.put("count", item.getCount());
    		
    		JSONObject feature = new JSONObject();
    		feature.put("type", "Feature");
    		feature.put("properties", properties);
    		feature.put("geometry", geometry);
    		
    		features.add(feature);
    	}
    	
    	
    	JSONObject geojson = new JSONObject();
    	geojson.put("type", "FeatureCollection");
    	geojson.put("features", features);
    	return geojson.toJSONString();
    }
    public String queryIPDuan(String id) {
    	String sql = "SELECT cityip_merge.IP_Start,cityip_merge.IP_End FROM cityip_merge,cityip WHERE cityip.id = ' " + id +
    			"' AND cityip_merge.country = cityip.country AND cityip_merge.province = cityip.province AND cityip_merge.city = cityip.city LIMIT 20";
    	
    	/*String sql = "SELECT * FROM cityip_merge2";*/
    	List<Map<String, Object>> rows = myJdbcTemplate.queryForList(sql);
    	Iterator it = rows.iterator();
    	
    	JSONArray arr = new JSONArray();
    	
		 while(it.hasNext()) {
			 Map<String, Object> r = (Map<String, Object>)it.next();
			 String ip0 = (String)r.get("IP_Start");
			 String ip1 = (String)r.get("IP_End");
			 if(ip0 != null && ip1 != null) {
				 arr.add(ip0);
				 arr.add(ip1);
			 }

		 }
		 return arr.toJSONString();
    }
    public String queryStreet(float l,float b,float r,float t) {
    	String sql = "SELECT * FROM streetip WHERE Longitude > ? AND Longitude < ? AND Latitude > ? AND Latitude < ? limit 500";
    	List<StreetDiBiaoInfo> items = myJdbcTemplate.query(sql, new StreetDiBiaoMapper(),l,r,b,t);
    	
    	JSONArray features = new JSONArray();
    	for(StreetDiBiaoInfo item : items){
    		JSONArray coordinates = new JSONArray();
    		coordinates.add(item.getLongitude());
    		coordinates.add(item.getLatitude());
    		
    		JSONObject geometry = new JSONObject();
    		geometry.put("type", "Point");
    		geometry.put("coordinates", coordinates);
    		
    		JSONObject properties = new JSONObject();
    		properties.put("IP", item.getIP());
    		properties.put("Address", item.getAddress());
    		properties.put("Organization", item.getOrganization());
    		properties.put("ServerName", item.getServerName());
    		
    		JSONObject feature = new JSONObject();
    		feature.put("type", "Feature");
    		feature.put("properties", properties);
    		feature.put("geometry", geometry);
    		
    		features.add(feature);
    	}
    	
    	
    	JSONObject geojson = new JSONObject();
    	geojson.put("type", "FeatureCollection");
    	geojson.put("features", features);
    	return geojson.toJSONString();
    	
    }
    
    public void fill() {
    	String sql = "select * from cityip where lon is null or lat is null";
    	List<CityDiBiaoInfo> items = myJdbcTemplate.query(sql, new CityDiBiaoMapper());
    	
    	for(CityDiBiaoInfo item : items){

    		for(int i = 0; i < 5; ++i) {
        		int res = querylonlat(item);
        		if(res == 1) {
        			this.updateCityDiBiaoInfo(item);
        			break;
        		}
        		if(res < 0) {
        			break;
        		}
    		}
    	}
    	
    	
    }
	
    public static final String GET_URL = "http://maps.google.cn/maps/api/geocode/json?address=";  
   
    private int updateCityDiBiaoInfo(CityDiBiaoInfo item) {
    	String sql = "update cityip set lon = ?,lat= ? where id = ?";
    	int r = myJdbcTemplate.update(sql,item.getLon(),item.getLat(),item.getId());
    	System.out.println(item.toString()); 
    	return r;
    }
    
    public int querylonlat(CityDiBiaoInfo item) {
    	boolean res = false;
    	
		String qname = item.getCountry();
	    int tp = item.getType();
	    if(tp < 1 || tp > 3) {return -1;}
	    if(tp > 1) {
	    	qname += item.getProvince();
	    	
	        if(tp == 3) {
	        	qname += item.getCity();
	        }
	    }
	    
	    if(qname == null || qname.length() < 1) {
	    	return -1;
	    }
    	
	    
	    
    	try {
            URL url = new URL(GET_URL+qname);    // 把字符串转换为URL请求地址  
            

            HttpURLConnection connection = (HttpURLConnection) url.openConnection();// 打开连接  
            connection.connect();// 连接会话  
            // 获取输入流  
            BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));  
            String line;  
            StringBuilder sb = new StringBuilder();  
            while ((line = br.readLine()) != null) {// 循环读取流  
                sb.append(line);  
            }  
            br.close();// 关闭流  
            connection.disconnect();// 断开连接  
            String data = sb.toString();
            
            JSONObject obj = JSONObject.parseObject(data);
            if(obj == null) {return 0;}
            String res2 = obj.getString("status");
            
            if(res2.equals("OVER_QUERY_LIMIT")) {
            	return 0;
            }
            
            if(res2.equals("OK")) {
            	JSONArray arr = obj.getJSONArray("results");
            	if(arr == null) {return 0;}
            	JSONObject o1 = arr.getJSONObject(0);
            	if(o1 == null) {return 0;}
            	JSONObject o2 = o1.getJSONObject("geometry");
            	if(o2 == null) {return 0;}
            	JSONObject o3 = o2.getJSONObject("location");
            	if(o3 == null) {return 0;}
            	float lon = o3.getFloat("lng");
            	float lat = o3.getFloat("lat");
            	
            	item.setLon(lon);
            	item.setLat(lat);
            	return 1;
            }
    	} catch(IOException e) {
    		e.printStackTrace();
    		return 0;
    	}
    	return -1;
    	
    }
    
}
