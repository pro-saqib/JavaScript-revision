//canIVote()
const canIVote = age => {
    if(age >= 18)
      return 'Yes, You can vote'
    else
      return "No, You can't vote"
  }
  
  console.log(canIVote(19))
  console.log(canIVote(17))
  