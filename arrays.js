//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

let colorCopy = faveColors.slice()

//CODE HERE
//const faveColors = [`red`, `green`, `black`] 
//const faveColors = faveColors.slice(1, 2, 3)

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
faveColors.push('blue')
console.log(faveColors)
// We must first include all of the original indexes in our given value which are red, green and black. I chose blue for the fourth value in the sequence. We must then console log faveColors to include the fourth value which is blue.  

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE
const middleNums = numbers.splice(1,3)
  console.log(middleNums)
  // I did not fully solve this problem but, the way i started it was, to isolate the middle numbers which were two, three and four. I then proceeded to splice the numbers indexes whichcwere one, two and three since the valuse value given is considered zero. My next step was to console.log middleNums to try to get the code to run. 

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE
let answers = []
for(i = 0; i < bigOrSmallArray.length; i++) {
  if(bigOrSmallArray[i] > 100){
    answers.push('big')
  } else {
    answers.push('small')
  }
}
console.log(answers)
// I first did a for loop and had the value i equal to or greater than 100. proceeded to console log it and push it to big if it was greater than 100. My next step was to create a second for loop and set i equal to or less than 100. i then console logged bigOrSmallArray and tried to push it to small if it was less than 100
