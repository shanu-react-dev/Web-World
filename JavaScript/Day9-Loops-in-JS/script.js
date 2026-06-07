//! loops
//? Loops in JavaScript is a control flow statement which is used to execute a block of codes again and again based on certain conditions. If the condition is true it will execute the code if the conditions gets false then it will not execute the statements.
//! There are several loops in JS
//? 1. While
let isMarried = true;
while (isMarried === true) {
  console.log("I am married!!");
  isMarried = false;
}

let sorrycount = 0;
while (sorrycount < 100) {
  console.log("I am so sorry ", sorrycount + 1);
  sorrycount++;
}

let hasStudied = true;
do {
  console.log("Take Kit Kat Chocolate...");
} while (hasStudied === false);

let count = 100;
for (let i = 0; i < count; i++) {
  console.log(i + 1);
}

function isPalidrome(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
    // console.log(str);
  }
  console.log(rev);
  if (rev === str) {
    console.log("It is palindrome");
  } else {
    console.log("Not palindrome");
  }
}
isPalidrome("banana");
