// email
var email = (prompt('Inserisci la tua email')).toLowerCase();

var emailList = ['faffo89@live.it', 'sbirulina90@live.it', 'yoda@starwars.it', 'harrypotter@hogwarts.it'];
console.table(emailList);

var emailFound = false;

for (var i = 0; i < emailList.length; i++) {
  var item = emailList[i];

  if (email == item) {
    emailFound = true;
  }
}

if (emailFound == true) {
  console.log('Utente trovato');
  document.getElementById('welcome').innerHTML = 'Welcome!';
} else {
  console.log('Utente non trovato')
  document.getElementById('welcome').innerHTML = 'Email not found';
}

document.getElementById('mail').innerHTML = email;


// dado
var player = Math.floor(Math.random() * 5) + 1;
var computer = Math.floor(Math.random() * 5) + 1;

document.getElementById('player').innerHTML = player;
document.getElementById('computer').innerHTML = computer;

if (player > computer) {
  console.log('Player win');
  document.getElementById('result').innerHTML = 'Player win';
}
else if (computer > player) {
  console.log('Computer win');
  document.getElementById('result').innerHTML = 'Computer win';
}
else {
  document.getElementById('result').innerHTML = 'Draw';
}
