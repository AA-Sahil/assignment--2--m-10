// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.


// function calculateDifference(a, b) {
//     return a - b;
// }

// console.log(calculateDifference(10, 4));



// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

// function isOdd(num) {
//     return num % 2 !== 0;
// }

// console.log(isOdd(1));
// console.log(isOdd(2));


// 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

// function findMin(arr) {
//     return Math.min(...arr);
// }

// let numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20,2,1,54,23,67,89,0]

// console.log(findMin(numbers));


// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

// function filterEvenNumbers(arr) {
//     return arr.filter(num => num % 2 === 0);
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12, 13, 14, 15, 16, 17, 18, 19];
// let evenNumbers = filterEvenNumbers(numbers);
// console.log(evenNumbers);


// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.


// function sortArrayDescending(arr) {
//     return arr.slice().sort((a, b) => b - a);

// }

// let numbers = [2,5, 3, 8, 1,10];
// console.log(sortArrayDescending(numbers));



// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.


// function lowercaseFirstLetter(str) {
//     return str.charAt(0).toLowerCase() + str.slice(1) ;
// }

// let str1 = "ABCD"
// let str2 = "SAHIL"
// console.log(lowercaseFirstLetter(str1));
// console.log(lowercaseFirstLetter(str2));


// 7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string.
//  It should filter vowels from the string.


// function countVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let count = 0;

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// let str = "Hello World! whats up"
// console.log(countVowels(str));

// console.log(countVowels("JavaScript"));
// console.log(countVowels("Rhythms"));




// 8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

// function findAverage(arr) {
//     let sum = 0;
//     for (let num of arr) {
//         sum += num
//     }
//     return sum/arr.length;;
// }

// let numbers = [1, 2, 3, 4, 5,6, 7, 8, 9, 10];
// console.log("average of all elements =",findAverage(numbers));


