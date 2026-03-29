//! Operators
//? Operators are predefined symbol which is used to perform some specific tasks based on operands.
//? In JavaScript we have several Operators
//todo 1. Arithmetic Operators
//? Arithmetic operator is used to perform some mathematical operations, Here we have a set of operators as followed
//? 1. Addition
// var firstNum = 10;
// var firstNum = "10";
// var secondNum = 20;
// var result = firstNum + secondNum;
// console.log(result);
// console.log(typeof result);
//? 2. Subtraction
// var firstNum = 10;
// var firstNum = "10";
// var firstNum = true;
// var firstNum = false;
// var firstNum = null;
// var firstNum = undefined; // NaN: Not a Number
// var secondNum = 20;
// var result = firstNum - secondNum;
// console.log(result);
// console.log(typeof result);
//? 3. Multiplication
// var firstNum = "10x";
// var secondNum = 20;
// var result = firstNum * secondNum;
// console.log(result);
//? 4. Division
// var firstNum = "10";
// var secondNum = 20;
// var result = firstNum / secondNum;
// console.log(result);

//? 5. Modulus
// var firstNum = "10";
// var secondNum = 20;
// var result = firstNum % secondNum;
// console.log(result);
//? 6. Exponential
// var firstNum = 5;
// var secondNum = 3;
// var result = firstNum ** secondNum;
// console.log(result);
//todo 2. Assignment Operators
//todo 3. Relational Operators
//todo 4. Logical Operators
//todo 5. Unary Operators
//? Unary Operators are operators which can be performed on the single operand. here we have typeof, increment and decrement
//! Post Increment
//? In post increment operator first the value is used then it updates the previous value.
//! Pre Increment
//? In pre increment operator the value is getting updated first then it is used.\

//! Post Decrement
//? In Post decrement operator firs the value will be used then it will be decreased by 1 after using the value
//! pre Decrement
//? In Pre Decrement operator firs the vlaue will get updated after this it will be used.

let a = 7 // 8
// console.log(a++)
// console.log(a)
let b = 10 //11
// let expr = a++  + b++ +b - a // 7 + 10 + 11 - 8
// console.log(expr)

// let expr = --a + ++b - a + ++b + b
// console.log(true++)


// console.log(expr)

// let isMarried = true
// let expr = 1 + isMarried++ + ++1
// console.log(expr)
//todo 6. Ternary Operators
//? Ternary Operators are also considered as conditional Operator and it shows or returns the output based on certain condtions
let myName = "Shanu"
myName === "Shan" ? console.log("I am Shanu") : console.log("I am not Shanu")

let number = 19
number % 2 === 0 ? console.log("The given number is even") : console.log("The given number is odd")
// Prime Number
//? A number which is divisible by one and itself apart from any other numbers is known as Prime Number.
//e.g. 7 :- 1, 7
//e.g. 10:- 1, 2, 5, 10
