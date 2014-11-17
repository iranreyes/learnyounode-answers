//Libraries
var http = require('http');
var url = require('url');

if(process.argv.length < 3)
{
	console.log('Incorrect arguments');
	return;
}

var server = http.createServer(function(request, response){

	var myUrl = url.parse(request.url, true);

	response.setHeader("Content-Type", "application/json");

	if(myUrl.pathname == '/api/parsetime' && myUrl.query['iso'] != undefined){
		var date = new Date(myUrl.query['iso']);
		var json = {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second":date.getSeconds()
		}
		response.statusCode = 200;
		response.end(JSON.stringify(json));
	}
	else if(myUrl.pathname == '/api/unixtime')
	{
		var date = new Date(myUrl.query['iso']);
		var json = {
			"unixtime": date.getTime()
		}
		response.statusCode = 200;
		response.end(JSON.stringify(json));
	}
	else
	{
		response.statusCode = 400;
		response.end();
	}
});

server.listen(process.argv[2]);