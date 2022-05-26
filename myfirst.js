var http = require('http');
var url = require('url');

// Creates a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write('Hello World!'); // Writes a response to the client
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;  
  // res.write(req.url) // Displays the current URL
  res.end(txt); // Ends the response
}).listen(8080); // The server object listens on port 8080