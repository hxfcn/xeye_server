package com.xeye;

public class IPUtil {

//	public static final boolean verify(String ip) {
//		
//	}
	
	public final static int toInt(String ip) {
		String[] arr = ip.split("\\.");
		if(arr.length < 4) return -1;
		
		int i1 = NumberUtil.getInt(arr[0]);
		i1 = i1 * 256 * 256 *256;
		
		int i2 = NumberUtil.getInt(arr[1]);
		i2 = i2 * 256 * 256;
		
		int i3 = NumberUtil.getInt(arr[2]);
		i3 = i3 * 256;
		
		int i4 = NumberUtil.getInt(arr[3]);
		
		return i1 + i2 + i3 + i4;
	}
}
