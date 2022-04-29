import React from "react"

export default function StartPage(props) {
    

    return (
        <section className="start-page">
            <h1 className="game-name">Quizzical</h1>
            <p>Some description if needed</p>
            <button onClick={props.handleClick} className="btn btn-start">Start quiz</button>
        </section>
    )
}