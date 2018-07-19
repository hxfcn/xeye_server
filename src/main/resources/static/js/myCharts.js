/**
 * Created by ZHP on 2018/5/15.
 */

// <--------------------Home_Charts--------------------->
// 基于准备好的dom，初始化echarts实例
var Home_Charts=echarts.init(document.getElementById('Home_Charts'),'macarons');
var Home_Charts_option = {
	    title: {
	    	//text: '网络空间实体资源测绘平台',
	    	text: '网络空间资源测绘及可视化分析平台',
	       // subtext: 'from United Nations, Total population, both sexes
			// combined, as of 1 July (thousands)',
	        // sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
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
	            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') ;
	            return params.seriesName + '<br/>' + params.name + ' : ' + value;
	        }
	    },
	    visualMap: {
	        min: 0,
	        max: 1000000,
	        text:['High','Low'],
	        textStyle:{
            	color:'#FFFFFF',
            	fontSize: 12
            },
	        realtime: true,
	        calculable: true,
	        left:'25%',
	        inRange: {
	            color: ['lightskyblue','yellow', 'orangered']
	        }
	    },
	    series: [
	        {
	            name: 'IP地址数量',
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
	            	{name: 'Iran', value: 0},
	            	{name: 'Pakistan', value: 0},
	            	{name: 'Syria', value: 0},
	            	{name: 'Korea', value: 0}
	            	
// {name: 'Angola', value: 0},
// {name: 'Albania', value: 0},
// {name: 'United Arab Emirates', value: 0},
// {name: 'Argentina', value: 0},
// {name: 'Armenia', value: 0},
// {name: 'French Southern and Antarctic Lands', value: 0},
// {name: 'Australia', value: 0},
// {name: 'Austria', value: 0},
// {name: 'Azerbaijan', value: 0},
// {name: 'Burundi', value: 0},
// {name: 'Belgium', value: 0},
// {name: 'Benin', value:0},
// {name: 'Burkina Faso', value: 0},
// {name: 'Bangladesh', value: 0},
// {name: 'Bulgaria', value: 0},
// {name: 'The Bahamas', value: 0},
// {name: 'Bosnia and Herzegovina', value: 0},
// {name: 'Belarus', value: 0},
// {name: 'Belize', value: 0},
// {name: 'Bermuda', value: 0},
// {name: 'Bolivia', value: 0},
// {name: 'Bosnia and Herz.',value: 0},
// {name: 'Brazil', value: 0},
// {name: 'Brunei', value: 0},
// {name: 'Bhutan', value: 0},
// {name: 'Botswana', value: 0},
// {name: 'Central African Republic', value: 0},
// {name: 'Canada', value: 0},
// {name: 'Switzerland', value: 0},
// {name: 'Chile', value: 0},
// {name: 'Côte d\'lvoire', value: 0},
// {name: 'Czech Rep.',value: 0},
// {name: 'Ivory Coast', value: 0},
// {name: 'Cameroon', value: 0},
// {name: 'Democratic Republic of the Congo', value: 0},
// {name: 'Republic of the Congo', value: 0},
// {name: 'Colombia', value: 0},
// {name: 'Costa Rica', value: 0},
// {name: 'Cuba', value: 0},
// {name: 'Congo', value: 0},
// {name: 'Central African Rep.', value: 0},
// {name: 'Northern Cyprus', value: 0},
// {name: 'Cyprus', value: 0},
// {name: 'Czech Republic', value: 0},
// {name: 'Germany', value: 0},
// {name: 'Djibouti', value: 0},
// {name: 'Denmark', value: 0},
// {name: 'Dominican Rep.', value: 0},
// {name: 'Dem. Rep. Congo', value: 0},
// {name: 'Algeria', value: 0},
// {name: 'Ecuador', value: 0},
// {name: 'Egypt', value: 0},
// {name: 'Eritrea', value: 0},
// {name: 'Eq. Guinea', value: 0},
// {name: 'Spain', value: 0},
// {name: 'Estonia', value: 0},
// {name: 'Ethiopia', value: 0},
// {name: 'Finland', value: 0},
// {name: 'Fiji', value: 0},
// {name: 'Falkland Islands', value: 0},
// {name: 'France', value: 0},
// {name: 'Gabon', value: 0},
// {name: 'United Kingdom', value: 0},
// {name: 'Georgia', value: 0},
// {name: 'Ghana', value: 0},
// {name: 'Guinea', value: 0},
// {name: 'Gambia', value: 0},
// {name: 'Guinea-Bissau', value: 0},
// {name: 'Equatorial Guinea', value: 0},
// {name: 'Greece', value: 0},
// {name: 'Greenland', value: 0},
// {name: 'Guatemala', value: 0},
// {name: 'French Guiana', value: 0},
// {name: 'Guyana', value: 0},
// {name: 'Honduras', value: 0},
// {name: 'Croatia', value: 0},
// {name: 'Haiti', value: 0},
// {name: 'Hungary', value: 0},
// {name: 'Indonesia', value: 0},
// {name: 'India', value:0},
// {name: 'Ireland', value: 0},
//	                
// {name: 'Iraq', value: 0},
// {name: 'Iceland', value: 0},
// {name: 'Israel', value: 0},
// {name: 'Italy', value: 0},
// {name: 'Jamaica', value: 0},
// {name: 'Jordan', value: 0},
//	                
// {name: 'Kazakhstan', value: 0},
// {name: 'Kenya', value: 0},
// {name: 'Kyrgyzstan', value: 0},
// {name: 'Cambodia', value: 0},
// {name: 'South Korea', value: 0},
// {name: 'Kosovo', value: 0},
// {name: 'Kuwait', value: 0},
//	                
// {name: 'Lao PDR', value: 0},
// {name: 'Lebanon', value: 0},
// {name: 'Liberia', value: 0},
// {name: 'Libya', value: 0},
// {name: 'Sri Lanka', value: 0},
// {name: 'Lesotho', value: 0},
// {name: 'Lithuania', value: 0},
// {name: 'Luxembourg', value: 0},
// {name: 'Latvia', value: 0},
// {name: 'Morocco', value: 0},
// {name: 'Moldova', value: 0},
// {name: 'Madagascar', value: 0},
// {name: 'Mexico', value: 0},
// {name: 'Macedonia', value: 0},
// {name: 'Mali', value: 0},
// {name: 'Myanmar', value: 0},
// {name: 'Montenegro', value: 0},
// {name: 'Mongolia', value: 0},
// {name: 'Mozambique', value: 0},
// {name: 'Mauritania', value: 0},
// {name: 'Malawi', value: 0},
// {name: 'Malaysia', value: 0},
// {name: 'Namibia', value: 0},
// {name: 'New Caledonia', value: 0},
// {name: 'Niger', value: 0},
// {name: 'Nigeria', value: 0},
// {name: 'Nicaragua', value: 0},
// {name: 'Netherlands', value: 0},
// {name: 'Norway', value: 0},
// {name: 'Nepal', value: 0},
// {name: 'New Zealand', value: 0},
// {name: 'N. Cyprus', value: 0},
// {name: 'Oman', value: 0},
//	                
// {name: 'Panama', value: 0},
// {name: 'Peru', value: 0},
// {name: 'Philippines', value: 0},
// {name: 'Papua New Guinea', value: 0},
// {name: 'Poland', value: 0},
// {name: 'Puerto Rico', value: 0},
// {name: 'Dem. Rep. Korea', value: 0},
//	                
// {name: 'Portugal', value: 0},
// {name: 'Paraguay', value: 0},
// {name: 'Palestine', value: 0},
// {name: 'Qatar', value: 0},
// {name: 'Romania', value: 0},
// {name: 'Russia', value: 0},
// {name: 'Rwanda', value: 0},
// {name: 'Western Sahara', value: 0},
// {name: 'Saudi Arabia', value: 0},
// {name: 'Sudan', value: 0},
// {name: 'South Sudan', value: 0},
// {name: 'Senegal', value: 0},
// {name: 'Serbia', value: 0},
// {name: 'Solomon Islands', value: 0},
// {name: 'Sierra Leone', value: 0},
// {name: 'El Salvador', value: 0},
// {name: 'Somaliland', value: 0},
// {name: 'Somalia', value: 0},
// {name: 'Republic of Serbia', value: 0},
// {name: 'Suriname', value: 0},
// {name: 'Slovakia', value: 0},
// {name: 'Slovenia', value: 0},
// {name: 'Sweden', value: 0},
// {name: 'Swaziland', value: 0},
//	                
// {name: 'S. Sudan', value: 0},
// {name: 'Chad', value: 0},
// {name: 'Togo', value: 0},
// {name: 'Thailand', value: 0},
// {name: 'Tajikistan', value: 0},
// {name: 'Turkmenistan', value: 0},
// {name: 'East Timor', value: 0},
// {name: 'Trinidad and Tobago', value: 0},
// {name: 'Tunisia', value: 0},
// {name: 'Turkey', value: 0},
// {name: 'Tanzania', value: 0},
// {name: 'United Republic of Tanzania', value: 0},
// {name: 'Uganda', value: 0},
// {name: 'Ukraine', value: 0},
// {name: 'Uruguay', value: 0},
// {name: 'United States of America', value: 0},
// {name: 'Uzbekistan', value: 0},
// {name: 'Venezuela', value: 0},
// {name: 'Vietnam', value: 0},
// {name: 'Vanuatu', value: 0},
// {name: 'West Bank', value: 0},
// {name:'W. Sahara', value: 0},
// {name: 'Yemen', value: 0},
// {name: 'South Africa', value: 0},
// {name: 'Zambia', value: 0},
// {name: 'Zimbabwe', value:0 }
	            ]
	        }
	    ]
	};
