
var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Miami,FL,US&appid=5a6ed16f6e80b71d2cc89090e272e7fe&units=imperial';

var server = http.createServer(function(request,response){
// All logic goes here
var request = require('request');
request(url, function(err,res,body){
 var data = JSON.parse(body);

 response.write("<html><body><div id='container'>");
 response.write("<h1>"+ 'City: ' + data['name'] + '<br>' + "</h1>");
 response.write("<h2>"+ 'Temperature: ' + data.main['temp'] + '<br>'+"</h2>");
 response.write("<h2>"+ 'Sunset: ' + new Date(data.sys['sunset']*1000)+"</h2>");
 response.write("</div></body></html>");
 response.end();
});



}).listen(8081);
console.log('Server is listening!');

