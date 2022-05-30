"use strict"

const lengthUnit = document.getElementById("length-unit")
const volumeUnit = document.getElementById("volume-unit")
const massUnit = document.getElementById("mass-unit")
const unit = document.getElementById("unit")
const btn = document.querySelector(".btn")

// 1 meter = 3.2808399 ft   
// 1 foot = 0.3048 m
const oneMeterToFeet = 3.2808399 //ft
const oneFootToMeter = 0.3048  // m

// 1 liter = 0.264172052 gallons
// 1 gallon = 3.78541178 liters
const oneLiterToGallons = 0.264172052 // gallons
const oneGallonToLiters = 3.78541178 // liters

// 1kg = 2.20462262 pounds
// 1 pound = 0.45359237 kg
const oneKgToPounds = 2.20462262
   const onePoundToKg = 0.45359237

btn.addEventListener("click", function(){
    let convertedUnit = unit.value
    
    const toFeet = convertedUnit * oneMeterToFeet
    const toMeters = convertedUnit * oneFootToMeter
   
   lengthUnit.textContent = `${convertedUnit} meters = ${toFeet.toFixed(3)} feet | ${convertedUnit} feet = ${toMeters.toFixed(3)} meters`
   
   const toGallons = convertedUnit * oneLiterToGallons
   const toLiters = convertedUnit * oneGallonToLiters
   
   volumeUnit.textContent = `${convertedUnit} liters = ${toGallons.toFixed(3)} gallons | ${convertedUnit} gallons = ${toLiters.toFixed(3)} liters`
   
   const toPounds = convertedUnit * oneKgToPounds
   const toKg = convertedUnit * onePoundToKg
   
   massUnit.textContent = `${convertedUnit} kilos = ${toPounds.toFixed(3)} pounds | ${convertedUnit} pounds = ${toKg.toFixed(3)} kilos`

   unit.value = ""
})

