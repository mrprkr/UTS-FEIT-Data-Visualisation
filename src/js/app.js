//main.js file
var dataUrl = "assets/data/data.json";

getData = function(){
	var data = $.get(dataUrl, function(){
		alert("Data has been loaded");
	})
	.done(function(){
		alert("success");
	})
	.fail(function(){
		alert("error");
	})
	.always(function(){
		alert("finished");
	})
}


$(document).ready(function(){
	getData();
})