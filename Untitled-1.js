// console.log("ARROW FUNCTIONS");
// const addNumbers = function (number1, number2) {
//   return number1 + number2;
// };
// console.log(addNumbers(10, 3));

// const addNumbers = (number1, number2) => number1 + number2;
// console.log(addNumbers(10, 3));

// const multiplyNumbers = (number1, number2) => number1 * number2;
// console.log(multiplyNumbers(5, 15));

console.log("DEFAULT PARAMETERS");
const countdown = (start = 10) => {
  console.log(start);
  while (start > 0) {
    start--;
  }
  console.log("Done!", start);
};
countdown();