Home_Charts.setOption(Home_Charts_option);

// <--------------------IP_Charts--------------------->
// 基于准备好的dom，初始化echarts实例



var dataMap = {};
function dataFormatter(obj,Country) {
    var pList = Country; // ['美国','中国大陆','日本','韩国','巴基斯坦','阿富汗','叙利亚','伊朗','中国香港','中国台湾'];
    var temp;
 
        var max = 0;
        var sum = 0;
        temp = obj;
        for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[i] = {
                name : pList[i],
                value : temp[i]
            }
        }
        obj['max'] = Math.floor(max / 10) * 10;
        obj['sum'] = sum;
    return obj;
}
// IP国家排序
dataMap.IPCountry=['US','CN','JP','KR','PK','AF','SY','IR','HK','TW'];
// IP地址数量
dataMap.dataIP = dataFormatter([92,52,23,19,0.33,0.0453,0.121,0.112,0.364,0.659],dataMap.IPCountry);
// IP地址块数量
dataMap.dataIPB = dataFormatter([103.6,61.1,47.1,26.5,0.54,0.07,0.189,0.175,0.568,1.03],dataMap.IPCountry);
// IP地址覆盖城市
dataMap.dataCITY = dataFormatter([467,249,63,32,15,13,7,8,1,17],dataMap.IPCountry);
//Landmark国家排序
dataMap.LandmarkCountry= ['AF','SY','PK','IR','HK','TW','KR','JP','US','CN'];
// Landmark城市级地址数量
dataMap.dataLandmark = dataFormatter([80,1088,4596,9942,17038,21211,40689,110164,216260,338173],dataMap.LandmarkCountry);
//节点国家排名
dataMap.TopoNodeCountry=['US','CN','KR','JP','TW','HK','PK','IR','SY','IQ','AF'];
//节点数
dataMap.dataTopoNode=dataFormatter([13074763,10841422,4413931,1302188,673909,305303,100261,82213,38720,6036,1842],dataMap.TopoNodeCountry);
//实体资源国家排名  美国,大陆,韩国,香港,日本,台湾,伊朗,巴基斯坦,叙利亚,阿富汗
dataMap.RealResourceCountry=['US','CN','KR','HK','JP','TW','IR','PK','SY','AF'];
//实体资源数量
dataMap.dataRealResource=dataFormatter([79094660,26093332,12805806,7543918,5473946,3890405,937031,238983,19748,16120],dataMap.RealResourceCountry);
//Wifi国家排名
dataMap.WifiCountry=['AF','SY','PK','IR','JP','HK','TW','KR','US','CN'];
//Wifi数量
dataMap.dataWifi=dataFormatter([8341,256959,282131,906526,3232649,4103673,5444694,5639494,15081470,200351891],dataMap.WifiCountry);

