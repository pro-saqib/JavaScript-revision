let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


function generateTarget(){
  return Math.floor(Math.random()*9)
}
console.log(generateTarget())

function compareGuesses(humanGuess,computerGuess,secretNumber){
  const humanDiffer= Math.abs(secretNumber-humanGuess)
  const computerDiffer= Math.abs(secretNumber-computerGuess)

  return humanDiffer <= computerDiffer
}

const updateScore= winner =>{
  if(winner==='human')
    humanScore++
   if(winner==='computer')
    computerScore++
}

const advanceRound = () => {
  currentRoundNumber++
}