import React from "react"

export default function Die(props) {
    
    //Add conditional styling to the Die component so that if it's held (isHeld === true), its background color changes
    let styles = {
        background: props.isHeld ? "#59E391" : ""
    }
    return (
        <div style={styles} onClick={()=>props.holdDice(props.id)} className="die">
            {/* <h2 className="die-num">{props.value}</h2>     */}
            <img className="dice-img"src={`./img/dice-${props.value}.png`}/>
        </div>
    )
}