//Libraries
var extfs = require("./extfs.js")

if(process.argv.length < 3)
{
	console.log('Incorrect arguments');
	return;
}

var filename = process.argv[2];
var filter = process.argv[3];

extfs(filename, filter, callback);

function callback(err, data){
	if (err) 
		console.log(err);
	else 
	{
		for (var i = 0, len = data.length; i < len; i++) {
			console.log(data[i]);
		};
	}  
}