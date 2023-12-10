// Write your code here:
function findMyKeys(arr){
    let index = -1;
    for(let i=0; i<=arr.length-1; i++){
      if(arr[i]==='keys')
        index=i
    }
    return index
  }
  const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
  
  console.log(findMyKeys(randomStuff))
  // Should print 4