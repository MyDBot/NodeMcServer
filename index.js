var exec = require('child_process').exec;


exec('./setup.bat', function(error, stdout, stderr) {
    console.log(stdout);
});




var child = exec('java -jar ./spigot.jar',
  function (error, stdout, stderr){
    console.log('Output -> ' + stdout);
    if(error !== null){
      console.log("Error -> "+error);
    }
});
 console.log("RunninG!");
module.exports = child;


var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080); 


