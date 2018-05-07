package com.xeye;

public class NumberUtil {

    /** 
     * 字符串转换为Integer 
     * @param str 字符串 
     * @return Integer, str为null时返回0 
     */  
    public static int getInt(Object obj) {  
        return getInt(obj, 0);  
    }  
  
    /** 
     * 字符串转换为Integer 
     * @param str 字符串 
     * @param def 默认值 
     * @return Integer, 字符串为null时返回def 
     */  
    public static int  getInt(Object obj, int def) {  
        String str = obj == null ? "" : obj.toString();  
  
        Integer i = null;  
  
        if (str.trim().length() == 0) {  
            i = new Integer(def);  
        }  
        else {  
            try {  
                i = Integer.valueOf(str);  
            }  
            catch (Exception e) {  
            }  
        }  
  
        return i == null ? new Integer(def) : i;  
    }  
    
    /** 
     * 字符串转换为Long 
     * @param str 字符串 
     * @return Long, str为null时返回0 
     */  
    public static Long getLong(Object obj) {  
        return getLong(obj, 0);  
    }  
  
    /** 
     * 字符串转换为Long 
     * @param str 字符串 
     * @param def 默认值 
     * @return Long, 字符串为null时返回def 
     */  
    public static Long getLong(Object obj, long def) {  
        String str = obj == null ? "" : obj.toString();  
  
        Long l = null;  
  
        if (str.trim().length() == 0) {  
            l = new Long(def);  
        }  
        else {  
            try {  
                l = Long.valueOf(str);  
            }  
            catch (Exception e) {  
            }  
        }  
  
        return l == null ? new Long(def) : l;  
    }  
    
    /** 
     * 字符串转换为Float 
     * @param str 字符串 
     * @return Float, str为null时返回0 
     */  
    public static float getFloat(Object obj) {  
        return getFloat(obj, 0);  
    }  
  
    /** 
     * 字符串转换为Float 
     * @param str 字符串 
     * @param def 默认值 
     * @return Float, 字符串为null时返回def 
     */  
    public static float getFloat(Object obj, float def) {  
        String str = obj == null ? "" : obj.toString();  
  
        Float l = null;  
  
        if (str.trim().length() == 0) {  
            l = new Float(def);  
        }  
        else {  
            try {  
                l = Float.valueOf(str);  
            }  
            catch (Exception e) {  
            }  
        }  
  
        return l == null ? new Float(def) : l;  
    }  
}
