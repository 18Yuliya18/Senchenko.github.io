var t = new Array(9);
var winner = "";

function ai() {
  var id = Math.floor(Math.random() * 9);
  t[id] ? ai() : move(id, 'ai');
}



function checkEnd(){
  if (t[0]=='ai' && t[1]=='ai' && t[2]=='ai' || t[3]=='ai' && t[4]=='ai' && t[5]=='ai' || t[6]=='ai' && t[7]=='ai' && t[8]=='ai' || t[0]=='ai' && t[3]=='ai' && t[6]=='ai' || t[1]=='ai' && t[4]=='ai' && t[7]=='ai' || t[2]=='ai' && t[5]=='ai' && t[8]=='ai' || t[0]=='ai' && t[4]=='ai' && t[8]=='ai' || t[2]=='ai' && t[4]=='ai' && t[6]=='ai') {
    winner = "ai";
    return true;
  } else if (t[0]=='player' && t[1]=='player' && t[2]=='player' || t[3]=='player' && t[4]=='player' && t[5]=='player' || t[6]=='player' && t[7]=='player' && t[8]=='player' || t[0]=='player' && t[3]=='player' && t[6]=='player' || t[1]=='player' && t[4]=='player' && t[7]=='player' || t[2]=='player' && t[5]=='player' && t[8]=='player' || t[0]=='player' && t[4]=='player' && t[8]=='player' || t[2]=='player' && t[4]=='player' && t[6]=='player') {
    winner = "play";
    return true;
  } else if (t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) {
    winner = "draw";
    return true;
  } else {
    return false;
  }
}

function move(id, role) {
  if(t[id]) return false;
  t[id] = role;
  document.getElementById(id).className = 'cell ' + role;
  !checkEnd() ? (role == 'player') ? ai() : null : reset()
}

function reset() {
  if (winner == "play") {
    alert("You win!!");
  } else if (winner == "ai") {
    alert("You lose!!");
  } else if (winner == "draw") {
    alert("Draw!!");
  }
  location.reload();
}