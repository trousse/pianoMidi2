const parser = require("./parser.js");
const protocol = require("./i2c.js");


var Start = function(i2c,jsonMidi){
var promise = new Promise(function(resolve, reject) {
  var enregi = [];
  var max = 0;
  var led = [];
  var timeI = 0;
  var clock = 60000000/jsonMidi.transport.bpm;
  protocol.start(i2c);
  parser.getLed(file).then(function(leds){
    max = leds.length;
    led = leds;
    resolve(i2c,led,interval,timeI,clock,max,enregi);
    });
  });
}

var sendData= function(i2c,ledTab,interval,timeI,clock,max,enregi){
  protocol.send(i2c,ledTab[timeI]).then(function(){
      readWord(0x12, function(err,dat){
        enregi.push({
          "played":dat,
          "time" : timeI
        });
        if(timeI < max){
          setTimeout(sendData(i2c,ledtab,interval,timeI+1,clock,max,enregi), clock);

        }
        else{
          end(i2c,enregi);
        }
    });
  });
}

var end = function(i2c,enregi){
  protocol.stop(i2c);
  handle(enregi);
}

var handle = function(enregi){
  console.log(enregi);
}

exports.sendData = sendData;
exports.Start = Start;
