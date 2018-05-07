package com.xeye.ip;

import java.util.ArrayList;
import java.util.List;

import com.alibaba.fastjson.JSONArray;

public class IPRouter {

	IPRouter(){
		_router = new ArrayList<IPHop>();
	}

	
	public void add(IPHop h) {
		if(h != null) {
			_router.add(h);
		}
	}
	
	public JSONArray getJson() {
		JSONArray arr = new JSONArray();
		for(int i = 0; i < _router.size(); i++) {
			IPHop e = _router.get(i);
			arr.add(e.getJson());
		}
		return arr;
	}
	
	public void verify() {
		
		//除空
		{
			for(int i = 0; i < _router.size(); i++) {
				IPHop e = _router.get(i);
				if(e.lon == 0 || e.lat == 0) {
					_router.remove(i);
					i--;
				}
			}
		}

		//除重
		{
			
			for(int i = 1; i < _router.size(); i++) {
				IPHop e = _router.get(i-1);
				IPHop e1 = _router.get(i);
				if(e.lon == e1.lon && e.lat == e1.lat) {
					_router.remove(i - 1);
					i--;
				}
			}
		}

	}
	
	private List<IPHop> _router;
}
