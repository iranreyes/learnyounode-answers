//Libraries
var net = require('net');

if(process.argv.length < 3)
{
	console.log('Incorrect arguments');
	return;
}

var server = net.createServer(function(socket){
	var date = new Date();

	//Fixing details
	var month = (date.getMonth() + 1).toString();
	var minutes = date.getMinutes();
	if(minutes<10)
		minutes = "0"+minutes;

	var response = date.getFullYear() + "-" + 
				   month + "-" + 
				   date.getDate() + " " + 
				   date.getHours() + ":" + 
				   minutes + "\n";
				   
	socket.write(response);
	socket.end();
});

server.listen(process.argv[2]);