//CONSEGNA
//Creare in HTML una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
// BONUS 1: generare la griglia con jQuery
// BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde



//Aggiungiamo elementi all'html tramite jQuery
for (var i = 0; i < 25; i++) {
    $('#griglia').append('<div class="quadrato"><p></p></div>');
}

//Intercettiamo ogni elemento o dentro .quadrato
$('.quadrato p').each(function() {
    //Inseriamo dentro ogni p un numero random da 0 a 10
    $(this).append(getRndInteger(0,10));
    //Costriuisci un if per definire il colore dei numeri
    if (parseInt($(this).text()) % 2 == 0 && parseInt($(this).text()) != 0 ) {
        //Se il contenuto della p è pari e diverso da zero lo coloro di rosso
        $(this).addClass('testo-rosso');
    } else if (parseInt($(this).text()) == 0) {
        // Se è zero lo coloro di verde
        $(this).addClass('testo-verde');
    } // se è dispari lascio il colore di dafault che è nero
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
