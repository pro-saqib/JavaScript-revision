


// colorMessage

function colorMessage(favoriteColor,shirtColor){
  (favoriteColor===shirtColor) ? 
  console.log('The shirt is your favorite color!') : console.log('That is a nice color.')
  }
  colorMessage('red','red')
  colorMessage('red','green')

// isEven()

const isEven = x => {
  (x%2==0) ? console.log(true) : console.log(false)
}
isEven(7)

// numberDigits()

const numberDigit = x => {
  if(x >= 0 && x <= 9)
    console.log(`one digit: ${x}`)
  else if(x >= 10 && x <= 99)
    console.log(`two digit: ${x}`)
  else
    console.log(`the number is: ${x}`)
}

numberDigit(13)