var express = require('express');
var fs      = require('fs');
var buf     = new Buffer(256); 
var app     = express.createServer(express.logger());
var content = fs.readFileSync('index.html','utf-8')
app.get('/', function(request,response){
    response.send(buf.toString('utf-8',content))
    if(err) throw err;
    console.log('It\'s done!');
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("Listening on " + port);
});
