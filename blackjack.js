const BASE_URL = "https://deckofcardsapi.com/api/deck"

const newDeckUrl = BASE_URL + "/new/shuffle/?deck_count=3"
let deckId = undefined

function getNewDeck(){
    fetch(newDeckUrl)
    .then(response => response.json())
    .then(deckData => {
        deckId = deckData.deck_id
    })
}

function pickCard(){
    if(!deckId){
        console.error("Nincs paklink!");
        return
    }
    fetch(BASE_URL + "/deckId/draw/?count=2")
}
