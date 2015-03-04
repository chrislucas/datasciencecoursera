var http = require('http');
var express = require('express');
var app = express();
//http://expressjs.com/api.html#app.use
//http://www.sitepoint.com/serving-static-files-with-node-js/
app.use("/", express.static(__dirname + '/public'));

var server = http.Server(app);

//http://expressjs.com/api.html#middleware
app.get('/', function(rq, rs) {
	//console.log(rq);
	//http://expressjs.com/api.html#res.sendFile
	rs.sendFile(__dirname + '/public/index.html', function(err){
		if(err) {
			console.log(err);
		}
	});
});

server.listen(3000, function(){
	console.log('Test Ajax JSUML');
});

console.log('Test');