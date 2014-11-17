//Libraries
var http = require("http");

if(process.argv.length < 3)
{
	console.log('Incorrect arguments');
	return;
}

http.get(process.argv[2], function(response){

	response.setEncoding("utf8");

	response.on("data", function(data){
		console.log(data);
	});

}).on('error', function(e) {
  console.log("Got error: " + e.message);
});