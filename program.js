//Libraries
var http = require("http");

if(process.argv.length < 5)
{
	console.log('Incorrect arguments');
	return;
}

var mydata = ["","",""];
var counter = 0;

for (var i = 2, len = process.argv.length; i < len; i++) {
	httpQuery(process.argv[i],mydata, i-2);
};

function httpQuery(url, mydata, index){
	http.get(url, function(response){

		response.setEncoding("utf8");

		//Events
		response.on("data", function(data){
			mydata[index]+=data;
		});

		response.on("end", function(data){
			counter++;
			if(counter == 3){
				printEnd();
			}
		});
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
}

function printEnd(){
	for (var i = 0; i < mydata.length; i++) {
		console.log(mydata[i]);
	};
}