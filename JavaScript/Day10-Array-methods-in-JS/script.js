//! Array
//? Array is a non-primitive datatype in JavaScript it stores multiple values in a single variable in the form of indexes. It can be modified. It is a continuous block of memory. We can create arrays using various ways such as array literals, Constructor Method etc.
//! Homogeneous array
//? An array containing data of  same datatype is known as Homogeneous array.
let arr = [
  "Shakeela",
  "Sheela",
  "Shaeron",
  "Sharanya",
  "Shanvi",
  "Shruti",
  "ShreeLakshmi",
  "Shobha",
];
console.log(arr);

//! Heterogeneous array
//? An array containing data of  different datatype is known as Heterogeneous array.
let arr2 = ["Kalee", 21, true, undefined, null];
console.log(arr2);

//! Creating an array using array constructor methods
let arr3 = Array("Laxmi", "Lalita", "Leela", "Lata", "Lavanya");
console.log(arr3);

//! Creating an array using new keyword
let arr4 = new Array(
  "Devi",
  "Deivanai",
  "Dipti",
  "Deepa",
  "Diana",
  "Daisy",
  "Dhana",
  "Dhan-Dhana-Dhan",
);
console.log(arr4);
//! length
//? It's a property of array as well as string datatype which returns the exact count of elements present inside an array.
console.log("Total Array element : ", arr4.length);
let arr5 = [];
console.log(arr5.length);
arr5.length = 10;
console.log(arr5);
console.log(arr5.length);

//!at
//? This is an array method and used to get the element from an array based on specified index. If the specified index is not present it will return undefined. It can accept either positivie index or negative index. Negative index counts the elements from the last element inside an array.
let res = arr4.at(100);
console.log(res);

//! concat
//? concat is a string and array method and it is used to merge arrays or it adds the element at the last index of an array . It accepts arguments such as array or any value. It does not modify the original array.
res = arr4.concat(true);
console.log(res);
console.log(arr4);
res = arr4.concat(
  ["Shanu", "Shakti", "Shivam", "Shiva", "Subahu"],
  undefined,
  null,
  true,
);
console.log(res);

//! flat
//? flat is an array method it is used to flatten an array It flattens the nested array based on specified level as an argument. It can accept number of levels needs to be flatten or Infinity. It does not modify the original array.
let arr6 = [11, 12, [45, 78, [89, 46, [46, 64, [98, 88]]]]];
res = arr6.flat();
console.log(res);
res = arr6.flat(4);
console.log(res);
res = arr6.flat(Infinity);
console.log(res);
console.log(arr6);

//! includes
//? includes is an array method and it is used to find check whether an element is present inside an array or not if it is present it will return true else false. It will not modify the original array.
let arrOfFruits = [
  "Kiwi",
  "Pomegranate",
  "Orange",
  "Grapes",
  "Papaya",
  "Apple",
  "Orange",
  "Dragon Fruit",
];
res = arrOfFruits.includes("papaya");
console.log(res);

//! indexOf
//? This is an array method and it returns the index of the specified element. If it is present in the array it will return the index of the actual element else -1.
res = arrOfFruits.indexOf("apaya");
console.log(res);

//! join
//? join is an array method it is used to convert the array into a string. It accepts one argument as a separator.
console.log(arrOfFruits);
res = arrOfFruits.join();
console.log(res);

res = arr6.flat(Infinity).join("||");
console.log(res);

//! lastIndexOf
//? this array method returns the index of the element in an array at last iteration. If the particular argument is not present inside an array it will return me -1
res = arrOfFruits.lastIndexOf("Orange");
console.log(res);

//!pop
//? it is an array method and used to remove the element from the last index and returns the removed element. It modifies the original array.
res = arrOfFruits.pop();
console.log(res);
console.log(arrOfFruits);

//! push
//? it is an array method and it is used to add elements at the last index. It will return the updated length of an array. It modifies the original array.
res = arrOfFruits.push("Strawberry");
console.log(res);
console.log(arrOfFruits);

//! reverse
//? it is an arrray method used to reverse the order of an array elements.It does not accept any argument. It will modify the original array.
res = arrOfFruits.reverse();
console.log(res);
console.log(arrOfFruits);

//! shift
//? this is an arrray no argument method and it is  used to remove the element from the start index and returns the removed element. It will modify the original array.
res = arrOfFruits.shift();
console.log(res);
console.log(arrOfFruits);

//! slice
//? it is an array and string method as well and used to extract the elements from an array or string it will return one new array with elements from specified start index to last index-1.
res = arrOfFruits.slice(3, 6);
console.log(res);

//!splice
//? splice is an array method and it is used to remove or add the elemnts inside an array at any position. It is used to extract the array elements as well. It will modify the the original array.
//? It accepts 3 arguments or more than that. First one is start index, second is delete count third is elements needs to be added.
res = arrOfFruits.splice(4, 1);
console.log(res);
console.log(arrOfFruits);
res = arrOfFruits.splice(4, 0, "Banana");
console.log(res);
console.log(arrOfFruits);

//! unshift
//? it is an array method and used to add the elements from the start index of an array. it returns the updated length of an array and it modifies the original array as well.
res = arrOfFruits.unshift("StarFruit", "JackFruit", "Avacado");
console.log(res);
console.log(arrOfFruits);
