function findMax(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
          max = numbers[i];
      }
  }

  return max;
}

// Приклади використання:
console.log(findMax([3, 5, 7, 2, 8])); 
console.log(findMax([10, 20, 5, 30])); 

module.exports = findMax;
