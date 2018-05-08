package com.xeye.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;


@RestController 
public class TestController {
 
	 @RequestMapping(value="/he")  
	 public String he() {  
	 	JSONObject o = new JSONObject();
	 	o.put("k", "key");
	 	
//	 	Object v = o.get("k");
//	 	Object v2 = "key";
//	 	if(v instanceof String ) {
//	 		boolean b1 = v.equals(v2);
//	 	}
	 	
	 	Object iv = 3;
	 	Object iv2 = 3;
	 	Object iv3 = null;
	 	if(iv instanceof Integer) {
	 		
	 		boolean iii = iv.getClass() == iv2.getClass();
	 		boolean b1 = iv.equals(iv2);
	 		int v1 = (int)iv;
	 		int v2 = (int)iv2;
	 		Integer v3 = (Integer)iv3;
	 	}
	 	
	 	Object fv = 3.56f;
	 	Object fv2 = 3.56f;
	 	Object fv3 = null;
	 	if(fv instanceof Float) {
	 		boolean b1 = fv.equals(fv3);
	 		Float v3 = (Float)fv3;
	 		float v1 = (float)fv;
	 		float v2 = (float)fv2;
	 		
	 	}
	 	//boolean b2 = v.
	 	return "";
	 }

    @RequestMapping(value="/hello")  
    public String hello() {  
    	
        JSONArray result = new JSONArray();
        try {
            String path1 = "http://maps.google.cn/maps/api/geocode/json?address=美国新墨西哥Meadow%20Lake";
            URL url = new URL(path1);    // 把字符串转换为URL请求地址
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();// 打开连接
            connection.connect();// 连接会话
            // 获取输入流
            BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));  
            String line;
            StringBuilder sb = new StringBuilder();
            while ((line = br.readLine()) != null) {//循环读取流
                sb.append(line);
            }
            br.close();//关闭流

//            connection.disconnect();// 断开连接
            String data = sb.toString();

            JSONObject obj = JSONObject.parseObject(data);
            if(obj == null) {}
            String res2 = obj.getString("status");

            if(res2.equals("OVER_QUERY_LIMIT")) {

            }

            if(res2.equals("OK")) {
                JSONArray arr = obj.getJSONArray("results");
                if(arr == null) {}
                JSONObject o1 = arr.getJSONObject(0);
                if(o1 == null) {}
                JSONObject o2 = o1.getJSONObject("geometry");
                if(o2 == null) {}
                JSONObject o3 = o2.getJSONObject("location");
                if(o3 == null) {}
                float lon = o3.getFloat("lng");
                float lat = o3.getFloat("lat");
                result.add(lon);
                result.add(lat);
            }
        } catch(IOException e) {
            e.printStackTrace();
            System.out.println("error1");

        }
    	
        return "Hello World!";  
    }  
    
}
