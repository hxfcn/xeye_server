/**
 * Created by ZHP on 2018/5/15.
 */



//<--------------------IP_Charts--------------------->
// 基于准备好的dom，初始化echarts实例
var IP_Charts = echarts.init(document.getElementById('IP_Charts'),'shine');
// 指定图表的配置项和数据
var IP_Charts_option = {
    title: {
        text: 'IP地理位置数据',
        x:'left',
        textStyle:{
        	color:'#FFFFFF',
        	fontSize: 18
        }
    },
    tooltip: {
        trigger: 'item',
        position: ['40%','40%'],
        formatter: function (params, ticket, callback) {
            $.get('detail?name=' + params.name, function (content) {
                callback(ticket, toHTML(content));
            });
            var str=params.name+'<br>';
            for(var i=0;i<this.IP_Charts_option.radar.indicator.length;i++) {
                str=str+this.IP_Charts_option.radar.indicator[i].name+":"+params.value[i]+'%';
                if(i!=this.IP_Charts_option.radar.indicator.length-1)
                    str=str+"<br>";
            }
            return str;
        }
    },
    legend: {
        orient: 'vertical',
        data: ['准确率', 'IP比例'],
        right:2,
        bottom:2

    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        shape: 'circle',
        splitNumber: 5,
        bottom:2,
        center:['48%','55%'],
        indicator: [
            { name: '美国', max: 100},
            { name: '台湾', max: 100},
            { name: '韩国', max: 100},
            { name: '中国', max: 100},
            { name: '日本', max: 100}
        ]
    },
    series: [{
        name: '准确率 vs IP比例',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [81, 81, 81, 85, 91],
                name : '准确率'
            },
            {
                value : [30, 41, 31, 50, 20],
                name : 'IP比例'
            }
        ]
    }]
};

// 使用刚指定的配置项和数据显示图表。
IP_Charts.setOption(IP_Charts_option);


//<--------------------Landmark_Charts--------------------->
// 基于准备好的dom，初始化echarts实例
var Landmark_Charts = echarts.init(document.getElementById('Landmark_Charts'),'shine');
// 指定图表的配置项和数据
var Landmark_Charts_option = {
    title: {
        text: '地标数据',
        textStyle:{
        	color:'#FFFFFF',
        	fontSize: 18
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['城市级', '街道级'],
        right:3
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0,0.001],
        axisLabel: {
            formatter: '{value}'
        }
    },
    yAxis: {
        type: 'category',
        data: ['美国','日本','中国','韩国','其他']
    },
    series: [
        {
            name: '城市级',
            type: 'bar',
           label:{
                show:'true',
                position:'right'

           },
            data: [1543212, 1123452, 1343452, 1113452, 1123452]
        },
        {
            name: '街道级',
            type: 'bar',
            label:{
                show:'true',
                position:'right'
            },
            data: [143212, 123452, 143452, 113452, 13452]
        }
    ]
};
Landmark_Charts.setOption(Landmark_Charts_option);



