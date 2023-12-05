


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