
// let Defaultfont = document.getElementById('Default-font')
// Defaultfont.addEventListener("click", ChangeDefaultfont);

// function ChangeDefaultfont() {
//     document.getElementById("textcanvas").style.fontFamily = ('Raleway')
// }
// let Streamster = document.getElementById('Streamstar-font')
// Streamster.addEventListener("click", ChangeStreamsterfont);

// function ChangeStreamsterfont() {
//     document.getElementById("textcanvas").style.fontFamily = ('Streamster')

// }
// let Learningblocks = document.getElementById('Learningblocks-font')
// Learningblocks.addEventListener("click", ChangeLearningblocksfont);

// function ChangeDefaultfont() {
//     document.getElementById("textcanvas").style.fontFamily = ('Raleway')

// }

//text input
let textInput = document.getElementById('textInputButton')
textInput.addEventListener("click", Shirttext);

function Shirttext() {
    let textValue = document.getElementById('Shirttext').value
    document.querySelector("h2").innerHTML=textValue

}
//text Color

let Blacktextcolor = document.getElementById('Black-textcolor')
Blacktextcolor.addEventListener("click", ChangeColorBlack);

function ChangeColorBlack() {
    document.getElementById("textcanvas").style.color = ('black')

}
let Whitetextcolor = document.getElementById('White-textcolor')
Whitetextcolor.addEventListener("click", ChangeColorWhite);

function ChangeColorWhite() {
    document.getElementById("textcanvas").style.color = ('white')

}


//Shirt color
let White = document.getElementById('White-shirtcolor')
White.addEventListener("click", ShirtWhite);

function ShirtWhite() {
    document.getElementById("shirtcanvas").src = "../source/pictures/shirts/white.jpg"   
}

let Yellow = document.getElementById('Yellow-shirtcolor')
Yellow.addEventListener("click", ShirtYellow);

function ShirtYellow() {
    document.getElementById("shirtcanvas").src = "../source/pictures/shirts/yellowshirt.jpg"   
}
let Red = document.getElementById('Red-shirtcolor')
Red.addEventListener("click", ShirtRed);

function ShirtRed() {
    document.getElementById("shirtcanvas").src = "../source/pictures/shirts/redshirt.jpg" 
}
let Blue = document.getElementById('Blue-shirtcolor')
Blue.addEventListener("click", ShirtBlue);

function ShirtBlue() {
    document.getElementById("shirtcanvas").src = "../source/pictures/shirts/blueshirt.jpg"
}