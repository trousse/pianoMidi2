function test(){
  alert("Fichier envoyé !");
}

function play(){
  alert("joué !");
}

function generate_table3(){

  var object = new Object();
  object.score = 53;
  object.color = "red";
  object.begin = "34i";
  object.end = "86i";
  coloriage(object);

}

function coloriage(object){
  var body = document.getElementsByTagName("body");
  var div = document.createElement("div");
  div.setAttribute("class","#90caf9 blue");
  div.setAttribute("style","text-align:center;");
  var paragraphe = document.createElement("h3");
  var texte = document.createTextNode("score : "+ object.score);
  paragraphe.appendChild(texte);
  div.appendChild(paragraphe);
  document.body.appendChild(div);

  if(object.color == "green"){
    var divColor = document.createElement("div");
    divColor.setAttribute("style","display:inline-block");
    var interval = document.createElement("p");
    var textei = document.createTextNode("begin : "+ object.begin);
    interval.appendChild(textei);
    divColor.appendChild(interval);
    interval.style.backgroundColor = "#33FF00";
    document.body.appendChild(divColor);

    //var saut = document.createElement("<br/>");
    //document.body.appendChild(saut);

    var divColor = document.createElement("div");
    divColor.setAttribute("style","display:inline-block");
    var interval = document.createElement("p");
    var textei = document.createTextNode(" end : "+ object.end);
    interval.appendChild(textei);
    divColor.appendChild(interval);
    interval.style.backgroundColor = "#33FF00";
    document.body.appendChild(divColor);

    }

    if(object.color == "red"){
      var divColor = document.createElement("div");
      divColor.setAttribute("style","display:inline-block");
      var interval = document.createElement("p");
      var textei = document.createTextNode("begin : "+ object.begin);
      interval.appendChild(textei);
      divColor.appendChild(interval);
      interval.style.backgroundColor = "#FF0000";
      document.body.appendChild(divColor);

      //var saut = document.createElement("<br/>");
      //document.body.appendChild(saut);

      var divColor = document.createElement("div");
      divColor.setAttribute("style","display:inline-block");
      var interval = document.createElement("p");
      var textei = document.createTextNode(" end : "+ object.end);
      interval.appendChild(textei);
      divColor.appendChild(interval);
      interval.style.backgroundColor = "#FF0000";
      document.body.appendChild(divColor);

      }
      if(object.color == "red"){
        var divColor = document.createElement("div");
        divColor.setAttribute("style","display:inline-block");
        var interval = document.createElement("p");
        var textei = document.createTextNode("begin : "+ object.begin);
        interval.appendChild(textei);
        divColor.appendChild(interval);
        interval.style.backgroundColor = "";
        document.body.appendChild(divColor);

        //var saut = document.createElement("<br/>");
        //document.body.appendChild(saut);

        var divColor = document.createElement("div");
        divColor.setAttribute("style","display:inline-block");
        var interval = document.createElement("p");
        var textei = document.createTextNode(" end : "+ object.end);
        interval.appendChild(textei);
        divColor.appendChild(interval);
        interval.style.backgroundColor = "";
        document.body.appendChild(divColor);

        }

  }
