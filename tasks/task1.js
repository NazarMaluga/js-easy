function replaceVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';

  for (let i = 0; i < str.length; i++) {
      const char = str[i];
      let isVowel = false;

      for (let j = 0; j < vowels.length; j++) {
          if (char === vowels[j]) {
              isVowel = true;
              break;
          }
      }

      if (isVowel) {
          result += '*';
      } else {
          result += char;
      }
  }

  return result;
}

console.log(replaceVowels("hello world")); 
console.log(replaceVowels("Javascript"));  

module.exports = replaceVowels;
