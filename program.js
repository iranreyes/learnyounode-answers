var counter = 0;

for (var i = 2, len = process.argv.length; i < len; i++) {
	//Optional => if(!isNaN(process.argv[i]))
	counter += parseInt(process.argv[i]);
};

console.log(counter);