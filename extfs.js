//Libraries
var fs = require('fs');
var path = require('path');

//Export
module.exports = function(filename, filter, callback) {

	fs.readdir(filename, function(err, list){
		if (err)
			return callback(err);

		var lista = [];

		if(filter!=null){
			for (var i = 0, len=list.length; i < len; i++) {
				if(path.extname(list[i]) === "." + filter)
					lista.push(list[i]);
			}
		}
		else
			lista = list;

		return callback(null, lista);
	});
}