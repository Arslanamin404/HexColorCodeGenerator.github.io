# HexColorCodeGenerator.github.io
we generated a random num using Math.floor(Math.random()* 16777215). 
This will generate numbers that can be converted to hexadecimal numbers
No we will use num.toString(16) method convert above generated numbers into hexadecimal nums.
after converting it to hexadecimal concatinate the number/sting with #.
after that we will use doc.body.style.bg-color = colorCode;
we will run the function on click event.

  number.toString(radix)
     radix -> Optional
     It is the base to use and must be between 2 and 36.
     number.toString(2) -> 2 is the base of binary and will convert the number to binary
     number.toString(8) -> 8 is the base of octal and will convert the number to octal
     number.toString(16) -> 16 is the base of hexaDecimal and will convert the number to hexaDecimal
    
    console.log(`Binary of ${randomNumber} is ${randomNumber.toString(2)}`)
    console.log(`Octal of ${randomNumber} is ${randomNumber.toString(8)}`)
    console.log(`HexaDecimal of ${randomNumber} is ${randomNumber.toString(16)}`)


navigator.clipboard.writeText(colorCode);This will copy the random generated color codes to clipboard.
