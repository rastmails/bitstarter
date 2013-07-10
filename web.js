var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request,response){
    response.render('index.html');
    if(err) throw err;
    console.log('It\'s done!');
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("Listening on " + port);
});
