function checkNumb(num) {
  if (num > 1000) {
    return "Данные неверны";
  } 
  else if (num === 1) {
    return "Простое число";
  }
  else if (!Number.isInteger(num)) {
    return "Число должно быть целым"
  }
  
  else if (num > 1) {
    for (let x = 2; x < num; x++) {
      if (num % x === 0) {
        return "Составное число";
      }
    }
    return "Простое число";
  }
  else {
    return "Число должно быть больше 1";
  }
}

console.log(checkNumb(2));
