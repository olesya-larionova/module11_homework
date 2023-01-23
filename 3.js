function acceptNum (num){
 
   return function(number){
      return num + number;
  }
}
   
let resultFunc = acceptNum(7);
console.log(resultFunc(8));

resultFunc = acceptNum(22); // другие аргументы
console.log(resultFunc(8));
