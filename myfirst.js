var http = require('http');

// Creates a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); // Writes a response to the client
  res.end(); // Ends the response
}).listen(8080); // The server object listens on port 8080