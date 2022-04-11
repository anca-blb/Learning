import React from "react"

function Info() {
    return (
        <header className="card-header">
            <img className="card-img" src="./image/laura.png" />
            <h1 className="card-title">Laura Smith</h1>
            <h4 className="card-subtitle">Frontend Developer</h4>
            <p className="card-website">laurasmith.website</p>
            <button className="card-btn btn-email">Email</button>
            <button className="card-btn btn-linkedin">LinkedIn</button>
        </header>
    )
}

export default Info