IP_Charts_option = {
	backgroundColor: 'rgba(6,18,60,0.1)',   
    title: {
        	text: 'IP地理位置数据',
        	subtext:'IP地址总数:187631300  IP地址块总数:2408720  覆盖城市:872',
        	link:'ip.html',
            target:'self',
            x:'left',
            textStyle:{
            	color:'#FFFFFF',
            	fontSize: 18
            }
        },
        tooltip: {
        	
        },
        // color : [ '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622',
		// '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        legend: {
        	left:150,
            top:5,
            right:5,
            
            x: 'right',
            data: ['IP地址数量', 'IP地址块数量'],
        },
        calculable : true,
        grid: {
            top: 80,
            bottom: 30,
            left:40,
            right:40,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: false,
                        formatter: function (params) {
                            return params.value.replace('\n', '');
                        }
                    }
                }
            }
        },
        xAxis: [
            {
                'type':'category',
                'axisLabel':{'interval':0},
                'data':dataMap.IPCountry,
                splitLine: {show: false}
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'IP地址数量',
                axisLabel: {
                    formatter: function (value) {
                            return value+'M';
                        }
                     },
                
                nameTestStyle:{
                	align:'left'
                }
            },
            {
                type: 'value',
                name: 'IP地址块数量',
                max:120,
                min:0,
                axisLabel: {
                    formatter: function (value) {
                            return value+'W';
                        }
                     },
                boundaryGap: [1.2, 1.2],
                nameTestStyle:{
                	align:'left'
                }
            }
        ],
        series: [
                {
                	name: 'IP地址数量', 
                	type: 'bar',
                	data: dataMap.dataIP
                	},
                {
                	name: 'IP地址块数量',
                	type: 'bar',
                	data: dataMap.dataIPB
                	},
                {
                	name: '覆盖城市数量',
                	type: 'pie',
                	center: ['65%', '50%'],
                	radius: '28%',
                	z: 100,
                    data: [
                    {name: dataMap.dataCITY[0].name, value: dataMap.dataCITY[0].value},
                    {name: dataMap.dataCITY[1].name, value: dataMap.dataCITY[1].value},
                    {name: dataMap.dataCITY[2].name, value: dataMap.dataCITY[2].value},
                    {name: dataMap.dataCITY[3].name, value: dataMap.dataCITY[3].value},
                    {name: dataMap.dataCITY[4].name, value: dataMap.dataCITY[4].value},
                    {name: dataMap.dataCITY[5].name, value: dataMap.dataCITY[5].value},
                    {name: dataMap.dataCITY[6].name, value: dataMap.dataCITY[6].value},
                    {name: dataMap.dataCITY[7].name, value: dataMap.dataCITY[7].value},
                    {name: dataMap.dataCITY[8].name, value: dataMap.dataCITY[8].value},
                    {name: dataMap.dataCITY[9].name, value: dataMap.dataCITY[9].value}
                ]}
            ]
};

