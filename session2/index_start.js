// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

function longestWord(sen) {
  const wordArray = sen.toLowerCase().match(/[a-z]+/g);
  const sortedArr = wordArray.sort((a, b) => b.length - a.length);
  const filteredArr = sortedArr.filter(word => word.length === sortedArr[0].length);
  if(filteredArr.length>1){
    return filteredArr;
  }else{
    return filteredArr[0];
  }
}
console.log(longestWord('Frankie has a dog, a cat, and 2 turtles.'));

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
//solution 1
  const chunky = [];
  let i = 0;
  while(arr.length>i){
    chunky.push(arr.slice(i, i+len))
    i+=len;
  }
  return chunky;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  return arrays.reduce((a,b) => a.concat(b));
  //other solution
  //return [].concat.apply([], arrays);
}
console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));
// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
//const output = longestWord('Hello, my name is Brad');

//console.log(output);
console.log('hello');
console.log('hello again!');