//<--------------------Topologie_Charts--------------------->
// 基于准备好的dom，初始化echarts实例
var Topologie_Charts = echarts.init(document.getElementById('Topologie_Charts'),'shine');
// 指定图表的配置项和数据
var Topologie_Charts_option = {
    title: {
        text: '拓扑数据',
        textStyle:{
        	color:'#FFFFFF',
        	fontSize: 18
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['各个国家的IP节点总数', '路由器IP节点总数','国家内部链接总数','国家内部路由器间链接总数','链接总数','路由器间链接总数'],
        type: 'scroll',
        left:80,
        top:5,
        right:5
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis:  {
        type: 'value'
    },
    xAxis: {
        type: 'category',
        data: ['美国','中国','日本','韩国','台湾','香港','Area-1','Area-2','Area-3','Area-4']
    },
    series: [
        {
            name: '各个国家的IP节点总数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 334, 390, 330, 320, 390, 330, 320]
        },
        {
            name: '路由器IP节点总数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 390, 330, 320]
        },
        {
            name: '国家内部链接总数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310, 390, 330, 320]
        },
        {
            name: '国家内部路由器间链接总数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [150, 212, 201, 154, 190, 330, 410, 390, 330, 320]
        },
        {
            name: '链接总数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320, 390, 330, 320]
        },
        {
            name: '路由器间链接总数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320, 390, 330, 320]
        }
    ]
};
Topologie_Charts.setOption(Topologie_Charts_option);

//<--------------------Wifi_Charts--------------------->
// 基于准备好的dom，初始化echarts实例
var Wifi_Charts = echarts.init(document.getElementById('Wifi_Charts'),'shine');
// 指定图表的配置项和数据
var Wifi_Charts_option = {
    title: {
        text: 'Wifi/基站数据',
        right:1,
        textStyle:{
        	color:'#FFFFFF',
        	fontSize: 18
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Wifi', '基站'],
        left:3
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0,0.001],
        axisLabel: {
            formatter: '{value}'
        }
    },
    yAxis: {
        type: 'category',
        data: ['美国','日本','中国','韩国','其他']
    },
    series: [
        {
            name: 'Wifi',
            type: 'bar',
            label:{
                show:'true',
                position:'right'

            },
            data: [1543212, 1123452, 1343452, 1113452, 1123452]
        },
        {
            name: '基站',
            type: 'bar',
            label:{
                show:'true',
                position:'right'
            },
            data: [143212, 123452, 143452, 113452, 13452]
        }
    ]
};
Wifi_Charts.setOption(Wifi_Charts_option);

//<--------------------RealResource_Charts--------------------->
// 基于准备好的dom，初始化echarts实例
var RealResource_Charts = echarts.init(document.getElementById('RealResource_Charts'),'shine');
// 指定图表的配置项和数据
var RealResource_Charts_option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        x: 'left',
        data:['美国','中国','日本','其他国家','视频监控设备','工控设备','其他设备']
    },
    series: [
        {
            name:'国家前3的设备数量和比例',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            center:['48%','55%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:50, name:'美国', selected:true},
                {value:27, name:'中国'},
                {value:20, name:'日本'},
                {value:3, name:'其他'}
            ]
        },
        {
            name:'设备类型分布',
            type:'pie',
            radius: ['40%', '55%'],
            center:['48%','55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 3,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 12,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [1, 2],
                            borderRadius: 1
                        }
                    }
                }
            },
            data:[
                {value:50, name:'视频监控设备'},
                {value:6, name:'工控设备'},
                {value:44, name:'其他设备'},

            ]
        }
    ]
};
RealResource_Charts.setOption(RealResource_Charts_option);

