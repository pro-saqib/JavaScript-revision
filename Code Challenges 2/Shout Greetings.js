const shoutGreetings = arr => {
    let shoutArr=[]
    for(let i=0; i<=arr.length-1;i++){
      shoutArr[i]=arr[i].toUpperCase()+"!"
    }
    return shoutArr
  }
  
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  
  console.log(shoutGreetings(greetings))
  