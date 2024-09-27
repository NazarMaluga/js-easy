function countOccurrences(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
          count++;
      }
  }

  return count;
}

// Приклади використання:
console.log(countOccurrences("hello world", 'o')); 
console.log(countOccurrences("banana", 'a'));       

module.exports = countOccurrences;
