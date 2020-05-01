// console.log("ARROW FUNCTIONS");
// const addNumbers = function (number1, number2) {
//   return number1 + number2;
// };
// console.log(addNumbers(10, 3));

// const addNumbers = (number1, number2) => number1 + number2;
// console.log(addNumbers(10, 3));

// const multiplyNumbers = (number1 = 2, number2 = 2) => number1 * number2;
// console.log(multiplyNumbers());

// console.log("DEFAULT PARAMETERS");
// const countdown = (start = 10) => {
//   console.log(start);
//   while (start > 0) {
//     start--;
//     console.log("Done!", start);
//   }
// };
// countdown();

// console.log("REST & SPREAD");
// const numbers = [11, 53, 89, 32, 87];
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

function makeArray(name, ...args) {
  return args;
}
console.log(makeArray("Umair", 1, 2, "6"));
