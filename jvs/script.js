// inserimento variabili di input 

// input chilometri
const chilometriUtente = document.getElementById('kilometers');

// input età
const etaUtente =document.getElementById('age');

// richiamo button
let button = document.getElementById('calcbutton');

// aggiunta event al click del button

button.addEventListener('click',()=> {
    const chilometri = (chilometriUtente.value);
    const eta = (etaUtente.value);
    console.log("I km da perccorrere sono:",chilometri,"-","La tua età è di anni:", eta);
    
    let risultato ;
    
 // SE l'utente ha <18 anni (minorenne)
 if (eta < 18){
    // ALLORA applicare sconto del 20%
     
     let risultato = chilometri * 0.168 ;
    
     console.log("Complimenti hai diritto allo sconto, pagherai:", risultato.toFixed( 2 ), "€" );
    }
     // SE l'utente ha >65 anni (anziano)
     else if (eta >65) {
     // ALLORA applicare sconto del 40%
     
     let risultato = chilometri * 0.126 ;
    
     console.log("Complimenti hai diritto allo sconto, pagherai:", risultato.toFixed( 2 ), "€"  );
    }
    // SE l'utente ha >18 <65 anni (adulto)
    else {
         // ELABORAZIONE moltiplicare il numero dei chilometri per 0.21
        let risultato = (chilometri * 0.21)
        console.log("Pagherai:", risultato.toFixed( 2 ), "€"  );
    }





});
// funzione di default
button.addEventListener ('submit', function(event) {
    event.preventDefault()
});
