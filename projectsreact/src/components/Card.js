import React from "react"

export default function Card(props) {
    console.log(props)

    let badgeText
    if(props.visited) {
        badgeText = "✓"
    } else {
        badgeText ="TO VISIT"
    }
    
    return (
        <main className="travel-content">
                {badgeText && <div className="travel-badge">{badgeText}</div>}
                <img className="travel-img" src={props.imageUrl} alt="travel destinations"/>
                
                <div>
                    <div className="travel-location">
                        <img className="location-sign" src="./img/location.png" alt=""/>
                        <p className="location-country">{props.location}</p>
                        <a href={props.googleMapsUrl} className="location-link">View on Google Maps</a>
                    </div>
                    
                    <h1 className="travel-title">{props.title}</h1>
                    <p className="travel-date">{props.startDate} - {props.endDate}</p>
                    <p className="travel-description">{props.description}</p>    
                </div>
        
        </main>
    )
}