//Libraries
var fs = require('fs');
var path = require('path');

if(process.argv.length < 4)
{
	console.log('Incorrect arguments');
	return;
}

var filename = process.argv[2];
var filter = process.argv[3];

//The callback can be an anonymous function
fs.readdir(filename, callback);

function callback(err, list){

	if(err)
	{
		console.log('There has been ocurred an error, more info: \n' + err);
		return;
	}

	for (var i = 0, len=list.length; i < len; i++) {
		//I wait for the filter without the "."
		if(path.extname(list[i]) === "." + filter)
			console.log(list[i]);
	}
};