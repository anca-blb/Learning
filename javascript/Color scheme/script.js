"use strict"

const btnEl = document.getElementById("submit")
const colorPicker = document.getElementById("color-picker")
const selectBox = document.getElementById("select-box")
const colorDisplay = document.getElementById("color-display")
const color1 = document.querySelector(".color-one")
const color2 = document.querySelector(".color-two")
const color3 = document.querySelector(".color-three")
const color4 = document.querySelector(".color-four")
const color5 = document.querySelector(".color-five")



let colorValue = ""
let selectedOption = ""


//https://www.javascripttutorial.net/javascript-dom/javascript-input-event/
colorPicker.addEventListener("input", function (){
    colorValue = this.value
        //= e.target.value
    colorValue= colorValue.replace(/#/g, "").toUpperCase()
    console.log(colorValue)
})


// https://www.javascripttutorial.net/javascript-dom/javascript-select-box/
selectBox.addEventListener("input", function(){
    
    selectedOption = selectBox.options[selectBox.selectedIndex].text.toLowerCase()
                // = this.options[this.selectedIndex].text
    console.log(selectedOption)
})


btnEl.addEventListener("click", function(e){
    e.preventDefault()

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${selectedOption}`)
    .then(res => res.json())
    .then(data => {

        //display each color on the page
        color1.style.background = data.colors[0].hex.value
        color2.style.background = data.colors[1].hex.value
        color3.style.background = data.colors[2].hex.value
        color4.style.background = data.colors[3].hex.value
        color5.style.background = data.colors[4].hex.value


        console.log(data)
        console.log(data.colors[0].hex.value)

    })
})
