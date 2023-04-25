// function isPalindrome(word) {
//   // Write your algorithm here
//   let backedWord = backWord(word);
//   if( word === backedWord){
//     return true;
//   }else {
//     return false;
//   }
// }

// const backWord = word => word.split('').reverse().join('');

function isPalindrome(word){
  for( let i = 0; i < word.length/2; i++){
    if( word[i] === word[(word.length - 1) - i]){
      return true
    } else {
      return false;
    }
  }
}

isPalindrome('abba')


/* 
  Add your pseudocode here
  ---
  reverse the word backword 
  if the reversed word equal to initial word return true 
  else return false ;
*/

/*
  Add your pseucode here
  ---
  if the first letter same as last letter, and he second is the same as second to last second, until we reach the middle. return true
  otherwise return false

*/ 


/*
  Add written explanation of your solution here
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

module.exports = isPalindrome;