var IP_Charts = echarts.init(document.getElementById('IP_Charts'),'shine');

// 使用刚指定的配置项和数据显示图表。
IP_Charts.setOption(IP_Charts_option);
// IP_Charts.setOption(option);
IP_Charts.on('click', function (params) {
	Home_Charts_option.series["0"].name='IP地址数量';
	Home_Charts_option.visualMap.max=dataMap.dataIP['max']*1000000;
	// stu.find((element) => (element.name == '李四'))
	// Home_Charts_option.series["0"].data["0"].value=dataMap.dataIP.find((element)
	// => (element.name == '阿富汗')).value*1000000;['US','CN','KR','JP','TW','HK','PK','IR','SY','IQ','AF']
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Afghanistan')).value=dataMap.dataIP.find((element) => (element.name == 'AF')).value*1000000;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'United States')).value=dataMap.dataIP.find((element) => (element.name == 'US')).value*1000000;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'China')).value=(dataMap.dataIP.find((element) => (element.name == 'CN')).value+dataMap.dataIP.find((element) => (element.name == 'HK')).value+dataMap.dataIP.find((element) => (element.name == 'TW')).value)*1000000;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Korea')).value=dataMap.dataIP.find((element) => (element.name == 'KR')).value*1000000;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Japan')).value=dataMap.dataIP.find((element) => (element.name == 'JP')).value*1000000;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Iran')).value=dataMap.dataIP.find((element) => (element.name == 'IR')).value*1000000;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Pakistan')).value=dataMap.dataIP.find((element) => (element.name == 'PK')).value*1000000;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Syria')).value=dataMap.dataIP.find((element) => (element.name == 'SY')).value*1000000;
	
	Home_Charts.setOption(Home_Charts_option);
});

