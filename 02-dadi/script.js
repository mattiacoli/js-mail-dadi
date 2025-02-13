/* TRACCIA 

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo.

*/


/* Tools
  
  - Math.random
  - if / else
  - consol.log

*/

// scegliere un numero randomico per user
const userNumb = Math.floor(Math.random()* 6 +1)
alert(`your number is:  ${userNumb}`);

// scegliere numero randomico per il pc
const pcNumb = Math.floor(Math.random()* 6 +1)
alert(` PC number is:  ${pcNumb}`);

//stabilire il vincitore in base a chi fa il punteggio piu` alto
if (userNumb === pcNumb ){
  alert('Pareggio!');
  
} else if (userNumb > pcNumb){
  alert('Hai vinto!');
  
} else {
  alert('Hai perso , ritenta sarai piu fortunato');
  
}





