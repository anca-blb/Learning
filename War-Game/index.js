"use strict"

// save the deck id into a variable
let deckId = ""
let computerScore = 0
let playerScore = 0
const cardsContainer =  document.getElementById("cards")
const newDeck = document.getElementById("new-deck")
const drawBtn = document.getElementById("draw-btn")
const header = document.getElementById("header-text")
const remainingCards = document.querySelector(".remaining-cards")
const computerScoreEl = document.getElementById("computer-score")
const playerScoreEl = document.getElementById("player-score")

async function handleClick () {
   const response = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
   const data = await response.json()
   deckId = data.deck_id
   remainingCards.textContent = `Remaining cards: ${data.remaining}`
}


// draw 2 cards from the deck id 
async function draw() {
    const response = await fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    const data = await response.json()
    remainingCards.textContent = `Remaining cards: ${data.remaining}`
    cardsContainer.children[0].innerHTML =  `
        <img src="${data.cards[0].image}"></img>
        `
    cardsContainer.children[1].innerHTML = `
        <img src="${data.cards[1].image}"></img>
        `

    const winnerText = determineCardWinner(data.cards[0], data.cards[1])
    header.textContent = winnerText

    if (data.remaining === 0) {
        drawBtn.disabled = true
        if(playerScore > computerScore) {
            header.textContent = "You won the game!"
        }else if (computerScore > playerScore) {
            header.textContent = "The computer won the game!"
        } else {
            header.textContent = "It's a tie game!"
        }
    }
}

newDeck.addEventListener("click", handleClick)
drawBtn.addEventListener("click", draw)

function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)

    if (card1ValueIndex > card2ValueIndex) {
        computerScore = computerScore + 1
        computerScoreEl.textContent = `Computer score: ${computerScore}`
       return "Computer wins!"
    } else if (card2ValueIndex > card1ValueIndex) {
        playerScore = playerScore + 1
        playerScoreEl.textContent = `Your score: ${playerScore}`
        return "You win!"
    } else {
        return "War!"
    }
}





// Documentation
// https://developer.mozilla.org/en-US/docs/Web/API/Element/children