//<--------------------Home_Charts--------------------->
//基于准备好的dom，初始化echarts实例
var Home_Charts=echarts.init(document.getElementById('Home_Charts'),'shine');
var Home_Charts_option = {
	    title: {
	        text: 'World Population (2010)',
	        subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
	        sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
	        left: 'center',
	        top: 'top'
	    },
	    tooltip: {
	        trigger: 'item',
	        formatter: function (params) {
	            var value = (params.value + '').split('.');
	            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
	                    + '.' + value[1];
	            return params.seriesName + '<br/>' + params.name + ' : ' + value;
	        }
	    },
	    toolbox: {
	        show: true,
	        orient: 'vertical',
	        left: 'right',
	        top: 'center',
	        feature: {
	            dataView: {readOnly: false},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    visualMap: {
	        min: 0,
	        max: 1000000,
	        text:['High','Low'],
	        realtime: false,
	        calculable: true,
	        inRange: {
	            color: ['lightskyblue','yellow', 'orangered']
	        }
	    },
	    series: [
	        {
	            name: 'World Population (2010)',
	            type: 'map',
	            mapType: 'world',
	            roam: true,
	            itemStyle:{
	                emphasis:{label:{show:true}}
	            },
	            data:[
	                {name: 'Afghanistan', value: 28397.812},
	                {name: 'Angola', value: 19549.124},
	                {name: 'Albania', value: 3150.143},
	                {name: 'United Arab Emirates', value: 8441.537},
	                {name: 'Argentina', value: 40374.224},
	                {name: 'Armenia', value: 2963.496},
	                {name: 'French Southern and Antarctic Lands', value: 268.065},
	                {name: 'Australia', value: 22404.488},
	                {name: 'Austria', value: 8401.924},
	                {name: 'Azerbaijan', value: 9094.718},
	                {name: 'Burundi', value: 9232.753},
	                {name: 'Belgium', value: 10941.288},
	                {name: 'Benin', value: 9509.798},
	                {name: 'Burkina Faso', value: 15540.284},
	                {name: 'Bangladesh', value: 151125.475},
	                {name: 'Bulgaria', value: 7389.175},
	                {name: 'The Bahamas', value: 66402.316},
	                {name: 'Bosnia and Herzegovina', value: 3845.929},
	                {name: 'Belarus', value: 9491.07},
	                {name: 'Belize', value: 308.595},
	                {name: 'Bermuda', value: 64.951},
	                {name: 'Bolivia', value: 716.939},
	                {name: 'Brazil', value: 195210.154},
	                {name: 'Brunei', value: 27.223},
	                {name: 'Bhutan', value: 716.939},
	                {name: 'Botswana', value: 1969.341},
	                {name: 'Central African Republic', value: 4349.921},
	                {name: 'Canada', value: 34126.24},
	                {name: 'Switzerland', value: 7830.534},
	                {name: 'Chile', value: 17150.76},
	                {name: 'China', value: 1359821.465},
	                {name: 'Ivory Coast', value: 60508.978},
	                {name: 'Cameroon', value: 20624.343},
	                {name: 'Democratic Republic of the Congo', value: 62191.161},
	                {name: 'Republic of the Congo', value: 3573.024},
	                {name: 'Colombia', value: 46444.798},
	                {name: 'Costa Rica', value: 4669.685},
	                {name: 'Cuba', value: 11281.768},
	                {name: 'Northern Cyprus', value: 1.468},
	                {name: 'Cyprus', value: 1103.685},
	                {name: 'Czech Republic', value: 10553.701},
	                {name: 'Germany', value: 83017.404},
	                {name: 'Djibouti', value: 834.036},
	                {name: 'Denmark', value: 5550.959},
	                {name: 'Dominican Republic', value: 10016.797},
	                {name: 'Algeria', value: 37062.82},
	                {name: 'Ecuador', value: 15001.072},
	                {name: 'Egypt', value: 78075.705},
	                {name: 'Eritrea', value: 5741.159},
	                {name: 'Spain', value: 46182.038},
	                {name: 'Estonia', value: 1298.533},
	                {name: 'Ethiopia', value: 87095.281},
	                {name: 'Finland', value: 5367.693},
	                {name: 'Fiji', value: 860.559},
	                {name: 'Falkland Islands', value: 49.581},
	                {name: 'France', value: 63230.866},
	                {name: 'Gabon', value: 1556.222},
	                {name: 'United Kingdom', value: 62066.35},
	                {name: 'Georgia', value: 4388.674},
	                {name: 'Ghana', value: 24262.901},
	                {name: 'Guinea', value: 10876.033},
	                {name: 'Gambia', value: 1680.64},
	                {name: 'Guinea Bissau', value: 10876.033},
	                {name: 'Equatorial Guinea', value: 696.167},
	                {name: 'Greece', value: 11109.999},
	                {name: 'Greenland', value: 56.546},
	                {name: 'Guatemala', value: 14341.576},
	                {name: 'French Guiana', value: 231.169},
	                {name: 'Guyana', value: 786.126},
	                {name: 'Honduras', value: 7621.204},
	                {name: 'Croatia', value: 4338.027},
	                {name: 'Haiti', value: 9896.4},
	                {name: 'Hungary', value: 10014.633},
	                {name: 'Indonesia', value: 240676.485},
	                {name: 'India', value: 1205624.648},
	                {name: 'Ireland', value: 4467.561},
	                {name: 'Iran', value: 240676.485},
	                {name: 'Iraq', value: 30962.38},
	                {name: 'Iceland', value: 318.042},
	                {name: 'Israel', value: 7420.368},
	                {name: 'Italy', value: 60508.978},
	                {name: 'Jamaica', value: 2741.485},
	                {name: 'Jordan', value: 6454.554},
	                {name: 'Japan', value: 127352.833},
	                {name: 'Kazakhstan', value: 15921.127},
	                {name: 'Kenya', value: 40909.194},
	                {name: 'Kyrgyzstan', value: 5334.223},
	                {name: 'Cambodia', value: 14364.931},
	                {name: 'South Korea', value: 51452.352},
	                {name: 'Kosovo', value: 97.743},
	                {name: 'Kuwait', value: 2991.58},
	                {name: 'Laos', value: 6395.713},
	                {name: 'Lebanon', value: 4341.092},
	                {name: 'Liberia', value: 3957.99},
	                {name: 'Libya', value: 6040.612},
	                {name: 'Sri Lanka', value: 20758.779},
	                {name: 'Lesotho', value: 2008.921},
	                {name: 'Lithuania', value: 3068.457},
	                {name: 'Luxembourg', value: 507.885},
	                {name: 'Latvia', value: 2090.519},
	                {name: 'Morocco', value: 31642.36},
	                {name: 'Moldova', value: 103.619},
	                {name: 'Madagascar', value: 21079.532},
	                {name: 'Mexico', value: 117886.404},
	                {name: 'Macedonia', value: 507.885},
	                {name: 'Mali', value: 13985.961},
	                {name: 'Myanmar', value: 51931.231},
	                {name: 'Montenegro', value: 620.078},
	                {name: 'Mongolia', value: 2712.738},
	                {name: 'Mozambique', value: 23967.265},
	                {name: 'Mauritania', value: 3609.42},
	                {name: 'Malawi', value: 15013.694},
	                {name: 'Malaysia', value: 28275.835},
	                {name: 'Namibia', value: 2178.967},
	                {name: 'New Caledonia', value: 246.379},
	                {name: 'Niger', value: 15893.746},
	                {name: 'Nigeria', value: 159707.78},
	                {name: 'Nicaragua', value: 5822.209},
	                {name: 'Netherlands', value: 16615.243},
	                {name: 'Norway', value: 4891.251},
	                {name: 'Nepal', value: 26846.016},
	                {name: 'New Zealand', value: 4368.136},
	                {name: 'Oman', value: 2802.768},
	                {name: 'Pakistan', value: 173149.306},
	                {name: 'Panama', value: 3678.128},
	                {name: 'Peru', value: 29262.83},
	                {name: 'Philippines', value: 93444.322},
	                {name: 'Papua New Guinea', value: 6858.945},
	                {name: 'Poland', value: 38198.754},
	                {name: 'Puerto Rico', value: 3709.671},
	                {name: 'North Korea', value: 1.468},
	                {name: 'Portugal', value: 10589.792},
	                {name: 'Paraguay', value: 6459.721},
	                {name: 'Qatar', value: 1749.713},
	                {name: 'Romania', value: 21861.476},
	                {name: 'Russia', value: 21861.476},
	                {name: 'Rwanda', value: 10836.732},
	                {name: 'Western Sahara', value: 514.648},
	                {name: 'Saudi Arabia', value: 27258.387},
	                {name: 'Sudan', value: 35652.002},
	                {name: 'South Sudan', value: 9940.929},
	                {name: 'Senegal', value: 12950.564},
	                {name: 'Solomon Islands', value: 526.447},
	                {name: 'Sierra Leone', value: 5751.976},
	                {name: 'El Salvador', value: 6218.195},
	                {name: 'Somaliland', value: 9636.173},
	                {name: 'Somalia', value: 9636.173},
	                {name: 'Republic of Serbia', value: 3573.024},
	                {name: 'Suriname', value: 524.96},
	                {name: 'Slovakia', value: 5433.437},
	                {name: 'Slovenia', value: 2054.232},
	                {name: 'Sweden', value: 9382.297},
	                {name: 'Swaziland', value: 1193.148},
	                {name: 'Syria', value: 7830.534},
	                {name: 'Chad', value: 11720.781},
	                {name: 'Togo', value: 6306.014},
	                {name: 'Thailand', value: 66402.316},
	                {name: 'Tajikistan', value: 7627.326},
	                {name: 'Turkmenistan', value: 5041.995},
	                {name: 'East Timor', value: 10016.797},
	                {name: 'Trinidad and Tobago', value: 1328.095},
	                {name: 'Tunisia', value: 10631.83},
	                {name: 'Turkey', value: 72137.546},
	                {name: 'United Republic of Tanzania', value: 44973.33},
	                {name: 'Uganda', value: 33987.213},
	                {name: 'Ukraine', value: 46050.22},
	                {name: 'Uruguay', value: 3371.982},
	                {name: 'United States of America', value: 312247.116},
	                {name: 'Uzbekistan', value: 27769.27},
	                {name: 'Venezuela', value: 236.299},
	                {name: 'Vietnam', value: 89047.397},
	                {name: 'Vanuatu', value: 236.299},
	                {name: 'West Bank', value: 13.565},
	                {name: 'Yemen', value: 22763.008},
	                {name: 'South Africa', value: 51452.352},
	                {name: 'Zambia', value: 13216.985},
	                {name: 'Zimbabwe', value: 13076.978}
	            ]
	        }
	    ]
	};
Home_Charts.setOption(Home_Charts_option);

