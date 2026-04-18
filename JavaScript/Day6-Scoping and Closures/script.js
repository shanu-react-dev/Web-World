// console.log("JavaScript is a very very good language...")
//! Scope
//? Scope is a visibility or accessibility of a variable within a block or out of a block in the JS file. It defines where we can access the variable declared with var let and const. There are three scopes in JavaScript
//! 1 Global Scope
//? Global scope means any variable declared globally can be accessed anywhere in the file. variable created using var keyword follows global scope.
//! 2 Block Scope
//? Any variable created within a block of codes can be accessed only inside the block. It can't be accessed outside of the block. variables created using let and const inside a block such as loops, conditional statement etc. ccan be accessed inside the block itself.
//! 3 Local or Function scope
//? Any variables created using any keyword such as var, let or const inside a function can be accessed inside the function itself. It can't be accessed outside of the functions.

console.log(a);
var a = 10;
console.log(a);

//! We can't access the variable created using let and const before its initialization.
//? The Temporal Dead Zone refers to the period between the entering of a scope and the actual declaration of a variable using let or const. During this period, the variable is in an "uninitialized" state and accessing it will result in a ReferenceError.
// console.log(b);
let b = 100;
console.log(b);
const c = 1000;
console.log(c);

if (true) {
  var a = "Shanu";
  console.log(a); //Shanu
  let b = "Dodge";
  console.log(b);
  const c = "BMW M4";
  console.log(c);
}
console.log(a); //Shanu
console.log(b); //100
console.log(c); //1000

function demo() {
  var a = "Sunflower";
  console.log(a); //Sunflower
  let b = "Dodge";
  console.log(b); //Dodge
  const c = "BMW M4";
  console.log(c); //BMW M4
}
demo();

console.log(a); //Shanu
console.log(b); //100
console.log(c); //1000