//init
function Home_init(){
	Home_Charts_option.series["0"].name='IP地址数量';
	Home_Charts_option.visualMap.max=dataMap.dataIP['max']*1000000;
	// stu.find((element) => (element.name == '李四'))
	// Home_Charts_option.series["0"].data["0"].value=dataMap.dataIP.find((element)
	// => (element.name == '阿富汗')).value*1000000;['US','CN','KR','JP','TW','HK','PK','IR','SY','IQ','AF']
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Afghanistan')).value=dataMap.dataIP.find((element) => (element.name == 'AF')).value*1000000;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'United States')).value=dataMap.dataIP.find((element) => (element.name == 'US')).value*1000000;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'China')).value=(dataMap.dataIP.find((element) => (element.name == 'CN')).value+dataMap.dataIP.find((element) => (element.name == 'HK')).value+dataMap.dataIP.find((element) => (element.name == 'TW')).value)*1000000;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Korea')).value=dataMap.dataIP.find((element) => (element.name == 'KR')).value*1000000;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Japan')).value=dataMap.dataIP.find((element) => (element.name == 'JP')).value*1000000;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Iran')).value=dataMap.dataIP.find((element) => (element.name == 'IR')).value*1000000;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Pakistan')).value=dataMap.dataIP.find((element) => (element.name == 'PK')).value*1000000;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Syria')).value=dataMap.dataIP.find((element) => (element.name == 'SY')).value*1000000;
	
	Home_Charts.setOption(Home_Charts_option);
}
Home_init();
// <--------------------Landmark_Charts--------------------->
// 基于准备好的dom，初始化echarts实例
var Landmark_Charts = echarts.init(document.getElementById('Landmark_Charts'),'shine');
// 指定图表的配置项和数据
var Landmark_Charts_option = {
		backgroundColor: 'rgba(6,18,60,0.1)',
    title: {
        text: '地标数据',
        link:'landmark.html',
        subtext:'城市级地标:759241  街道级地标:32075',
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
        top:5,
        right:3
    },
    grid: {
        left: '2%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        // minInterval:70000 ,
        boundaryGap: [0,0],
        axisLabel: {
            formatter: function (value) {
                    return value/10000+'W';
                }
             }
    },
    yAxis: {
        type: 'category',
        data: ['Others','HK','TW','KR','JP','US','CN']
    },
    series: [
        {
            name: '城市级',
            type: 'bar',
           label:{
                show:'true',
                position:'right'

           },
            data: [15706,17038,21211,40689,110164,216260,338173]
        },
        {
            name: '街道级',
            type: 'bar',
            label:{
                show:'true',
                position:'right'
            },
            data: [ 1807,1891,2026,1190,5314,5026,14821]
        }
    ]
};
Landmark_Charts.setOption(Landmark_Charts_option);
Landmark_Charts.on('click', function (params) {
	Home_Charts_option.series["0"].name='城市级地标';
	Home_Charts_option.visualMap.max=dataMap.dataLandmark['max'];
	// stu.find((element) => (element.name == '李四'))
	// Home_Charts_option.series["0"].data["0"].value=dataMap.dataIP.find((element)
	// => (element.name == '阿富汗')).value*1000000;['US','CN','KR','JP','TW','HK','PK','IR','SY','IQ','AF']
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Afghanistan')).value=dataMap.dataLandmark.find((element) => (element.name == 'AF')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'United States')).value=dataMap.dataLandmark.find((element) => (element.name == 'US')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'China')).value=(dataMap.dataLandmark.find((element) => (element.name == 'CN')).value+dataMap.dataIP.find((element) => (element.name == 'HK')).value+dataMap.dataIP.find((element) => (element.name == 'TW')).value);
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Korea')).value=dataMap.dataLandmark.find((element) => (element.name == 'KR')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Japan')).value=dataMap.dataLandmark.find((element) => (element.name == 'JP')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Iran')).value=dataMap.dataLandmark.find((element) => (element.name == 'IR')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Pakistan')).value=dataMap.dataLandmark.find((element) => (element.name == 'PK')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Syria')).value=dataMap.dataLandmark.find((element) => (element.name == 'SY')).value;
	
	Home_Charts.setOption(Home_Charts_option);
});


