接口设计
1.地标查询
地址：/dibiao/request?bbox=l,b,r,t&level=z
参数：z=1国家，2省，3市，4街道。l,b,r,t查询经纬度范围
返回：Geojson格式点矢量要素，城市地标包含id,count属性，街道地标包含IP，Address，Organization，ServerName属性。

2.城市地标IP段查询
地址：/dibiao/cityip?id={id}
参数：{id}:所要查询城市的id
返回：ip地址数组：[ip1_start,ip1_end,ip2_start,ip2_end,...]。

