/* TRACCIA

  Crea una lista di email di invitati ad una festa.
  Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
  stampa un messaggio appropriato sull’esito del controllo.

*/

/* Tools
  
  - array
  - prompt
  - loop for
  - if / else
  - console.log

*/

// crea lista di email

let mail = ['mattia@mail.com',
  'fabio@mail.com',
  'boolean@mail.com',
  'giuseppe@mail.com',
  'sarah@mail.com',
  'giuliano@mail.com',
  'fabiola@mail.com']

// chiedere all'utente la sua mail
let userMail = prompt('Inserisci la tua mail')
let thisMail;


// verificare che la sua mail sia presente nell'elenco
for (let i = 0; i < mail.length; i++) {
  thisMail = mail[i];
  // stampa messaggio appropriato sull'esito
  if (thisMail === userMail) {
    alert('Congratulazioni sei tra gli invitati');
  } 
}
