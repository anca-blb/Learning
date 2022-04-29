import React from "react"
import StartPage from "./Components/StartPage";
import Quizz from "./Components/Quizz";

function App() {
  const [start,  setStart] = React.useState(false)
  const [quizzical, setQuizzical] = React.useState([])
  const [correctAnswer, setCorrectAnswer] = React.useState(false)
  const [holdAnswer, setHoldAnswer] = React.useState(false)

    function handleClick() {
        setStart(true)
        
    }

    function isHeld() {
      setHoldAnswer(prevHoldAnswer => !prevHoldAnswer)
    }
    console.log("holdAnswer" +" " + holdAnswer)

    React.useEffect(()=>{
      fetch("https://opentdb.com/api.php?amount=5&category=25&difficulty=easy&type=multiple")
      .then(res=> res.json())
      .then(data=> setQuizzical(data.results))
    }, [])

   
    const quizzElements = quizzical.map(el => {
      return (
        <Quizz question={el.question}
               incorect={el.incorrect_answers}
               correct={el.correct_answer}
               isHeld={isHeld} 
        />
      )
    })
            
  
  return (
    <main className="container">
      {start ?
      <div className="quizz-page">
        {quizzElements}
        <button className="btn btn-check">Check answers</button>
      </div>
       :
      <StartPage handleClick={handleClick}/>}
    </main>
  );
}

export default App;
