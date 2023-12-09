// Write your code here:
function isTheDinnerVegan(food){
    for(let i=0; i<=food.length; i++){
          if(food[i].source==='plant')
        return true
      else
      return false
    }
  }
  
  // isTheDinnerVegan = arr => arr.every(food=>food.source===!'plant') 
  
  const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
  
  console.log(isTheDinnerVegan(dinner))
  // Should print false
  