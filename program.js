//Libraries
var fs = require('fs');

if(process.argv.length < 3)
{
	console.log('Incorrect arguments');
	return;
}

var filename = process.argv[2];

var data;
try {
  data = fs.readFileSync(filename);
} catch (e) {
	if (e.code === 'ENOENT') {
	  console.log('File not found!');
	} else {
	  throw e;
	}
}

var splitted = data.toString().split('\n');
console.log(splitted.length-1);