// <--------------------Topologie_Charts--------------------->
// 基于准备好的dom，初始化echarts实例
var Topologie_Charts = echarts.init(document.getElementById('Topologie_Charts'),'shine');
// 指定图表的配置项和数据
var Topologie_Charts_option = {
		backgroundColor: 'rgba(6,18,60,0.1)',
    title: {
        text: '拓扑数据',
        link:'http://39.104.120.69:3000/ip',
        subtext:'节点数:32,200,727  路由器节点数:1,714,719  链接数:39,447,104',
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
        data: ['节点数', '路由器节点数','链接数','路由器链接数','地区内链接数','地区内路由器链接数','地区外链接数','地区外路由器链接数'],
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
        type: 'value',
        	 axisLabel: {
                 formatter: function (value) {
                         return value/10000+'W';
                     }
                  }
    },
    xAxis: {
        type: 'category',
        data: dataMap.TopoNodeCountry
    },
    series: [
        {
            name: '节点数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                },
             
             
            },
            data: [13074763,10841422,4413931,1302188,673909,305303,100261,82213,38720,6036,1842]
        },
        {
            name: '路由器节点数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                },
               
             
            },
            data: [989384,261969,103945,105185,16369,24904,2571,2915,72,809,312]
        },
        {
            name: '链接数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [17424716,13737483,5426237,1634632,815046,535679,120550,93027,45389,24967,4907]
        },
        {
            name: '路由器链接数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [3690466,2597416,980554,336883,62533,136931,15802,10025,996,7819,2014]
        },
        {
            name: '地区内链接数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [14295628,13540291,5130714,1485611,771628,333861,108648,82236,28799,3476,1045]
        },
        
        {
            name: '地区内路由器链接数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [2570677,2503125,873442,267487,50564,70122,6776,4206,54,891,296]
        },
        {
            name: '地区外链接数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [3129088,197192,295523,149021,43418,201818,11902,10791,16590,21491,3862]
        },
        {
            name: '地区外路由器链接数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [1119789,94291,107112,69396,11969,66809,9026,5819,942,6928,1718]
        }
    ]
};
Topologie_Charts.setOption(Topologie_Charts_option);
Topologie_Charts.on('click', function (params) {
	Home_Charts_option.series["0"].name='节点数';
	Home_Charts_option.visualMap.max=dataMap.dataTopoNode['max'];
	// stu.find((element) => (element.name == '李四'))
	// Home_Charts_option.series["0"].data["0"].value=dataMap.dataIP.find((element)
	// => (element.name == '阿富汗')).value*1000000;['US','CN','KR','JP','TW','HK','PK','IR','SY','IQ','AF']
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Afghanistan')).value=dataMap.dataTopoNode.find((element) => (element.name == 'AF')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'United States')).value=dataMap.dataTopoNode.find((element) => (element.name == 'US')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'China')).value=(dataMap.dataTopoNode.find((element) => (element.name == 'CN')).value+dataMap.dataIP.find((element) => (element.name == 'HK')).value+dataMap.dataIP.find((element) => (element.name == 'TW')).value);
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Korea')).value=dataMap.dataTopoNode.find((element) => (element.name == 'KR')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Japan')).value=dataMap.dataTopoNode.find((element) => (element.name == 'JP')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Iran')).value=dataMap.dataTopoNode.find((element) => (element.name == 'IR')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Pakistan')).value=dataMap.dataTopoNode.find((element) => (element.name == 'PK')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Syria')).value=dataMap.dataTopoNode.find((element) => (element.name == 'SY')).value;
	
	Home_Charts.setOption(Home_Charts_option);
});



