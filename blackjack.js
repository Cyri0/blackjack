const BASE_URL = "https://deckofcardsapi.com/api/deck"

const newDeckUrl = BASE_URL + "/new/shuffle/?deck_count=3"
let deckId = undefined

const newDeckBtn = document.getElementById("newDeckBtn")
const hitBtn = document.getElementById("hitBtn")

const pickedCardsEl = document.getElementById("pickedCards")

hitBtn.disabled = true

function getNewDeck(){
    fetch(newDeckUrl)
    .then(response => response.json())
    .then(deckData => {
        deckId = deckData.deck_id

        newDeckBtn.disabled = true
        hitBtn.disabled = false
    })
}

function pickCard(){
    if(!deckId){
        console.error("Nincs paklink!");
        return
    }
    let kep1 = document.createElement("img")
    let hatlap = "https://deckofcardsapi.com/static/img/back.png"
    kep1.src = hatlap 
    let kep2 = document.createElement("img")
    kep2.src = hatlap

    pickedCardsEl.appendChild(kep1)
    pickedCardsEl.appendChild(kep2)

    fetch(BASE_URL + `/${deckId}/draw/?count=2`)
    .then(response => response.json())
    .then(jsonRes => {
        kep1.src = jsonRes.cards[0].image
        kep2.src = jsonRes.cards[1].image
    })
}