var color = randomColor(); // a hex code for an attractive color

const button = document.getElementById('beautifierBtn')
const nameToBeautify = document.getElementById('name')
let yourInput = document.getElementById('yourInput')
let dogImage = document.getElementById('dogImage')

const fontsArr = [
        "Impact,Charcoal,sans-serif",
        "Brush Script MT, cursive",
        "Luminari, fantasy",
        "Comic Sans MS, cursive",
        "American Typewriter, serif",
        "Parkavenue, cursive",
        "Oldtown, fantasy",
        "Lucidatypewriter, monospace",
        "Brushstroke, fantasy"
    ]
    
const fontWeightArr = ["900","800", "700", "500", "400", "200", "100"]    

const fontSizeArr = ["xx-small", "x-small", "small","medium", "large", "x-large", "xx-large"]

function beautifyName(){
    //change color:
    
    nameToBeautify.style.color = randomColor({hue: 'pink'})
    button.style.backgroundColor = nameToBeautify.style.color

    button.style.color = randomColor({
            luminosity: 'dark',
            hue: 'blue'
    })
    document.body.style.backgroundColor = randomColor()

    //change font family:
    let randomFont = Math.floor(Math.random() * fontsArr.length)
    nameToBeautify.style.fontFamily = fontsArr[randomFont]

    //change font weight:
    let randomWeight = Math.floor(Math.random() * fontWeightArr.length)
    nameToBeautify.style.fontWeight = fontWeightArr[randomWeight]

    //change title/name:
    if(yourInput.value !== '') {
        nameToBeautify.innerHTML = yourInput.value
    }
    //add dog picture:
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            dogImage.innerHTML = `
            <img width="250px" src="${data.message}" />
        `
    })

}

button.addEventListener('click', beautifyName) 

yourInput.addEventListener('focus', () => {
    yourInput.value = ''
})


    





