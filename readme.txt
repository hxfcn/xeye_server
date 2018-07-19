接口设计
1.地标查询
地址：/dibiao/request?bbox=l,b,r,t&level=z
参数：z=1国家，2省，3市，4街道。l,b,r,t查询经纬度范围
返回：Geojson格式点矢量要素，城市地标包含id,count属性，街道地标包含IP，Address，Organization，ServerName属性。

2.城市地标IP段查询
地址：/dibiao/cityip?id={id}
参数：{id}:所要查询城市的id (17032)
返回：ip地址数组：[ip1_start,ip1_end,ip2_start,ip2_end,...]。

3.ip定位路由信息
地址：/ip/router?ip={ip}
参数：{ip}:所要查询的目标ip (12.217.64.130,12.217.64.129,23.24.93.222,23.24.93.242)
返回：
[
    [
        {
            "ip": "104.217.24.221",
            "hop": 0,
            "lon": -73.9933,
            "lat": 40.7605
        },
        {
            "ip": "12.217.64.130",
            "hop": 10,
            "lon": -97.822,
            "lat": 37.751
        }
    ],
    [
        {
            "ip": "23.238.132.132",
            "hop": 0,
            "lon": -118.0818,
            "lat": 34.0616
        },
        {
            "ip": "12.217.64.130",
            "hop": 10,
            "lon": -97.822,
            "lat": 37.751
        }
    ]
]

4.ip属性信息
地址：/ip/info?ip={ip}
参数：{ip}:所要查询的目标ip  (12.217.64.130,12.217.64.129,23.24.93.222,23.24.93.242)
返回：
{
    "city_name": "Kissimmee",
    "method": "POP",
    "ip": "23.24.93.222",
    "geo_level": "city-level",
    "ISP": "Knet Techonlogy (Beijing) Co. Ltd.",
    "country_name": "United States",
    "ASN": "34741",
    "lon"："",
    "lat":""
}

5.拓扑输入查询
地址：/topology/target?ip={ip}
参数：{ip}:所要查询的目标ip
返回：
{
    source:[
        {
            "ip": "12.217.64.130",
            "lon": -97.822,
            "lat": 37.751,
            "city":"ZZ",
            "nation":"cn",
            "type":"cn",
            "path":[
                {"ip","sy","as"},
                {"ip","sy","as"},
            ]
        }
    ],
    target:{
        "ip":"123"
    },
    relation:{
        
    }
}

