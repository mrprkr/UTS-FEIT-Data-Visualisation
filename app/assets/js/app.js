//main.js file
var dataUrl = "assets/data/data.json";
var data = [];

var getData = function(){
	var getData = $.get(dataUrl, function(returnData){
		console.log("Data has been loaded");
		data = returnData;
		console.log(data);
	})
	.done(function(){
		console.log("success");
		printData();
	})
	.fail(function(){
		console.log("error");
	})
	.always(function(){
		console.log("finished");
	});
};

var printData = function(){
	for(x in data){
		//console.log(data[x][1]);
		createSquares(data[x][1]);
	}
	update();
}


var createSquares = function(value){
	$(".view").append("<div class='square'><div class='font'>"+Math.round(value)+"</div></div>");
}

var update = function() {
	var highest = 0;
	var lowest = 10000;
	for(x in data) {
		if( data[x][1] > highest) {
			highest = data[x][1];
		}
		if (data[x][1] < lowest) {
			lowest = data[x][1];
		}
	}
	for(x in data) {
		var blueVal = Math.round((highest - data[x][1]) * (255 / (highest - lowest)));
		console.log(blueVal)
		$(".square").eq(x).css('background-color', 'rgb(0, 0, ' + blueVal + ')');
	}
	console.log("lowest: " + lowest + ", highest: " + highest);
}



$(document).ready(function(){
	getData();
});