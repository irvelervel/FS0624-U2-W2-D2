const fillCurrentYearSpan = function () {
  // RIEMPIAMO IL FOOTER CON L'ANNO CORRENTE
  // 1) recuperiamo il riferimento dello span
  // current-year all'interno del DOM
  const yearSpan = document.getElementById('current-year')
  console.log('yearSpan', yearSpan)
  // 2) recupero l'anno corrente con new Date()
  const currentYear = new Date().getFullYear() // 2024
  console.log('anno corrente', currentYear)
  // 3) inserisco l'anno corrente nello span trovato prima
  yearSpan.innerText = currentYear
}

fillCurrentYearSpan()

// TASTI x CORGIs
// Premendo un tasto, la card corrispondente al numero del bottone
// deve apparire/scomparire

// 1) recuperare i riferimenti del DOM per i 4 pulsanti
// i miei 4 pulsanti sono dotati della classe "corgi-button"

const corgiButtons = document.getElementsByClassName('corgi-button')
console.log('corgiButtons', corgiButtons)

// 2) recuperare i riferimenti delle prime 4 CARD corgi nel DOM
const corgiCards = document.getElementsByClassName('corgi-card')
console.log('corgicards', corgiCards)
// dobbiamo, da questa HTMLCollection di 8 cards, recuperare solo le prime 4
// poichè corgiCards NON È un vero e proprio array, ma un HTMLCollection,
// il metodo .slice() non è supportato. Possiamo però trasformare corgiCards
// in un VERO array tramite Array.from()
const corgiCardsArray = Array.from(corgiCards).slice(0, 4)
console.log('corgiCardsArray', corgiCardsArray) // i riferimenti alle prime 4 cards

// ora attribuiamo i comportamenti ai bottoni
// recupero il primo bottone
corgiButtons[0].addEventListener('click', function () {
  // si assegno il toggle della classe "invisible" alla prima card
  corgiCardsArray[0].classList.toggle('invisible')
})

// processo automatizzato per tutti e 4 i bottoni/cards tramite ciclo for
for (let i = 0; i < corgiCardsArray.length; i++) {
  corgiButtons[i].addEventListener('click', function () {
    corgiCardsArray[i].classList.toggle('invisible')
  })
}
