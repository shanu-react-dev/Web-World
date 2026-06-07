let str = "Rohit Sharma";
console.log(str);
//! at
//? at is a string method and it is used to find the character at the specified index. If the specified index is not present it will return undefined.
let res = str.at(0);
console.log(res);

//! charCodeAt
//? this is a string method which returns the ASCII value for the character present at the specified index. If the specified index is not present it will return NaN.
res = str.charCodeAt(100);
console.log(res);

//! concat
//? This is a string method and it is used to concat the value with the previous one. Here we can pass any value and it will be concatenated to the previous value.
res = str.concat(true);
console.log(res);

//! includes
//? it is a string method and accepts alphabets or series of alphabets and returns a boolean value if the specified character or series of character is present in the string.
res = str.includes("S");
console.log(res);

//! indexOf
//? it is a string method and returns the index of the specified character if the specified character is not present it will return -1
res = str.indexOf("S");
console.log(res);

//! slice
//? slice is a string method and it is used to extract the specific part from a string. It can accept negative index as an argument. It can accpet two arguments as start index and end index and it will return a new string with starting index upto ending index-1.
res = str.slice(5);
console.log(res);
res = str.slice(0, 5);
console.log(res);
res = str.slice(-5);
console.log(res);

//! substring
//? substring is a string method similar to slice but it cannot accept negative index and it is also accepting two arguments start index and end index it will also return one new string starting from start index upto last index - 1. if any argument is negative index it will be converted to zeroth index.
res = str.substring(-5);
console.log(res);
res = str.substring(-5, 3);
console.log(res);

//! substr
//? It is also used to extract the part of the string only it can accept two arguments as start index and count and it will return a new string from start index to the count value.
res = str.substr(1, 6);
console.log(res);

//! padEnd
//?it is a string method and generally used to hide the specific part of a string. such as ATM card Number, phone number etc. The padEnd() method in JavaScript is used to pad a string with another string (repeated or truncated, if needed) until it reaches a specified target length. The padding is added to the right end of the original string.
let contact = "7061251912";
// res = contact.padEnd(15, "X");
// console.log(res);

res = contact.substring(0, 3);
console.log(res);
res = res.padEnd(10, "X");
console.log(res);

res = contact.substring(0, 3).padEnd(10, "x");
console.log(res);

//! padStart
//? The padStart() method in JavaScript is used to pad a string with another string (repeated or truncated, if needed) until it reaches a specified target length. The padding is added to the left end of the original string.
res = contact.slice(-3).padStart(10, "X");
console.log(res);

//! toUpperCase
//? it is a string method used to convert each and every alphabets in capital character. It does not accept any arguments.
res = str.toUpperCase();
console.log(res);

//! toLowerCase
//? it is a string method used to convert each and every alphabets in small case character. It does not accept any arguments.
res = str.toLowerCase();
console.log(res);

//! split
//? split is a string method and used to convert the string into an array. It accepts separator as an argument.
let sent = "Dhana has big nails in left hand.";
res = sent.split();
console.log(res);
res = sent.split("");
console.log(res);

res = sent.split(" ");
console.log(res);

let username = "Deivanai";
res = username.concat(undefined);
console.log(res);
