//Libraries
var http = require('http');
var map = require('through2-map');
var fs = require('fs');

if(process.argv.length < 3)
{
	console.log('Incorrect arguments');
	return;
}

var server = http.createServer(function(request, response){

	request.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(response);

	response.on('end', function(){
		response.end();	
	})
});

server.listen(process.argv[2]);