  
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
