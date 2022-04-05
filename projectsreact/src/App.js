

import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

export default function App() {

    let cards = data.map(el => 
        <Card 
            key= {el.id}
            {...el}
        />
    )
    return (
        <div className="container">
            <Header />
            <section className="card-list">
                {cards}
            </section>
            
        </div>
    )
}