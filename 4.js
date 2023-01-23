function showNums(a, b) {
  
  const intervalId = setInterval(function (c) {
    
    console.log(a++);
    
    if (a > c) {
      clearInterval(intervalId);     
    } 
    
  }, 1000, b)
}  

showNums(5,15);
  
