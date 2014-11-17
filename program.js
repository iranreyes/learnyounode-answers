//Libraries
var http = require('http');
var fs = require('fs');

if(process.argv.length < 4)
{
	console.log('Incorrect arguments');
	return;
}

var server = http.createServer(function(request, response){

	var stream = fs.createReadStream(process.argv[3]);

	stream.pipe(response);

	stream.on('end', function(){
		response.end();	
	});

	stream.on('error', function(err){
		console.log(err);
		response.end();
	});
});

server.listen(process.argv[2]);