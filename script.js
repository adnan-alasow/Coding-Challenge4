'use strict' 
/*
1. Write a function called sum that takes in two numbers as parameters
and returns their sum.
*/
function sum(number1, number2){
  let addition = number1 + number2
console.log(addition);
}

sum(5, 5);

/* 
2. Write a function called isEven that takes in a number as a parameter and
returns true if the number is even and false if it is odd.
*/

function isEven(number){
  if(number % 2 === 0){
    console.log("True");
  
  }else {
    console.log("False");
  }
}
isEven(8);

/*
I will share 2 ways of doing reverse string - 

This will be the first way of doing reverse string 
I will use building in method

3. Write a function called reverseString that takes in a string as a
parameter and returns the string in reverse order.
*/
// 1 - Use the split() method to return a new array
// 2 - Use the reverse() method to reverse the new created array String
// 3 - Use the join() method to join all elements of the array 
// 4 - Return the reversed string

function reverseString(str){
  let splitString = str.split("");
  console.log(splitString);

  let reverseString = splitString.reverse();
  console.log(reverseString);

  let joinString = reverseString.join("");
  console.log(joinString);
}
reverseString("Adnan");

/*
second way of doing Reverse string without using building in methods 
*/
let str = "";
for ( let i = str.length - 1; i>= 0; i--){
   newString = str += str[i]; // you can rewrite this newString = str + str[i]
   console.log(newString);
}


// for ( let i = 0; i < 10; i = i + 1){
//   let repeat = "";
//   for(let j =0; j < i + 1; j++){
//     repeat = repeat + "*";
//   }
//   console.log(repeat);
// }


// //i = 0 - j = 1; 

// // *
// // **
// // ***
// // ****



/*
Write a function called calculateFactorial that takes in a number as a
parameter and returns the factorial of that number (i.e. the product of
all positive integers up to that number).
*/

// function calculateFactorial(number) {
//   var result = 1; 
//   for (var i = 1; i <= number; i++){
//     result = result * i;
//   }
//   console.log(result); 
// }
// calculateFactorial(5);

// function factorialize(num){
//   var result = 1;
//   for (var i = 1; i <= num; i++){
//     result = result * i;
//   }
//   return result;
// }

// console.log(factorialize(5));


/*
5. Write a function called convertTemperature that takes in a temperature
in Celsius as a parameter and returns the equivalent temperature in
Fahrenheit.
*/

// function convertTemperature(number){
//   let temperature = (number * 1.8) + 32;
//   console.log(temperature);
// }

// convertTemperature(-20);

/*
6. Write a function called countVowels that takes in a string as a parameter
and returns the number of vowels in the string. For example,
countVowels("hello") should return 2.
*/

function countVowels(str) {

  let count = 0;
  let vowels = "aeio";

  for (let i = 0; i < str.length; i++){
    if (vowels.indexOf(str[i]) > -1 ){
      count++;
  }
  }
  return count;
}

countVowels("hello");