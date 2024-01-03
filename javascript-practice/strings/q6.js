// Write a function that checks if a given string is a palindrome.

function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

console.log(isPalindrome('level'));
// Output: true
