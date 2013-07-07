var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.writeFile('index.html', 'Hello', function (err){
      if (err) throw err;
      console.log('It\'s done!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
