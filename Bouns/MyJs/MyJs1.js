var count;
    var dates = new Array();
    var totalCases = new Array();
    var deceased = new Array();
    var dischargedHealed = new Array();
    var homeInsulation = new Array();
    var totalHospitalized = new Array();
    var intensiveTherapy = new Array();
    var hospitalizedWithSymptoms = new Array();
    var totalPositive = new Array();
    var newPositive = new Array();
    var totalCurrentlyPositive = new Array();
    var newCurrentlyPositive = new Array();
    var cases = document.getElementById("numbers1");
    var deaths = document.getElementById("numbers2");
    var recovered = document.getElementById("numbers3");
    var new_cases = document.getElementById("numbers4");
    var spliter2 = new Array();
    
window.onload = function() {
	$.getJSON("https://api.apify.com/v2/datasets/CUdKmb25Z3HjkoDiN/items?format=json&clean=1", addData);
	addData();
    $.getJSON("https://api.apify.com/v2/key-value-stores/UFpnR8mukiu0TSrb4/records/LATEST?disableRedirect=true", stat);
	stat();
    $.getJSON("https://api.apify.com/v2/datasets/CUdKmb25Z3HjkoDiN/items?format=json&clean=1", chart22);
	chart22();
}

function stat(data) {
	if(data !=null) {
        
         cases.textContent = data.totalCases;
        deaths.textContent = data.deceased;
        recovered.textContent = data.dischargedHealed;
        new_cases.textContent = data.newPositive;

		
    }
}

function addData(data) {
	if(data !=null) {

         count = data.length;
        console.log(count);
        
        for (var i=0;i<data.length;i++)
                   {
                       spliter2[i] = data[i].lastUpdatedAtSource.split("T");

                   }

               
               for(var j=0;j<data.length;j++)
                   {
                       dates[j] = spliter2[j][0];
                   }

		for (var i = 0; i < data.length; i++) {


				$('#dtSelect').append('<option>'+dates[i]+'</option>');
               $('#dtSelect2').append('<option>'+dates[i]+'</option>');

				
			}
console.log(data[16].lastUpdatedAtSource);
        for (var a=0;a<count;a++) { 
         totalCases[a] = data[a].totalCases;
         deceased[a] = data[a].deceased;
        dischargedHealed[a] = data[a].dischargedHealed;
        homeInsulation[a] = data[a].homeInsulation;
        totalHospitalized[a] = data[a].totalHospitalized;
        intensiveTherapy[a] = data[a].intensiveTherapy;
        hospitalizedWithSymptoms[a] = data[a].hospitalizedWithSymptoms;
        totalPositive[a] = data[a].totalPositive;
        newPositive[a] = data[a].newPositive;  
        totalCurrentlyPositive[a] = data[a].totalCurrentlyPositive;  
        newCurrentlyPositive[a] = data[a].newCurrentlyPositive;      
            
        }

	}
}
    
var ctx = document.getElementById('myChart').getContext('2d');
    
		var data6 = {
			 labels: [
			"Total Cases",
			"Total Deaths",
			"Total Recovered",
            "Home Insulation",
            "Total Hospitalized",
            "Intensive Therapy",     
            "Hospitalized With Symptoms",
            "Total Positive",
            "New Positive",
            "Total Currently Positive", 
            "New Currently Positive"     
                 
		],
		datasets: [
			{
				data: [300, 50, 100,33,77,55,21,90,12,76,45],
				backgroundColor: [
					"#1abc9c",
					"#c23616",
					"#78e08f",
                    "#fa983a",
                    "#cf6a87",
                    "#574b90",
                    "#2f3542",
                    "#eccc68",
                    "#9c88ff",
                    "#192a56",
                    "#e17055"
				],
				hoverBackgroundColor: [
					"#1abc9c",
					"#c23616",
					"#78e08f",
                    "#fa983a",
                    "#cf6a87",
                    "#574b90",
                    "#2f3542",
                    "#eccc68",
                    "#9c88ff",
                    "#192a56",
                    "#e17055"
                    
				]
			}]
		};
		
		var chart  = new Chart(ctx,{
			type: 'pie',
			data: data6,
			options: {
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					labels: {
					fontFamily: "Roboto",
					fontColor:"#878787"
					}
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Roboto'"
				},
				elements: {
					arc: {
						borderWidth: 0
					}
				}
			}
		});

