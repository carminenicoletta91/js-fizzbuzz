// Scrivi un programma che stampi i numeri da 1 a 100 ma per i multipli di 3 stampi “Fizz”
// al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

var sostituto;
// variabile numero che sia aggiorna fino ad arrivare a 100;
var numero = 0;
// variabile contatore
var i = 0;
// faccio stampare i numeri da 1 a 100
while (i<100){
  numero = numero + 1;
  sostituto = numero;
  // cambio i numeri in adeguate parole se essi sono divisibili per 3 per 5 o per entrambi
  if(numero % 3 == 0 && numero % 5 != 0){
    sostituto = "Fizz";
  }else if(numero % 5 == 0 && numero % 3 != 0){
    sostituto = "Buzz";
  }else if (numero % 3 == 0 && numero % 5 == 0){
    sostituto = "FizzBuzz";
  }
  i++;
  console.log(sostituto);
}
