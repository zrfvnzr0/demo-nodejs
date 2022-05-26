var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('demo.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

  fs.appendFile('mynewfile1.txt', 'Hello content!\n', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Created!');
  });

  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Written!');
  });  

  fs.unlink('mynewfile4.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });  

  fs.rename('mynewfile5.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });  

}).listen(8080);