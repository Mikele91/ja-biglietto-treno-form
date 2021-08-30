// 1.Selezione bottone
var btGenera = document.getElementById("genera");
var btAnnulla = document.getElementById("annulla");


// 2.al click del bottone genera
btGenera.addEventListener("click",
function(){
    
    // 3.prendo valori campi imput e select
    var nome = document.getElementById("nome").value;
    console.log(nome);
    var km = parseInt( document.getElementById("km").value);
    var fasciaEta = document.getElementById("fascia").value;
    
    //4. calcolo i prezzi

    var prezzoBiglietto = parseInt(km*0.21).toFixed(2);
    

     if(fasciaEta == "minorenne"){
        prezzoBiglietto -= (prezzoBiglietto*0.20);
        console.log(prezzoBiglietto.toFixed(2));

        //prezzo biglietto -20% 
     }else if (fasciaEta == "over"){
        prezzoBiglietto -= (prezzoBiglietto*0.40);
        console.log(prezzoBiglietto.toFixed(2));

         //prezzo biglietto -40%
        
    }

    
    
    //5. stampo tutti i dati nel div del biglietto
    //5a. metto nome passeggiero
    document.getElementById("nome-passegiero").innerHTML = nome;
    //5b. metto offerta
    if(fasciaEta == "minorenne"){
    document.getElementById("tipo-biglietto").innerHTML = " Under 18";

    }else if(fasciaEta == "over"){
        document.getElementById("tipo-biglietto").innerHTML = " Over 65"
    }else {
        document.getElementById("tipo-biglietto").innerHTML = " Nessuno sconto"
    }
    
    //5c. inserisco prezzo
    document.getElementById("totale").innerHTML =  prezzoBiglietto + " €" ;

    //5d. inserisco carrozza e codice cp
    
    var carrozza  = (Math.floor(Math.random() * (10-1)+1)) ;
    console.log(carrozza);
    document.getElementById("carrozza").innerHTML = carrozza;
    var cp = carrozza.toString() +  (Math.floor(Math.random() *(10000-1000)+1000));
    console.log(cp);
    document.getElementById("codice").innerHTML =cp;
    // 6 mostra bigleitto
    document.getElementById("biglietto").classList.add("open");
}
)


btAnnulla.addEventListener("click",
function(){

    // nasconde biglietto
    document.getElementById("biglietto").classList.remove("open");

    // resetto i campi
    var nome = document.getElementById("nome").value = " ";
    var km = parseInt( document.getElementById("km").value = " ") ;
    var fasciaEta = document.getElementById("fascia").value= " Seleziona la tua opzione" ;
}
)