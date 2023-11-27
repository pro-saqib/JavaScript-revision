// greetWorld()
function greetWorld(){
    return 'Hello, World!'
  }
  console.log(greetWorld())
  
  //canIVote()
  const canIVote = age => {
    if(age >= 18)
      return 'Yes, You can vote'
    else
      return "No, You can't vote"
  }
  
  console.log(canIVote(19))
  console.log(canIVote(17))
  
  // agreeOrDisagree()
  function agreeOrDisagree(string1, string2){
    if(string1===string2)
      return 'You agree!'
    else
      return 'You disagree!'
  }
   console.log(agreeOrDisagree("yep", "yep"))
   console.log(agreeOrDisagree("yep", "nope")) 
  
  // lifePhase()
  
  const lifePhase= age => {
    if(age >= 0 && age <= 3)
      return 'baby'
    else if (age >= 4 && age <= 12)
      return 'child'
    else if(age >= 13 && age <= 19)
      return 'teen'
    else if(age >= 20 && age <= 64)
      return 'adult'
    else if(age >= 65 && age <= 140)
      return 'senior citizen'
    else
      return 'This is not a valid age'
  }
  console.log(lifePhase(25))
  console.log(lifePhase(12))
  
  // finalGrade()
  
function finalGrade(mid,assignment, final){
    if((mid < 0 || mid > 100) || (assignment < 0 || assignment > 100) || (final < 0 || final > 100))
      return 'You entered an invalid grade. Try again'
    else{
      const avg = (mid+assignment+final)/3
      if(avg >= 0 && avg <= 59)
        return 'F'
      else if(avg >= 60 && avg <= 69)
        return 'D'
      else if(avg >= 70 && avg <= 79)
        return 'C'
      else if(avg >= 80 && avg <= 89)
        return 'B'
      else if(avg >= 90 && avg <= 100)
        return 'A'
      }
  }
  console.log(finalGrade(99, 92, 95)) // Should print 'A'
  console.log(finalGrade(19, 9, 5)) // Should print 'F'

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