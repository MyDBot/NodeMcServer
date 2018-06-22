var exec = require('child_process').exec;



exec.exec('./setup.bat', function(error, stdout, stderr) {
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



