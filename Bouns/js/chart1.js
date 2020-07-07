var t1,t2,t3;
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
           if(xhr.readyState == 4 && xhr.status == 200)
           {
               var response = xhr.responseText;
               var response_json = JSON.parse(response);
               var array = new Array (response_json);
               console.log(response_json);
 
               var deaths = response_json.deceased;
               var recovered = response_json.dischargedHealed;
               var new_cases = response_json.newPositive;
               
               var totalCases = new Array();
               var dead = new Array();
               var spliter = new Array();
               var dates = new Array();
               


               for (var i=0;i<response_json.length;i++)
                   {
                       
                       totalCases[i] = response_json[i].dischargedHealed;
                       dead[i] = response_json[i].deceased;
                       spliter[i] = response_json[i].lastUpdatedAtSource.split("T");

                   }

               
               for(var j=0;j<response_json.length;j++)
                   {
                       dates[j] = spliter[j][0];
                   }
               $( document ).ready(function() {
    "use strict";
	
	if( $('#chart_1').length > 0 ){
		var ctx1 = document.getElementById("chart_1").getContext("2d");
		var data1 = {
			labels: dates,
			datasets: [
			{
				label: "Number of Recovered",
				backgroundColor: "rgba(74, 162, 60,1)",
				borderColor: "rgba(74, 162, 60,1)",
				pointBorderColor: "rgba(74, 162, 60,1)",
				pointHighlightStroke: "rgba(74, 162, 60,1)",
				data: totalCases
			},
			{
				label: "Number of Deaths",
				backgroundColor: "rgba(248, 179, 45,1)",
				borderColor: "rgba(248, 179, 45,1)",
				pointBorderColor: "rgba(248, 179, 45,1)",
				pointBackgroundColor: "rgba(248, 179, 45,1)",
				data: dead,
			}
			
		]
		};
		
		var areaChart = new Chart(ctx1, {
			type:"line",
			data:data1,
			
			options: {
				tooltips: {
					mode:"label"
				},
				elements:{
					point: {
						hitRadius:90
					}
				},
				
				scales: {
					yAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(33,33,33,0)",
						},
						ticks: {
							fontFamily: "Roboto",
							fontColor:"#878787"
						}
					}],
					xAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(33,33,33,0)",
						},
						ticks: {
							fontFamily: "Roboto",
							fontColor:"#878787"
						}
					}]
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					display: false,
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Roboto'"
				}
				
			}
		});
	}

xhr.open("GET","https://api.apify.com/v2/datasets/CUdKmb25Z3HjkoDiN/items?format=json&clean=1", true);
       xhr.send();