

/*****E-Charts function start*****/

window.onload = function() {
	$.getJSON("https://api.apify.com/v2/datasets/CUdKmb25Z3HjkoDiN/items?format=json&clean=1", chart2);
	chart2();
}

function chart2(data) {
	if(data !=null) {
             
 
               var deaths = data.deceased;
               var recovered = data.dischargedHealed;
               var new_cases = data.newPositive;
               
               var homeInsulation = new Array();
               var totalHospitalized = new Array();
               var spliter = new Array();
               var dates = new Array();
               


               for (var i=0;i<response_json.length;i++)
                   {
                       
                       homeInsulation[i] = data[i].homeInsulation;
                       totalHospitalized[i] = data[i].totalHospitalized;
                       spliter[i] = data[i].lastUpdatedAtSource.split("T");

                   }

               
               for(var j=0;j<response_json.length;j++)
                   {
                       dates[j] = spliter[j][0];
                   }
        
        var echartsConfig = function() { 
	
	if( $('#e_chart_2').length > 0 ){
		var eChart_2 = echarts.init(document.getElementById('e_chart_2'));
		var option1 = {
			animation: false,
			tooltip: {
				trigger: 'axis',
				backgroundColor: 'rgba(33,33,33,1)',
				borderRadius:0,
				padding:10,
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: 'rgba(33,33,33,1)'
					}
				},
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Roboto', sans-serif",
					fontSize: 12
				}	
			},
			color: ['#667add'],	
			grid: {
				top: 60,
				left:40,
				bottom: 30
			},
			xAxis: {
				type: 'value',
				position: 'top',
				axisLine: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787'
					}
				},
				splitLine: {
					show:false
				},
			},
			yAxis: {
				splitNumber: 25,
				type: 'category',
				axisLine: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787'
					}
				},
				axisTick: {
					show: true
				},
				splitLine: {
					show:false
				},
				data: dates
			},
			series: [{
				name: 'Home Insulation',
				type: 'bar',
				barGap: '-100%',
				label: {
					normal: {
						textStyle: {
							color: '#682d19'
						},
						position: 'left',
						show: false,
						formatter: '{b}'
					}
				},
				itemStyle: {
					normal: {
						color: '#667add',
					}
				},
				data: homeInsulation
			}, {
                name:'Total Hospitalized',
				type: 'line',
				silent: true,
				barGap: '-100%',
				data: totalHospitalized,
				itemStyle: {
					normal: {
						color: '#fd7397',

					}
				},

			}]
		}
		eChart_2.setOption(option1);
		eChart_2.resize();
	}
}

/*****Resize function start*****/
var echartResize;
$(window).on("resize", function () {
	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
}).resize(); 
/*****Resize function end*****/

/*****Function Call start*****/
echartsConfig();
/*****Function Call end*****/
        
        
	}
}