// <--------------------Wifi_Charts--------------------->
// 基于准备好的dom，初始化echarts实例
var Wifi_Charts = echarts.init(document.getElementById('Wifi_Charts'),'shine');
// 指定图表的配置项和数据
var Wifi_Charts_option = {
		backgroundColor: 'rgba(6,18,60,0.1)',
    title: {
        text: 'Wifi/基站数据',
        subtext:'Wifi总数:235307828  基站总数:31820413',
        left:1,
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
        top:5,
        right:3
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
    	type: 'category',
        data: ['中国香港','中国台湾','韩国','美国','中国大陆']
    },
    yAxis: {
    	type: 'value',
        boundaryGap: [0,0.001],
        axisLabel: {
        	 
                 formatter: function (value) {
                     
                     var d=value/1000000;
                     return d+'M';
                 }
             
        }
        
    },
    series: [
        {
            name: 'Wifi',
            type: 'bar',
            label:{
                show:'true',
                position:'top'

            },
            data: [4103673,5444694,5639494,15081470,200351891]
        },
        {
            name: '基站',
            type: 'bar',
            label:{
                show:'true',
                position:'top'
            },
            data: [682458,828978,870211,1514609,26574098]
        }
    ]
};
Wifi_Charts.setOption(Wifi_Charts_option);
Wifi_Charts.on('click', function (params) {
	Home_Charts_option.series["0"].name='Wifi数';
	Home_Charts_option.visualMap.max=dataMap.dataWifi['max'];
	// stu.find((element) => (element.name == '李四'))
	// Home_Charts_option.series["0"].data["0"].value=dataMap.dataIP.find((element)
	// => (element.name == '阿富汗')).value*1000000;['US','CN','KR','JP','TW','HK','PK','IR','SY','IQ','AF']
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Afghanistan')).value=dataMap.dataWifi.find((element) => (element.name == 'AF')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'United States')).value=dataMap.dataWifi.find((element) => (element.name == 'US')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'China')).value=(dataMap.dataWifi.find((element) => (element.name == 'CN')).value+dataMap.dataIP.find((element) => (element.name == 'HK')).value+dataMap.dataIP.find((element) => (element.name == 'TW')).value);
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Korea')).value=dataMap.dataWifi.find((element) => (element.name == 'KR')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Japan')).value=dataMap.dataWifi.find((element) => (element.name == 'JP')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Iran')).value=dataMap.dataWifi.find((element) => (element.name == 'IR')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Pakistan')).value=dataMap.dataWifi.find((element) => (element.name == 'PK')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Syria')).value=dataMap.dataWifi.find((element) => (element.name == 'SY')).value;
	
	Home_Charts.setOption(Home_Charts_option);
});


