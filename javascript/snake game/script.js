"use strict";

const grid = document.querySelector(".grid");
const startBtn = document.getElementById("start");
const scoreDisplay = document.getElementById("score");
const width = 10;
let squares = []; // [div.square, div.square, div.square, div.square, div.square,...100 ]
let currentSnake = [2, 1, 0]; //(index, 0, 1, 2)
let direction = 1;
let appleIndex = 0;
let score = 0;
let intervalTime = 1000;
let speed = 0.9;
let timerId = 0;

function createGrid() {
  // create 100 elements with a for loop
  for (let i = 0; i < width * width; i++) {
    //create element (squares)
    const square = document.createElement("div");

    //add a class and styling
    square.classList.add("square");

    //put the elements(squares) into our grid in html
    grid.append(square);

    // push each square that we've created into a new array
    squares.push(square);

    // ------------ version 2 -----------------------------
    // grid.innerHTML += `<div class="square"></div>`;
    // console.log(grid.innerHTML);
    //-------------------------------------------------------
  }
}
createGrid();

// we pushed all the square elements (the divs with the class of square) to the squares array.
// to create the snake we want to color the first 3 square elements, so we apply snake class to the first 3 divs in the squares array with the index of currentSnake.

currentSnake.forEach(function (index) {
  squares[index].classList.add("snake");
});

function startGame() {
  //for restarting the game
  //remove the class of snake from our divs in the squares
  currentSnake.forEach((index) => squares[index].classList.remove("snake"));
  //remove the apple
  squares[appleIndex].classList.remove("apple");
  clearInterval(timerId);
  currentSnake = [2, 1, 0];
  score = 0;
  //re add the new score text content
  scoreDisplay.textContent = score;
  direction = 1;
  intervalTime = 1000;
  generateApples();
  //re add the class of snake to our current snake
  currentSnake.forEach((index) => squares[index].classList.add("snake"));

  // for starting the game we want our snake to move
  timerId = setInterval(move, intervalTime);
}

function move() {
  // if the snake hits one of the 4 walls, stop the setInterval of move function
  if (
    //if snake has hit bottom
    (currentSnake[0] + width >= width * width && direction === width) ||
    //if snake has hit right wall
    (currentSnake[0] % 10 === width - 1 && direction === 1) ||
    //if snake has hit left wall
    (currentSnake[0] % 10 === 0 && direction === -1) ||
    //if snake has hit top
    (currentSnake[0] - width < 0 && direction === -width) ||
    // if the snake goes into itself
    squares[currentSnake[0] + direction].classList.contains("snake")
  )
    return clearInterval(timerId);

  //
  //
  //

  // pop() the last element from our currentSnake array
  const tail = currentSnake.pop();

  // remove styling (the class of snake) from the last element
  squares[tail].classList.remove("snake");

  // add a square in direction we are heading
  currentSnake.unshift(currentSnake[0] + direction);

  // add the styling class snake to make it green
  squares[currentSnake[0]].classList.add("snake");

  //
  //
  //

  // DEAL WITH THE SNAKE HEAD GETTING THE APPLE
  if (squares[currentSnake[0]].classList.contains("apple")) {
    // remove class of apple
    squares[currentSnake[0]].classList.remove("apple");

    // grow our snake by adding class of snake to it
    squares[tail].classList.add("snake");

    // grow our snake array
    currentSnake.push(tail);

    // generate new apple
    generateApples();
    // add one to the score
    score++;
    //display our score
    scoreDisplay.textContent = score;
    // speed up our snake
    clearInterval(timerId);
    intervalTime = intervalTime * speed;
    timerId = setInterval(move, intervalTime);
  }
}

function generateApples() {
  // show an apple anywhere on the grid. don't show apple if there is a snake there already

  do {
    //do something  while condition is true
    //the loop keeps going if the random number is equal with a square number that has the class of snake. if the div doesn't have the class of snake, it stops and the random number is stored in appleIndex variable.
    appleIndex = Math.floor(Math.random() * squares.length);
    //generate a random number
  } while (squares[appleIndex].classList.contains("snake")); //
  //we take the number that is stored in appleIndex as an index for the squares and give it a class of apple.
  squares[appleIndex].classList.add("apple");
}
generateApples();

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "ArrowUp") {
    direction = -10;
    // move();
    console.log("direction" + direction);
    //
  } else if (e.key === "ArrowRight") {
    direction = 1;
    // move();
    console.log("direction" + direction);
    //
  } else if (e.key === "ArrowDown") {
    direction = 10;
    // move();
    console.log("direction" + direction);
    //
  } else if (e.key === "ArrowLeft") {
    direction = -1;
    //move();
    console.log("direction" + direction);
  }
});

startBtn.addEventListener("click", startGame);
