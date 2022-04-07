"use strict"

fetch("https://api.unsplash.com/photos/random/?orientation=landscape&query=nature&client_id=A4d4G_PIm4tIPEor1gkncPzQw5fUn50kbX2rtTgqCSg")
    .then(res=> res.json())
    .then(data => {
    //console.log(data.urls)
    //console.log(data.user.name)
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById("image-author").textContent = `Photo: ${data.user.name}`
})
.catch(err => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTA2Mzl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDc0NDA0MjE&ixlib=rb-1.2.1&q=80&w=1080)`

    document.getElementById("image-author").textContent = `Photo:  Daniel Leone`

})

// get information about cryprocurency and display it
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res=> {
        if(!res.ok){
            throw Error("Something went wrong!");
        }
        return res.json()})
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src="${data.image.small}"/>
            <p>${data.name}</p>`

        document.getElementById("crypto-rates").innerHTML = `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👍: $${data.market_data.high_24h.usd}</p>
            <p>👎: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => {
        console.error(err)
        // make it more user friendly
    })

// update time every second
function getTime() {
    let date = new Date()
    const currentTime = date.toLocaleTimeString("en-US", {timeStyle: "short"})
    document.getElementById("current-time").textContent = currentTime
}
setInterval(getTime, 1000)



// get lat and long from geolocation and get weather based on lat long
navigator.geolocation.getCurrentPosition(position =>{
   // console.log(position)
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res=> {
            if(!res.ok){
                throw Error("Something went wrong!")
            }
            return res.json()
        }).then(data=> {
            console.log(data.name)
            let url =  `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather-top").innerHTML = `
                <img src=${url}>
                <p class="temp">${data.main.temp.toFixed()}°</p>
                <p class="city-name">${data.name}</p>
                `
        })
        .catch(err=> console.error(err))

    
})



// get lat and long from geolocation
// function getLocation() {
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(onSuccess)
//     } else {
//         "Geolocation is not supported"
//     }
// }
// getLocation()

// function onSuccess(position) {
//     const {latitude, longitude} = position.coords
//     console.log(latitude, longitude)
// }


// function onError() {
//     return "failed to get your location"
// }

// console.log(position)

//===================DOCUMENTATION=================== 

// function getTime() {
//     let today = new Date()
//     let time = today.getHours()
//     let minutes = today.getMinutes()
//     let amOrPm = time <= 12 ? "AM" : "PM"
//     time = time %12 || 12
//     let currentTime = time + ":" + minutes + " " + amOrPm
//     return currentTime
// }
    
// console.log(getTime())

// document.getElementById("current-time").textContent = getTime()

// get current time formating
//  //https://medium.com/front-end-weekly/how-to-convert-24-hours-format-to-12-hours-in-javascript-ca19dfd7419d  

//   //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
//    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat

// update time on the page with setInterval with exemple on 
// https://www.w3schools.com/js/js_timing.asp 

// get lat and long from geolocation
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#getting_the_current_position

//======================================================
