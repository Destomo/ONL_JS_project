'use strick'

/**
 * 
 * @param  {...any} numbers 
 * @return {number}
 */
function sumPositiveNumbers(...numbers) {
    for (let number of numbers) {
      if (number < 0) {
        throw new RangeError("Одно или несколько чисел минусовые!");
      }
    }
  
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
  
    return result;
  }



/*
function sumPositiveNumbers(...numbers) {
    let result = 0;
  
    for (let number of numbers) {
      if (number < 0) {
        const error = new RangeError("Одно или несколько чисел минусовые!");
        console.log(error);
      }
  
      result += number;
    }
  
    return result;
}
*/