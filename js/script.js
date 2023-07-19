
const price = 0.21;

const userAge = parseInt(prompt ("inserisci la tua età"));

const userKm = parseFloat(prompt ("inserisci il nuemro chilometri che vuoi percorrere"));

if (isNaN (userAge) || isNaN(userKm)){
    alert("Accetta solo caratteri numerici - premere F5")
} 

else {

    const discount20 = (price * userKm) * 0.8;
    
    const discount40 = (price * userKm) * 0.6;


if (userAge >65){

    ticketPrice = discount40;       
}

else if (userAge <18){
    ticketPrice = discount20;
}

else {
    ticketPrice = price * userKm;
}


alert("il prezzo del biglietto è: " + ticketPrice.toFixed(2) + "€");


}



