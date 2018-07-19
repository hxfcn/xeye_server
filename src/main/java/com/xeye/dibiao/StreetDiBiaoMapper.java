package com.xeye.dibiao;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class StreetDiBiaoMapper implements RowMapper<StreetDiBiaoInfo> {

	@Override
	public StreetDiBiaoInfo mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		
		String ip = rs.getString("IP");	
		String org = rs.getString("Organization");
		String server = rs.getString("ServerName");
		String adress = rs.getString("Address");
		String type = rs.getString("type");
		float lon = rs.getFloat("Longitude");
		float lat = rs.getFloat("Latitude");

		
		StreetDiBiaoInfo item = new StreetDiBiaoInfo();
		item.setIP(ip);
		item.setOrganization(org);
		item.setServerName(server);
		item.setAddress(adress);
		item.setLongitude(lon);
		item.setLatitude(lat);

		item.setType(type == null ? "" : type);
		return item;
	}
}
