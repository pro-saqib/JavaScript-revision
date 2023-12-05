const sentence = ['sense.','make', 'all', 'will', 'This'];
function reverseArray(arr){
  for (let start = arr.length - 1; start >= 0; start--) {
    for (let end = 0; end < arr.length; end++) {
      let temp=arr[start]
      arr[start]=arr[end]
      arr[end]= temp
    }
  }
  return arr
}

console.log(reverseArray(sentence))