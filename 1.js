let someArray = [1, 2, , NaN, 3, , , 4, 5, 0, "h"];

function countElements(arr) {
  let odd = 0; //нечетные
  let even = 0; //четные
  let zero = 0; //ноль
  for (let i=0; i < arr.length; i++){
    if (typeof(arr[i])==="number" && !isNaN(arr[i])){
      if (arr[i]===0) {
        zero++;
      }
      else {
        if (arr[i]%2 === 0) {
          even++;
        }
        else {
          odd++;
        }
      }
    }
  }
  console.log("нечетных элементов " + odd);
  console.log("четных элементов " + even);
  console.log("нулей " + zero);
}

countElements(someArray);