// <--------------------RealResource_Charts--------------------->
// 基于准备好的dom，初始化echarts实例
var RealResource_Charts = echarts.init(document.getElementById('RealResource_Charts'),'shine');
// 指定图表的配置项和数据
var RealResource_Charts_option = {
		backgroundColor: 'rgba(6,18,60,0.1)',
		title: {
	        text: '实体资源',
	        link:'http://111.204.219.223:8020/report/eye/index',
	        left:1,
	        textStyle:{
	        	color:'#FFFFFF',
	        	fontSize: 18
	        }
	    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        x: 'left',
        data:['美国','中国大陆','韩国','其他国家','Router','DVR','IP Camera','Others'],
        type: 'scroll',
        left:85,
        top:5,
        right:5
    },
   
    series: [
        {
            name:'国家前3的设备数量和比例',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            center:['58%','55%'],
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
                {value:79094660, name:'美国', selected:true},
                {value:26093332, name:'中国大陆'},
                {value:12805806, name:'韩国'},
                {value:18120151, name:'其他'}
            ]
        },
        {
            name:'设备类型分布',
            type:'pie',
            radius: ['40%', '55%'],
            center:['58%','55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                   // backgroundColor: '#eee',
                   // borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 3,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#ffffff',
                            lineHeight: 22,
                            align: 'center'
                        },
                       
                        hr: {
                            borderColor: '#eeeeee',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 12,
                            lineHeight: 33
                        },
                        per: {
                            color: '#fff',
                            backgroundColor: '#12',
                            padding: [1, 1],
                            borderRadius: 1
                        }
                    }
                }
            },
            data:[
                {value:3521141, name:'Router'},
                {value:2715862, name:'DVR'},
                {value:2146766, name:'IP Camera'},
                {value:1141548, name:'Others'}
            ]
        }
    ]
};
RealResource_Charts.setOption(RealResource_Charts_option);
RealResource_Charts.on('click', function (params) {
	Home_Charts_option.series["0"].name='实体资源数';
	Home_Charts_option.visualMap.max=dataMap.dataRealResource['max'];
	// stu.find((element) => (element.name == '李四'))
	// Home_Charts_option.series["0"].data["0"].value=dataMap.dataIP.find((element)
	// => (element.name == '阿富汗')).value*1000000;['US','CN','KR','JP','TW','HK','PK','IR','SY','IQ','AF']
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Afghanistan')).value=dataMap.dataRealResource.find((element) => (element.name == 'AF')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'United States')).value=dataMap.dataRealResource.find((element) => (element.name == 'US')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'China')).value=(dataMap.dataRealResource.find((element) => (element.name == 'CN')).value+dataMap.dataIP.find((element) => (element.name == 'HK')).value+dataMap.dataIP.find((element) => (element.name == 'TW')).value);
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Korea')).value=dataMap.dataRealResource.find((element) => (element.name == 'KR')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Japan')).value=dataMap.dataRealResource.find((element) => (element.name == 'JP')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Iran')).value=dataMap.dataRealResource.find((element) => (element.name == 'IR')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Pakistan')).value=dataMap.dataRealResource.find((element) => (element.name == 'PK')).value;
	Home_Charts_option.series["0"].data.find((element) => (element.name == 'Syria')).value=dataMap.dataRealResource.find((element) => (element.name == 'SY')).value;
	
	Home_Charts.setOption(Home_Charts_option);
});



