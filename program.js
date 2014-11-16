//Libraries
var fs = require('fs');

if(process.argv.length < 3)
{
	console.log('Incorrect arguments');
	return;
}

var filename = process.argv[2];

fs.readFile(filename, callback);

function callback(err, data){

	if(err)
	{
		console.log('There has been ocurred an error, more info: \n' + err);
		return;
	}

	var processedData = data.toString();
	var splitted = processedData.split('\n');
	console.log(splitted.length - 1);
};