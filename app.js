// NAVBAR-LOGIC
let showBtn = document.querySelector('.toggleIcon');
let closeBtn = document.querySelector('.close');

function showMenu() {
let menu = document.querySelector('.menu');
menu.classList.toggle('showMenu');
}
showBtn.addEventListener('click',showMenu);

function closeMenu(){
let menu = document.querySelector('.menu');
menu.classList.remove('showMenu');
}
closeBtn.addEventListener('click',closeMenu);


// GENERATE-RANDOM-COLOR-CODE-LOGIC
const btn = document.getElementById('btn');
const output = document.getElementById('colorCode');
const outputContainer = document.getElementById('outputContainer');

//HEX code
const generateColorCode = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    // by multiplying 16777215, This will generate numbers that can be converted to hexadecimal numbers
    
    
    //This will convert above generated numbers to hexadecimal numbers
    const colorCode = "#" + randomNumber.toString(16);

    document.body.style.backgroundColor = colorCode;
    outputContainer.style.backgroundColor = colorCode;
    output.innerText = colorCode;
    
    // This will copy the random color code to clipboard when user clicks on btn. 
    navigator.clipboard.writeText(colorCode);

    /*
    number.toString(radix)
     radix -> Optional
     It is the base to use and must be between 2 and 36.
     number.toString(2) -> 2 is the base of binary and will convert the number to binary
     number.toString(8) -> 8 is the base of octal and will convert the number to octal
     number.toString(16) -> 16 is the base of hexaDecimal and will convert the number to hexaDecimal
    */

     /*
    console.log(`Binary of ${randomNumber} is ${randomNumber.toString(2)}`)
    console.log(`Octal of ${randomNumber} is ${randomNumber.toString(8)}`)
    console.log(`HexaDecimal of ${randomNumber} is ${randomNumber.toString(16)}`)
    */
}

// click Event Call-> this will call the function on click event
btn.addEventListener("click", generateColorCode);

// initial call -> this will call the function as soon as the Page is loaded so that page bg-color is not by default white 
generateColorCode();





/*
// ALTERNATIVE METHOD

const generateColor = () => {
    
    let symbols = '0123456789abcdef';
    let randomNum = '';

    for (i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * symbols.length);
        randomNum = randomNum + symbols[randomIndex];
    }

    const colorCode = "#" + randomNum;
    console.log(colorCode)
    
    document.body.style.backgroundColor = colorCode;
    output.innerText = colorCode;
}
btn.addEventListener('click',generateColor);
generateColor();
*/