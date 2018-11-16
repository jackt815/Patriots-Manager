function downW() {
  document.getElementById("JG10").innerHTML="1. Julian Edelman";
  document.getElementById("JE11").innerHTML="2. Josh Gordon";
}

function upW() {
  document.getElementById("JG10").innerHTML="1. Julian Edelman";
  document.getElementById("JE11").innerHTML="2. Josh Gordon";
}

function downLT() {
  document.getElementById("TB77").innerHTML="1. LaAdrian Waddle";
  document.getElementById("LW68").innerHTML="2. Trent Brown";
}

function upLT() {
  document.getElementById("TB77").innerHTML="1. LaAdrian Waddle";
  document.getElementById("LW68").innerHTML="2. Trent Brown";
}
function downLG() {
  document.getElementById("JT62").innerHTML="1. Cole Croston";
  document.getElementById("CC").innerHTML="2. Joe Thuney";
}

function upLG() {
  document.getElementById("JT62").innerHTML="1. Cole Croston";
  document.getElementById("CC").innerHTML="2. Joe Thuney";
}

function downC() {
  document.getElementById("DA60").innerHTML="1. James Ferentz";
  document.getElementById("JF6").innerHTML="2. David Andrews";
}

function upC() {
  document.getElementById("DA60").innerHTML="1. James Ferentz";
  document.getElementById("JF6").innerHTML="2. David Andrews";
}
function downRG() {
  document.getElementById("RG1").innerHTML="1. Ted Karras";
  document.getElementById("RG2").innerHTML="2. Shaq Mason";
}

function upRG() {
  document.getElementById("RG1").innerHTML="1. Ted Karras";
  document.getElementById("RG2").innerHTML="2. Shaq Mason";
}
function downRT() {
  document.getElementById("RT1").innerHTML="1. LaAdrian Waddle";
  document.getElementById("RT2").innerHTML="2. Marcus Cannon";
}

function upRT() {
  document.getElementById("RT1").innerHTML="1. LaAdrian Waddle";
  document.getElementById("RT2").innerHTML="2. Marcus Cannon";
}
function downTE() {
  document.getElementById("TE1").innerHTML="1. Dwayne Allen";
  document.getElementById("TE2").innerHTML="2. Gronk";
}

function upTE() {
  document.getElementById("TE1").innerHTML="1. Dwayne Allen";
  document.getElementById("TE2").innerHTML="2. Gronk";
}
function downQB() {
  document.getElementById("QB1").innerHTML="1. Brian Hoyer";
  document.getElementById("QB2").innerHTML="2. Tom Brady";
}

function upQB() {
  document.getElementById("QB1").innerHTML="1. Brian Hoyer";
  document.getElementById("QB2").innerHTML="2. Tom Brady";
}
function downRB() {
  document.getElementById("RB1").innerHTML="1. C. Patterson";
  document.getElementById("RB2").innerHTML="2. Sony Michel";
}

function upRB() {
  document.getElementById("RB1").innerHTML="1. C. Patterson";
  document.getElementById("RB2").innerHTML="2. Sony Michel";
}
function downRRB() {
  document.getElementById("RRB1").innerHTML="1. Rex Burkhead";
  document.getElementById("RRB2").innerHTML="2. James White";
}

function upRRB() {
  document.getElementById("RRB1").innerHTML="1. Rex Burkhead";
  document.getElementById("RRB2").innerHTML="2. James White";
}

var players=[];


function addItemPrompt(){
  var itemName = prompt("Enter the player's name that you would like to add.");
  if (itemName) {
    players.push({"name": itemName, "done": false});
}
  putPlayerInTable();
}
  function putPlayerInTable(){
    var wR1 = document.getElementById('wR1');
    for (var i = 0; i < players.length; i++){
      var itemNode = document.createTextNode(players[i].name);
      var newRow = document.createElement('tr');
      var itemTd = document.createElement('td');

      wR1.appendChild(newRow);
      newRow.appendChild(itemTd);
      itemTd.appendChild(itemNode);
    }
}
