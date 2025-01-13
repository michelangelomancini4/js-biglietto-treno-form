// INPUT- come input chiediamo all'utente (passeggero) di inserire il numero di chilometri che vuole percorrere e l'età.
let risultato ;
// input chilometri
let chilometriUtente = parseInt(prompt("inserisci il numero di chilometri da fare (un numero)"));

// input età
let etaUtente = parseInt(prompt("inserisci una età (un numero)"));

// console.log(chilometriUtente, etaUtente);

// ELABORAZIONE 
// calcolare il prezzo del biglietto in base ai km (0.21 € al km)
 
 // SE l'utente ha <18 anni (minorenne)
 if (etaUtente < 18){
// ALLORA applicare sconto del 20%
 // ELABORAZIONE moltiplicare il numero dei chilometri per 0.21 e togliere un quinto dal risultato
 let risultato = chilometriUtente * 0.168 ;

 console.log("Complimenti hai diritto allo sconto, pagherai:", risultato.toFixed( 2 ), "€" );
}
 // SE l'utente ha >65 anni (anziano)
 else if (etaUtente >65) {
 // ALLORA applicare sconto del 40%
 // ELABORAZIONE moltiplicare il numero dei chilometri per 0.21 e togliere due quinti dal risultato
 let risultato = chilometriUtente * 0.126 ;

 console.log("Complimenti hai diritto allo sconto, pagherai:", risultato.toFixed( 2 ), "€"  );
}
// SE l'utente ha >18 <65 anni (adulto)
else {
     // ELABORAZIONE moltiplicare il numero dei chilometri per 0.21
    let risultato = (chilometriUtente * 0.21)
    console.log("Pagherai:", risultato.toFixed( 2 ), "€"  );
}