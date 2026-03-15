console.log("Hii This is JS!!");

//! string
//? String is a collection or sequence of characters enclosed within double quotes, single quotes or backticks (String interpolation)
let myName = "Dhana";
console.log(myName);
console.log(typeof myName);

//! number
//? It is a primitive datatype in JS which can hold any numeric values either integer or decimal value.
let myAge = 23;

console.log(myAge);
console.log(typeof myAge);

//! boolean
//? it is also a primitive datatype generally holds the value like true or false only.
let isMarried = false;
console.log(isMarried);
console.log(typeof isMarried);

//! undefined
//? It is a primitive datatype which represents undefined only and undefined is something which is declared but not defined means unknown values. Type of undefined is undefined itself.
let haveKids = undefined;
console.log(haveKids);
console.log(typeof haveKids);

//! null
//? Null is a primitive datatype which represents empty value or no value in JavaScript. It is a representation of empty object in JS. The type of null is object.
let husband = null;
console.log(husband);
console.log(typeof husband);

//! Symbol
//? It is a primitive datatype which is used to make the variable unique generally used to define logics. The type of Symbol is Function.
let myUniqueVal = Symbol;
console.log(myUniqueVal);
console.log(typeof myUniqueVal);

//! bigint
//? It is a primitive datatype which can store integere value more than 16 digits. the type of bigint is bigint only.
let largeNumber = 12345678901234567890321n;
console.log(largeNumber);
console.log(typeof largeNumber);

//! Non-Primitive Datatypes
//? Non-primitive data types, also known as reference types, are objects and derived data types. They can store collections of values or more complex entities. The two key non-primitive data types in JavaScript are:

//! 1 Array
//? Array is a non-primitive datatype which can hold multiple values of any kind of datatype inside array literals or Array notation. It stores the elements in the form of indexes (address or position of the elements.). Index alsways starts with 0 and it will go to last elements.
//todo ["Bugatti", "Porsche", "Lamborghini", "Dodge", "BMW"] here we have 5 elements for each and every element we have some address that is known as index. for the first element index is 0 and it will go upto the last element.
let arr = ["JavaScript", "Mocha", "EcmaScript", "LiveScript"];
console.log(arr);
console.log(typeof arr);
//! 2 Object
//? Object is a non primitive datatype which can store the multiple values in the form of key and value pairs inside Object literals or object notation.
//todo {username: "Shanu", age: 23} here the username and age is considered as keys and Shanu and 23 is considered as values.
let obj = {
  prog1: "JavaScript",
  prog2: "NodeJS",
  prog3: "ExpressJS",
  prog4: "MongoDB",
  prog5: "Angular JS",
};
console.log(obj);
console.log(typeof obj);
//! 3 Function
//? Function is a non primitive datatypes. It is a set of block of reusable codes which is used to perform some specific tasks. it is reusable in nature.
//todo function functionName () {}
function functionName() {
  console.log("Hii THis is Shanu from Delhi...");
}
functionName();
functionName();
functionName();
functionName();
functionName();
functionName();
console.log(functionName);
console.log(typeof functionName);
