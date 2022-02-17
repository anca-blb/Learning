"use strict";

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const diceEl = document.querySelector(".dice");
let score0El = document.querySelector("#score--0");
let score1El = document.getElementById("score--1");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

// starting conditions

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner", "player--active");
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRollDice.addEventListener("click", function () {
  if (playing) {
    let diceRoll = Math.trunc(Math.random() * 6) + 1;

    // show the random number as a picture of the dice in diceEl but first make the dice image visible again

    diceEl.classList.remove("hidden");
    diceEl.src = `dice_${diceRoll}.png`;

    // check if diceroll is 1 : if true - switch the player
    if (diceRoll !== 1) {
      // add diceroll to current score.
      currentScore = currentScore + diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //add curent score to score
    scores[activePlayer] = scores[activePlayer] + currentScore;

    //display score
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if player's score >= 100
    if (scores[activePlayer] >= 100) {
      // finish the game, add the winner class and remove the active player class
      diceEl.classList.add("hidden");
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }
    //switch to next player
    switchPlayer();
  }
});

btnNew.addEventListener("click", init);
