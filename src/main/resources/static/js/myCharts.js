/**
 * Created by ZHP on 2018/5/15.
 */



//<--------------------IP_Charts--------------------->
// 基于准备好的dom，初始化echarts实例
var IP_Charts = echarts.init(document.getElementById('IP_Charts'),'shine');
// 指定图表的配置项和数据
var aa= [81, 81, 81, 85, 91];
var bb= [30, 41, 31, 50, 20];
var IP_Charts_option = {
		backgroundColor: 'rgba(6,18,60,0.1)',
    title: {
        text: '目标定位',
        link:'ip.html',
        target:'self',
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
    color : [ '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
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
                value :aa,
                name : '准确率'
            },
            {
                value :bb,
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
		backgroundColor: 'rgba(6,18,60,0.1)',
    title: {
        text: '地标挖掘',
        link:'landmark.html',
        target:'self',
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
    color : ['#ff7f50','#87cefa', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
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
        data: ['日本','中国','美国','韩国','台湾','其他']
    },
    series: [
        {
            name: '城市级',
            type: 'bar',
           label:{
                show:'true',
                position:'right'

           },
            data: [1123452,1113452,1343452,1123452,1543212,1543212 ]
        },
        {
            name: '街道级',
            type: 'bar',
            label:{
                show:'true',
                position:'right'
            },
            data: [ 13452,113452,143452,123452,143212,143212 ]
        }
    ]
};
Landmark_Charts.setOption(Landmark_Charts_option);



//<--------------------Topologie_Charts--------------------->
// 基于准备好的dom，初始化echarts实例
var Topologie_Charts = echarts.init(document.getElementById('Topologie_Charts'),'shine');
// 指定图表的配置项和数据
var Topologie_Charts_option = {
		backgroundColor: 'rgba(6,18,60,0.1)',
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
		backgroundColor: 'rgba(6,18,60,0.1)',
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
    color : [ '#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
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
		backgroundColor: 'rgba(6,18,60,0.1)',
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
var Home_Charts=echarts.init(document.getElementById('Home_Charts'),'macarons');
var Home_Charts_option = {
	    title: {
	        text: '网络空间实体资源测绘平台',
	       // subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
	        //sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
	        left: 'center',
	        top: 'top',
	        textStyle:{
	        	fontSize:'38',
	        	color:'white'
	        }
	      
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
	            	
	            	{name: 'Afghanistan', value: 0},
	            	{name: 'China', value: 0},
	            	{name: 'Japan', value: 0},
	            	{name: 'United States', value: 0},
	            	
	            	
	                {name: 'Angola', value: 0},
	                {name: 'Albania', value: 0},
	                {name: 'United Arab Emirates', value: 0},
	                {name: 'Argentina', value: 0},
	                {name: 'Armenia', value: 0},
	                {name: 'French Southern and Antarctic Lands', value: 0},
	                {name: 'Australia', value: 0},
	                {name: 'Austria', value: 0},
	                {name: 'Azerbaijan', value: 0},
	                {name: 'Burundi', value: 0},
	                {name: 'Belgium', value: 0},
	                {name: 'Benin', value:0},
	                {name: 'Burkina Faso', value: 0},
	                {name: 'Bangladesh', value: 0},
	                {name: 'Bulgaria', value: 0},
	                {name: 'The Bahamas', value: 0},
	                {name: 'Bosnia and Herzegovina', value: 0},
	                {name: 'Belarus', value: 0},
	                {name: 'Belize', value: 0},
	                {name: 'Bermuda', value: 0},
	                {name: 'Bolivia', value: 0},
	                {name: 'Bosnia and Herz.',value: 0},
	                {name: 'Brazil', value: 0},
	                {name: 'Brunei', value: 0},
	                {name: 'Bhutan', value: 0},
	                {name: 'Botswana', value: 0},
	                {name: 'Central African Republic', value: 0},
	                {name: 'Canada', value: 0},
	                {name: 'Switzerland', value: 0},
	                {name: 'Chile', value: 0},
	                {name: 'Côte d\'lvoire', value: 0},
	                {name:'Czech Rep.',value: 0},
	                {name: 'Ivory Coast', value: 0},
	                {name: 'Cameroon', value: 0},
	                {name: 'Democratic Republic of the Congo', value: 0},
	                {name: 'Republic of the Congo', value: 0},
	                {name: 'Colombia', value: 0},
	                {name: 'Costa Rica', value: 0},
	                {name: 'Cuba', value: 0},
	                {name: 'Congo', value: 0},
	                {name: 'Central African Rep.', value: 0},
	                {name: 'Northern Cyprus', value: 0},
	                {name: 'Cyprus', value: 0},
	                {name: 'Czech Republic', value: 0},
	                {name: 'Germany', value: 0},
	                {name: 'Djibouti', value: 0},
	                {name: 'Denmark', value: 0},
	                {name: 'Dominican Rep.', value: 0},
	                {name: 'Dem. Rep. Congo', value: 0},
	                {name: 'Algeria', value: 0},
	                {name: 'Ecuador', value: 0},
	                {name: 'Egypt', value: 0},
	                {name: 'Eritrea', value: 0},
	                {name: 'Eq. Guinea', value: 0},
	                {name: 'Spain', value: 0},
	                {name: 'Estonia', value: 0},
	                {name: 'Ethiopia', value: 0},
	                {name: 'Finland', value: 0},
	                {name: 'Fiji', value: 0},
	                {name: 'Falkland Islands', value: 0},
	                {name: 'France', value: 0},
	                {name: 'Gabon', value: 0},
	                {name: 'United Kingdom', value: 0},
	                {name: 'Georgia', value: 0},
	                {name: 'Ghana', value: 0},
	                {name: 'Guinea', value: 0},
	                {name: 'Gambia', value: 0},
	                {name: 'Guinea-Bissau', value: 0},
	                {name: 'Equatorial Guinea', value: 0},
	                {name: 'Greece', value: 0},
	                {name: 'Greenland', value: 0},
	                {name: 'Guatemala', value: 0},
	                {name: 'French Guiana', value: 0},
	                {name: 'Guyana', value: 0},
	                {name: 'Honduras', value: 0},
	                {name: 'Croatia', value: 0},
	                {name: 'Haiti', value: 0},
	                {name: 'Hungary', value: 0},
	                {name: 'Indonesia', value: 0},
	                {name: 'India', value:0},
	                {name: 'Ireland', value: 0},
	                {name: 'Iran', value: 0},
	                {name: 'Iraq', value: 0},
	                {name: 'Iceland', value: 0},
	                {name: 'Israel', value: 0},
	                {name: 'Italy', value: 0},
	                {name: 'Jamaica', value: 0},
	                {name: 'Jordan', value: 0},
	                
	                {name: 'Kazakhstan', value: 0},
	                {name: 'Kenya', value: 0},
	                {name: 'Kyrgyzstan', value: 0},
	                {name: 'Cambodia', value: 0},
	                {name: 'South Korea', value: 0},
	                {name: 'Kosovo', value: 0},
	                {name: 'Kuwait', value: 0},
	                {name: 'Korea', value: 0},
	                {name: 'Lao PDR', value: 0},
	                {name: 'Lebanon', value: 0},
	                {name: 'Liberia', value: 0},
	                {name: 'Libya', value: 0},
	                {name: 'Sri Lanka', value: 0},
	                {name: 'Lesotho', value: 0},
	                {name: 'Lithuania', value: 0},
	                {name: 'Luxembourg', value: 0},
	                {name: 'Latvia', value: 0},
	                {name: 'Morocco', value: 0},
	                {name: 'Moldova', value: 0},
	                {name: 'Madagascar', value: 0},
	                {name: 'Mexico', value: 0},
	                {name: 'Macedonia', value: 0},
	                {name: 'Mali', value: 0},
	                {name: 'Myanmar', value: 0},
	                {name: 'Montenegro', value: 0},
	                {name: 'Mongolia', value: 0},
	                {name: 'Mozambique', value: 0},
	                {name: 'Mauritania', value: 0},
	                {name: 'Malawi', value: 0},
	                {name: 'Malaysia', value: 0},
	                {name: 'Namibia', value: 0},
	                {name: 'New Caledonia', value: 0},
	                {name: 'Niger', value: 0},
	                {name: 'Nigeria', value: 0},
	                {name: 'Nicaragua', value: 0},
	                {name: 'Netherlands', value: 0},
	                {name: 'Norway', value: 0},
	                {name: 'Nepal', value: 0},
	                {name: 'New Zealand', value: 0},
	                {name: 'N. Cyprus', value: 0},
	                {name: 'Oman', value: 0},
	                {name: 'Pakistan', value: 0},
	                {name: 'Panama', value: 0},
	                {name: 'Peru', value: 0},
	                {name: 'Philippines', value: 0},
	                {name: 'Papua New Guinea', value: 0},
	                {name: 'Poland', value: 0},
	                {name: 'Puerto Rico', value: 0},
	                {name: 'Dem. Rep. Korea', value: 0},
	                
	                {name: 'Portugal', value: 0},
	                {name: 'Paraguay', value: 0},
	                {name: 'Palestine', value: 0},
	                {name: 'Qatar', value: 0},
	                {name: 'Romania', value: 0},
	                {name: 'Russia', value: 0},
	                {name: 'Rwanda', value: 0},
	                {name: 'Western Sahara', value: 0},
	                {name: 'Saudi Arabia', value: 0},
	                {name: 'Sudan', value: 0},
	                {name: 'South Sudan', value: 0},
	                {name: 'Senegal', value: 0},
	                {name: 'Serbia', value: 0},
	                {name: 'Solomon Islands', value: 0},
	                {name: 'Sierra Leone', value: 0},
	                {name: 'El Salvador', value: 0},
	                {name: 'Somaliland', value: 0},
	                {name: 'Somalia', value: 0},
	                {name: 'Republic of Serbia', value: 0},
	                {name: 'Suriname', value: 0},
	                {name: 'Slovakia', value: 0},
	                {name: 'Slovenia', value: 0},
	                {name: 'Sweden', value: 0},
	                {name: 'Swaziland', value: 0},
	                {name: 'Syria', value: 0},
	                {name: 'S. Sudan', value: 0},
	                {name: 'Chad', value: 0},
	                {name: 'Togo', value: 0},
	                {name: 'Thailand', value: 0},
	                {name: 'Tajikistan', value: 0},
	                {name: 'Turkmenistan', value: 0},
	                {name: 'East Timor', value: 0},
	                {name: 'Trinidad and Tobago', value: 0},
	                {name: 'Tunisia', value: 0},
	                {name: 'Turkey', value: 0},
	                {name: 'Tanzania', value: 0},
	                {name: 'United Republic of Tanzania', value: 0},
	                {name: 'Uganda', value: 0},
	                {name: 'Ukraine', value: 0},
	                {name: 'Uruguay', value: 0},
	                {name: 'United States of America', value: 0},
	                {name: 'Uzbekistan', value: 0},
	                {name: 'Venezuela', value: 0},
	                {name: 'Vietnam', value: 0},
	                {name: 'Vanuatu', value: 0},
	                {name: 'West Bank', value: 0},
	                {name:'W. Sahara', value: 0},
	                {name: 'Yemen', value: 0},
	                {name: 'South Africa', value: 0},
	                {name: 'Zambia', value: 0},
	                {name: 'Zimbabwe', value:0 }
	            ]
	        }
	    ]
	};
Home_Charts.setOption(Home_Charts_option);

