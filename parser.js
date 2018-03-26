var MidiConvert = require('@pioug/MidiConvert');
var fs = require("fs");

var initResult = function(jsonMidi){
  var result = [];
  var size = 0;

  /*jsonMidi.parts.forEach(function(part){
      size += part.length;
  });*/
  var max = 0;
  for(var k = 0 ; k<jsonMidi.parts.length;k++){
    var begin = parseInt( jsonMidi.parts[k][jsonMidi.parts[k].length-1].time.substring(0,jsonMidi.parts[k][jsonMidi.parts[k].length-1].time.length-1),10);
    var duration = parseInt( jsonMidi.parts[k][jsonMidi.parts[k].length-1].duration.substring(0,jsonMidi.parts[k][jsonMidi.parts[k].length-1].duration.length-1),10);

    if(max<begin+duration){
      max = begin+duration;
    }
  size = max;
  }
  console.log(size);
  for(var i = 0;i<size;i++){
    var tab = []
    for(var j = 0 ; j<4;j++){
      tab[j]=0
    }
    result.push(tab);
  }
  return result;
}

var filtrePianoJsonMidi = function(jsonMidi){
  var promise = new Promise(function(resolve, reject) {
    var result= {
      "parts":[],
      "transport":{
        "instruments":[],
      }
    }
    for(var i = 0;i<jsonMidi.transport.instruments.length;i++){
        if(jsonMidi.transport.instruments[i]<=10 && jsonMidi.transport.instruments[i]>0){
            result.transport.instruments.push(jsonMidi.transport.instruments[i]);
            result.parts.push(jsonMidi.parts[i]);
        }
      }

    result.transport.bpm = jsonMidi.transport.bpm;
    resolve(result);
  })
  return promise;
}


var parseJsonMidi = function(JsonMidi){
    var promise = new Promise(function(resolve, reject) {
    var result = initResult(JsonMidi);


    var noteCode = ['C','D','E','F'];
    JsonMidi.parts.forEach(function(parts){
      parts.forEach(function(part){
        noteCode.forEach(function(note){


        if(note == part.noteName[0]){

          var begin = parseInt(part.time.substring(0,part.time.length-1),10);
          var duration = parseInt(part.duration.substring(0,part.duration.length-1),10);
          console.log(duration+begin);

          for(var i = begin-1; i < begin + duration-4 ;i++){
            result[i][noteCode.indexOf(note)] = 1;
          }

        }
      })
    })
  })
  console.log(JSON.stringify(result));
    resolve(result);
  });
  return promise;
}


var getLed = function(filePath){
  var promise = new Promise(function(resolve, reject) {
    fs.readFile(filePath, 'binary', function(err, buffer) {
      if (err) return;
  	console.log(buffer);
      var jsonMidi = MidiConvert.parse(buffer);
      filtrePianoJsonMidi(jsonMidi)
      .then(function(piano){
        resolve(parseJsonMidi(piano));
        });
      });
  });
}

exports.getLed = getLed;
