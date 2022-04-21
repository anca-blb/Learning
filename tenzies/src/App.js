import React from "react"
import Die from "./Components/Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

function App() {

  //create state to hold our array of numbers
  //change state to hold our array of objects
  const [dice, setDice] = React.useState(allNewDice())

  //new state for winning the game
  const [tenzies, setTenzies] = React.useState(false)
  const [count, setCount] = React.useState(0)

  //useEffect for syncing 2 different internal states together
  //check the dice everytime they change to look for a winning condition.
  React.useEffect(()=>{
    const diceHeld = dice.every(die => die.isHeld ? true : false)
    const firstValue = dice[0].value
    const sameValue = dice.every(die => die.value === firstValue ? true : false )
    
    //if both conditions are true set tenzies to true
    if (diceHeld && sameValue) {
      setTenzies(true)
    }

  }, [dice])

  //function that returns an array of 10 random numbers between 1-6 inclusive
  //change function to return 10 objects with a value and a isHeld property
  function allNewDice() {
    let newArr = []
    for (let i = 0; i < 10; i++) {
      let randomNum = Math.ceil(Math.random() * 6)
      newArr.push({
          value: randomNum, 
          isHeld: false,
          id: nanoid()
        })
    }
    return newArr
  }

  //map over dice to create 10 instances of Die elements
  const diceElements = dice.map(die =>
       <Die holdDice={holdDice} 
            id={die.id} 
            key={die.id} 
            value ={die.value}
            isHeld={die.isHeld}
            />)


  
  //click the button to generate new array of numbers
  function rollDice() {
    setCount(prevCount => prevCount + 1)
    
    //new game
    if (tenzies) {
      setDice(allNewDice())
      setTenzies(false)
      setCount(0)
    } else {
      // update the rollDice not to roll any dice that are being held
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ? die : 
        {
           value: Math.ceil(Math.random() * 6),
           id: nanoid(),
           isHeld: false
        }
      }))
    }
  }

  //if a die is clicked, turn it's isHeld property to it's opposite value
  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => { 
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

 


  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <p>Number of rolls: {count}</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button onClick={rollDice} className="roll-dice">{tenzies ? "New Game" : "Roll"}</button>
    </main>
  );
}

export default App;
