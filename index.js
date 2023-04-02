function isPalindrome(word) {
  // Write your algorithm here
  let newWord = word.toLowerCase()
  console.log(newWord);
  for (let i = 0; i < newWord.length / 2; i++){
    if (newWord[i] === newWord[newWord.length - 1 - i]){
      console.log(newWord[newWord.length - 1 - i]);
      continue;
    }
    else{
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  
  convert word to lowercase
  check length of word 
  loop word to halfway comparing with the other end
  if word is palindrome 
    return true
  else 
    return false

*/

/*
  Add written explanation of your solution here

  first convert the input to lowecase then use a for loop to iterate
  . The for loop stops iterating when i is less than half of the input minus one;
  this allows us to compare each element on a specific index to the other half of the
  input and return true if they are all matching otherwise return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

console.log(isPalindrome('aa'))
module.exports = isPalindrome;
