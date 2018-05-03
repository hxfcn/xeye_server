package com.xeye.dibiao;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;	

public class CityDiBiaoMapper implements RowMapper<CityDiBiaoInfo> {

	@Override
	public CityDiBiaoInfo mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		
		int id = rs.getInt("id");	
		String country = rs.getString("country");
		String province = rs.getString("province");
		String city = rs.getString("city");
		float lon = rs.getFloat("lon");
		float lat = rs.getFloat("lat");
		int type = rs.getInt("type");
		int count = rs.getInt("count");
		
		CityDiBiaoInfo item = new CityDiBiaoInfo();
		item.setId(id);
		item.setCity(city);
		item.setCountry(country);
		item.setLat(lat);
		item.setLon(lon);
		item.setProvince(province);
		item.setType(type);
		item.setCount(count);
		
		return item;
	}

}
