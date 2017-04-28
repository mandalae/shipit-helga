var http = require('http');
var connect = require('connect');
var app = connect().use('/', function(req, res){
    res.end('Hello Helga');
})

http.createServer(app).listen(32081, function(){
    console.log('Listening on port 32081...');
});
