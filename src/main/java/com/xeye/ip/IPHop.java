package com.xeye.ip;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.xeye.NumberUtil;

public class IPHop {

	public String ip;
	public float lon;
	public float lat;
	public int hop;
	
	public static IPHop create(String ip,String lons,String lats,Object routerHop) {
		
		if(ip == null || lons == null || lats == null) {
			return null;
		}
		IPHop hop = new IPHop();
		hop.ip = ip;
		hop.lon = NumberUtil.getFloat(lons,0);
		hop.lat = NumberUtil.getFloat(lats,0);
		hop.hop = NumberUtil.getInt(routerHop,-1);
		return hop;
	}
	
	public JSONObject getJson() {
		JSONObject o = new JSONObject();
		o.put("ip", ip);
		o.put("lon", lon);
		o.put("lat", lat);
		o.put("hop", hop);
		return o;
	}
};