var ctx2 = document.getElementById('myChart2').getContext('2d');
var data6 = {
			 labels: [
			"Total Cases",
			"Total Deaths",
			"Total Recovered",
            "Home Insulation",
            "Total Hospitalized",
            "Intensive Therapy",     
            "Hospitalized With Symptoms",
            "Total Positive",
            "New Positive",
            "Total Currently Positive", 
            "New Currently Positive"     
                 
		],
		datasets: [
			{
                label:["COVID-19 Chart"],
                
				data: [30, 50, 100,33,77,55,21,90,12,76,45],
				backgroundColor: [
					"#1abc9c",
					"#c23616",
					"#78e08f",
                    "#fa983a",
                    "#cf6a87",
                    "#574b90",
                    "#2f3542",
                    "#eccc68",
                    "#9c88ff",
                    "#192a56",
                    "#e17055"
				],
				hoverBackgroundColor: [
					"#1abc9c",
					"#c23616",
					"#78e08f",
                    "#fa983a",
                    "#cf6a87",
                    "#574b90",
                    "#2f3542",
                    "#eccc68",
                    "#9c88ff",
                    "#192a56",
                    "#e17055"
                    
				]
			}]
		};
		
		var chart2  = new Chart(ctx2,{
			type: 'horizontalBar',
			data: data6,
			options: {
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					labels: {
					fontFamily: "Roboto",
					fontColor:"#878787"
					}
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Roboto'"
				},
				elements: {
					arc: {
						borderWidth: 0
					}
				}
			}
		});
	
    

    

    function chartUpdate() {
        for (var c=0;c<count;c++){
        if (event.target.value == dates[c])
            {
                chart.data.datasets[0].data = [totalCases[c],deceased[c],dischargedHealed[c],homeInsulation[c],totalHospitalized[c],intensiveTherapy[c],hospitalizedWithSymptoms[c],totalPositive[c],newPositive[c],totalCurrentlyPositive[c],newCurrentlyPositive[c]];
      chart.update();
                
                
            }
        }
        
        
    }

function chartUpdate2() {
        for (var c=0;c<count;c++){
        if (event.target.value == dates[c])
            {
                chart2.data.datasets[0].data = [totalCases[c],deceased[c],dischargedHealed[c],homeInsulation[c],totalHospitalized[c],intensiveTherapy[c],hospitalizedWithSymptoms[c],totalPositive[c],newPositive[c],totalCurrentlyPositive[c],newCurrentlyPositive[c]];
      chart2.update();
                
                
            }
        }
        
        
    }

function chart22(data) {
	if(data !=null) {
             
 
               var deaths = data.deceased;
               var recovered = data.dischargedHealed;
               var new_cases = data.newPositive;
               
               var homeInsulation = new Array();
               var totalHospitalized = new Array();
               var spliter = new Array();
               var dates = new Array();
               


               for (var i=0;i<data.length;i++)
                   {
                       
                       dischargedHealed[i] = data[i].dischargedHealed;
                       deceased[i] = data[i].deceased;
                       spliter[i] = data[i].lastUpdatedAtSource.split("T");

                   }

               
               for(var j=0;j<data.length;j++)
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
				name: 'Total Recovered',
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
						color: '#183825',
					}
				},
				data: dischargedHealed
			}, {
                name:'Total Deaths',
				type: 'line',
				silent: true,
				barGap: '-100%',
				data: deceased,
				itemStyle: {
					normal: {
						color: '#672626',

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