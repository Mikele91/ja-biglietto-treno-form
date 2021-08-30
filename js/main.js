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
    // if(fasciaEta == "minorenne"){
    //     //prezzo biglietto -20%
    // }else if (fasciaEta == "over"){
    //     //prezzo biglietto -40%
        
    // }else {
    //     // prezzo normale
    // }

    
    //5. stampo tutti i dati nel div del biglietto
    //5a. metto nome passeggiero
    document.getElementById("nome-passegiero").innerHTML = nome;
    //5b. metto offerta
    document.getElementById("tipo-biglietto").innerHTML = fasciaEta;
    //5c. inserisco prezzo
    document.getElementById("totale").innerHTML = km;

    //5d. inserisco carrozza e codice cp
    
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
    var fasciaEta = document.getElementById("fascia").value= " " ;
}
)