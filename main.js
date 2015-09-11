var heapdump = require('heapdump');

var bunyan = require('bunyan');
var Logger = require('le_node');
var loggerDefinition = Logger.bunyanStream({ token: 'enter token here' });
// var logger = bunyan.createLogger(loggerDefinition);
var loggerstdout = bunyan.createLogger({type: 'raw', name: 'myapp', stream: process.stdout});

heapdump.writeSnapshot();

for(var i=0; i<100000; i++){
  // logger.info(i);
  loggerstdout.info(i);
  // console.log(i);
}
setTimeout(function(){
  //Force garbage collection so the heapdump is just the memory leak
  global.gc();
  heapdump.writeSnapshot();
  process.exit();
}, 15000);





