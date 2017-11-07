var http = require("http");
var Port = 7000;

function handleRequest(request, response) {
	response.end("You're great " + request.url);
}
var server = http.createServer(handleRequest);
server.listen(Port, function(){
console.log("Server listening on: http://localhost:" + Port);	
});

var http = require("http");
var Port = 7500;

function handleRequest2(request, response) {
	response.end("You did bad and should feel bad " + request.url);
}
var server = http.createServer(handleRequest2);
server.listen(Port, function(){
console.log("Server listening on: http://localhost:" + Port);	
});