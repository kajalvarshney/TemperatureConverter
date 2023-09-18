let celciusInput = document.querySelector('#celcius > input') 
let fahrenoitInput = document.querySelector('#fahrenoit > input') 
let kelvinInput = document.querySelector('#kelvin > input') 

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    fahrenoitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})

fahrenoitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenoitInput.value)
    let cTemp = (fTemp-32)* (5/9)
    let kTemp = (fTemp-32)* (5/9) +273.15

    celciusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})

kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp- 273.15) * (9/5) + 32

    celciusInput.value = roundNumber(cTemp)
    fahrenoitInput.value = roundNumber(fTemp)
}) 

btn.addEventListener('click',()=>{
    celciusInput.value = ""
    fahrenoitInput.value = ""
    kelvinInput.value = ""
    
})

