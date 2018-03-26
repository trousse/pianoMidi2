
var start = function(i2c){
  //create an array
  //assign the value "start"
  //array1.push('start');
  //assign the array to the buffer
  const starting_buffer = new Buffer.from('start','utf8');

  i2c.writeSync(0x12,starting_buffer);

  }

  var send = function(i2c,data){
    var promise = new Promise(function(resolve, reject) {
    values = new Uint8Array(4);
    for(var i = 0; i < values.length; i++){

    values[i] = data[i];

    }
    const buf = new Buffer.from(values.buffer,'utf8');
    i2c.writeSync(0x12,buf);
    resolve();
    });
  }


var stop = function(i2c){
    var promise = new Promise(function(resolve, reject) {
      const stopping_buffer = new Buffer('stop','utf8');
      i2c.writeSync(0x12,stopping_buffer);
    });
  }

exports.start = start;
exports.send = send;
exports.stop = stop;
