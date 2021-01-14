var http = require('http');
var url = require('url');

var server = http.createServer((req, res)=>{
    var parsedUrl = url.parse(req.url, true);

    var queryStringObject = parsedUrl.query;
    console.log("the string value is: ",queryStringObject);

    res.writeHead(200);
    res.end('Hi World!\n');
});

server.listen(5500, ()=>{
    console.log('The server is up and running in port: 5500');
})