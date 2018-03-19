// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
 
//option1
//return str.split('').reverse().join('');
console.log('option1: ', str.split('').reverse().join(''));

//option2 
let reverseStr = '';
for(let i=str.length-1; i>=0; i--){
  reverseStr += str[i];
}
console.log('option2: ',reverseStr);

//option3 
let reverse = ''; 
for(let i=0; i<str.length; i++){
  reverse = str[i] + reverse;
}
console.log('option3: ', reverse);

//option4
let revStr = '';
for(let char of str){
  revStr = char + revStr;
}
console.log('option4: ', revStr);

//option5
let reversed = '';
str.split('').forEach(char => reversed = char +reversed);
return reversed;

}
console.log(reverseString('hello'))


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  //option1
  let rString = str.split('').reverse().join('');
  console.log ('option1: ', str === rString);
}
isPalindrome('madam');

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  let revInt = int.toString().split('').reverse().join('');
  return parseInt(revInt) * Math.sign(int);
}
reverseInt(-234567891)


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  //option1
  console.log(str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' '))

  //option2
  let caps = str.toLowerCase().split(' ');
  for(let i=0; i<caps.length; i++){
    caps[i] = caps[i].substring(0, 1).toUpperCase() + caps[i].substring(1);
  }
  console.log(caps.join(' '));
}
capitalizeLetters('i love javascript')


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}



// Call Function
const output = reverseString('hello');

console.log(output);
