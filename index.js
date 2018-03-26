var fs = require("fs");
var app = require('express')();
var bodyParser = require("body-parser");
const stream = require("./stream.js");
const file = "./MIDISong.mid";
const raspi = require('raspi');
const I2C = require('raspi-i2c').I2C;
const address = 0x12;
const interval = 20;
var wire = new I2C(address, {device: '/dev/i2c-1'});


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/sonds",function(req,res){

  //var MIDI_manager = require(".\\FTP.js")();

  /*app.get("/files",function(res,req){
    //lire tout les fichier dans le repository
    //stringify le result
    //renvoi la liste
  })*/

});

app.get("/resultat/:sond",function(req,res){
  //renvoi le tableau de comparaison
  //err 404 si le son na jamais ete joue
})

app.post("/sounds",function(req,res){
  //ajoute un fichier MIDI
})

//app.get("start/:sond",function(req,res){
  raspi.init(() => {
  const i2c = new I2C();

    fs.readFile(file, 'binary', function(err, buffer) {
      json  = MidiConvert.parse(buffer);
      stream.Start(i2c,json).then(stream.sendData);
      })
  })
//})
