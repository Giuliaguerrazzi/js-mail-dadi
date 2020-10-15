// email
var email = prompt('Inserisci la tua email').toLowerCase;

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
  message = 'Welcome!';
} else {
  console.log('Utente non trovato')
  message = 'Email not found';
}

document.getElementById('mail').innerHTML = 'email';
