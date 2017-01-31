$(document).ready(function(){


	var carNames = ["Chevy", "Hyundai", "Lexus", "BMW", "Audi", "Benz", "Ford", "Tesla", "Chrysler"];

		// console.log(carNames[1]);
		// console.log(carNames[2]);
		// console.log(carNames[3]);
		// console.log(carNames[4]);
		// console.log(carNames[5]);
		// console.log(carNames[6]);
		// console.log(carNames[7]);
		// console.log(carNames[8]);
		// console.log(carNames[9]);


for(var j=0; j<carNames.length; j++){
	console.log(carNames[j]);
}

var single = "";

	for (var i=0; i< carNames.length; i++) { 
		single += carNames [i] + "" ;
	}
	console.log(single);

	$('p').text(single);

	$("#bar").append(carNames);
	
});