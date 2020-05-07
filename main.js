//CONSEGNA
//Creare in HTML una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
// BONUS 1: generare la griglia con jQuery
// BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde



//aggiungiamo tramite jQuery elementi dentro #griglia
//Per farlo 25 volte utilizziamo un ciclo for, ed utilizziamo append perchè aggiunge elementi
for (var i = 0; i < 25; i++) {
    $('#griglia').append('<div class="quadrato"><p></p></div>');
};

$('.quadrato p').each(function() {
    $(this).append(getRndInteger(1,10))
});


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
