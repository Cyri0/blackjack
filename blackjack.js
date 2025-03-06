const BASE_URL = "https://deckofcardsapi.com/api/deck"

const newDeckUrl = BASE_URL + "/new/shuffle/?deck_count=3"
let deckId = undefined

const newDeckBtn = document.getElementById("newDeckBtn")
const hitBtn = document.getElementById("hitBtn")

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
    fetch(BASE_URL + `/${deckId}/draw/?count=2`)
    .then(response => response.json())
    .then(cards => {
            console.log(cards);
    })
}