// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function nextLetter(letter){
  switch (nextLetter) {
    case 'a':
      return 'b'
      break;
      case 'b':
      return 'c'
      break;
      case 'c':
      return 'd'
      break;
      case 'd':
      return 'e'
      break;
      case 'e':
      return 'f'
      break;
      case 'f':
      return 'g'
      break;
      case 'g':
      return 'h'
      break;
      case 'h':
      return 'i'
      break;
      case 'i':
      return 'j'
      break;
      case 'j':
      return 'k'
      break;
      case 'k':
      return 'l'
      break;
      case 'l':
      return 'm'
      break;
      case 'm':
      return 'n'
      break;
      case 'n':
      return 'o'
      break;
      case 'o':
      return 'p'
      break;
      case 'p':
      return 'q'
      break;
      case 'q':
      return 'r'
      break;
      case 'r':
      return 's'
      break;
      case 's':
      return 't'
      break;
      case 't':
      return 'u'
      break;
      case 'u':
      return 'v'
      break;
      case 'v':
      return 'w'
      break;
      case 'w':
      return 'x'
      break;
      case 'x':
      return 'y'
      break;
      case 'y':
      return 'z'
      break;
    default:
      return 'z'
      break;
  }
}

function letterChecker(str) {
  for (let index = 0; index < str.length -1; index++) {
    if ( str.charAt(index+1)  != nextLetter(str.charAt(index))) {
      return  nextLetter(str.charAt(index))
    }
    
  }

  //charAt

}


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {

  for (let index = 0; index < arr.length; index++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[index] + arr[i] == target){
        return true // `true (because $(arr[index] + $(arr[i])) )`
      }
      
    }
    
  }
}


// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
  
}