
export default function Quizz(props) {
    
    const propsElement = [props.incorect[0], props.incorect[1], props.incorect[2], props.correct]

    function getRandomElement() {
        // console.log(propsElement.length)
        const randomNumber = Math.floor(Math.random() * propsElement.length)
        const randomElement = propsElement[randomNumber]
        propsElement.splice(randomNumber,1)
        return randomElement
    }

    const styles ={
        backgroundColor: props.isHeld ? "grey" : "white"
    }

    console.log(props.isHeld)

    return (
        <div className="quizz-container">
            <h3 className="question">{props.question.replace(/&quot;/g,'"').replace(/&eacute;/g,"é")}</h3>
            <p onClick={props.isHeld} style={styles} className="answers">{getRandomElement()}</p>
            <p onClick={props.isHeld} className="answers">{getRandomElement()}</p>
            <p onClick={props.isHeld} className="answers">{getRandomElement()}</p>
            <p onClick={props.isHeld} className="answers">{getRandomElement()}</p>
        </div>
    )
}