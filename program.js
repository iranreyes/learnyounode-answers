//Libraries
var net = require('net');
var strftime = require('strftime');

if(process.argv.length < 3)
{
	console.log('Incorrect arguments');
	return;
}

var server = net.createServer(function(socket){
	// var date = new Date();

	// //Fixing details
	// var month = (date.getMonth() + 1).toString();
	// var minutes = date.getMinutes();
	// if(minutes<10)
	// 	minutes = "0"+minutes;

	// var response = date.getFullYear() + "-" + 
	// 			   month + "-" + 
	// 			   date.getDate() + " " + 
	// 			   date.getHours() + ":" + 
	// 			   minutes + "\n";

	socket.write(strftime('%Y-%M-%d %H:%M'));
	socket.end();
});

server.listen(process.argv[2]);