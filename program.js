//Libraries
var http = require("http");

if(process.argv.length < 3)
{
	console.log('Incorrect arguments');
	return;
}

var data_return = "";
http.get(process.argv[2], function(response){

	response.setEncoding("utf8");

	//Events
	response.on("data", function(data){
		data_return+=data;
	});

	response.on("end", function(data){
		console.log(data_return.length);
		console.log(data_return);
	});

}).on('error', function(e) {
  console.log("Got error: " + e.message);
});