

  // emoticon()

  const toEmoticon = emotion => {
    switch(emotion){
      case 'shrug':
      return '|_{"}_|'
      break
      case 'smiley face':
      return ':)'
      break
      case 'frowny face':
      return ':('
      break
      case 'winky face':
      return ';)'
      break
      case 'heart':
      return '<3'
      break
      default:
      return '|_(* ~ *)_|'
      break
    }
  }
  
   console.log(toEmoticon("whatever")) 
    console.log(toEmoticon("heart"))
      console.log(toEmoticon("smiley face"))
      console.log(toEmoticon("shrug")) 
  
  
// imaginaryFriends ()

function numImaginaryFriends(totalFriends){
  return Math.ceil(totalFriends * .25)
  }
  console.log(numImaginaryFriends(20)) // Should print 5
  console.log(numImaginaryFriends(10)) // Should print 3 (2.5 rounded up!)

//  sillySentence()
function sillySentence(firstWord,secondWord,thirdWord){
  return console.log(`I am so ${firstWord} because I ${secondWord}! Time to write some more awesome ${thirdWord}!`)
}
console.log(sillySentence('excited', 'love', 'functions')) 

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