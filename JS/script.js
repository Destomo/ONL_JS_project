function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  let number1, number2, number3;
  
  do {
    number1 = prompt("Введите первое число:");
  } while (!isNumber(number1));
  
  do {
    number2 = prompt("Введите второе число:");
  } while (!isNumber(number2));
  
  do {
    number3 = prompt("Введите третье число:");
  } while (!isNumber(number3));

  number1 = parseFloat(number1);
  number2 = parseFloat(number2);
  number3 = parseFloat(number3);

  var maxNumber = number1; 

  if (number2 > maxNumber) {
    maxNumber = number2; 
  }
  
  if (number3 > maxNumber) {
    maxNumber = number3; 
  }

  console.log("Наибольшее число: " + maxNumber);

  