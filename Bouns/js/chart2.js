var cases = document.getElementById("numbers1");
var deaths = document.getElementById("numbers2");
var recovered = document.getElementById("numbers3");
var new_cases = document.getElementById("numbers4");
window.onload = function() {
	$.getJSON("https://api.apify.com/v2/key-value-stores/UFpnR8mukiu0TSrb4/records/LATEST?disableRedirect=true", stat);
	stat();
}

function stat(data) {
	if(data !=null) {
        
         cases.textContent = data.totalCases;
        deaths.textContent = data.deceased;
        recovered.textContent = data.dischargedHealed;
        new_cases.textContent = data.newPositive;

		
    }
}