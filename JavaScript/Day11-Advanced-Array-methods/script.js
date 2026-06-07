/**Advanced Array Methods in JavaScript
 *
 * !Map [1,2,3,4,5]->[1,4,9,16,25]
 * !Filter [2,4]
 * !ForEach -> does not return anything except undefined
 * !Reduce [1,2,3,4,5]->15
 */

//! map
//? It is an advanced array method used to transform the array elements and returns one new array with transformed elements. It does not modify the original array.
let arr = [1, 2, 3, 4, 5];
let res = arr.map(function (element, index, array) {
  //   console.log(element);
  //   console.log(index);
  //   console.log(array);
  return element * element;
});
console.log(res);

//! filter
//? filter is an advanced array method used to filter the data of an array and returns one new aray with filtered data of an existing array. It does not modify the original array.
res = arr.filter((element, index, array) => (element % 2 == 0 ? element : ""));
console.log(res);

res = arr.filter((element, index, array) => {
  if (element % 2 === 0) {
    return element;
  }
});
console.log(res);

// let arrOfnames = [
//   "Shanu",
//   "DhanDhanaDhan",
//   "Nivetha",
//   "Rakshani",
//   "Priya",
//   "Deivanai",
//   "Bas",
//   "BMW",
// ];

// res = arrOfnames.filter((ele, index) => {
//   if (
//     ele.includes("a") ||
//     ele.includes("e") ||
//     ele.includes("i") ||
//     ele.includes("o") ||
//     ele.includes("u")
//   ) {
//     return ele;
//   }
// });

// console.log(res);

//! forEach
//? forEach is an advanced array looping method and it is used to iterate the array elements it accepts callback function as an argument and the callback function has three parameters where first is current element, index and aarray itself. It does not return anything except undefined.

let arrOfnames = [
  "Shanu",
  "DhanDhanaDhan",
  "Nivetha",
  "Rakshani",
  "Priya",
  "Deivanai",
  "Bas",
  "BMW",
];

res = arrOfnames.forEach(function myArrow(ele, index, arr) {
  console.log(ele);
  console.log(index);
  console.log(arr);
  return "Shanu";
});

console.log(res);
//! reduce
//? Reduce is an advanced array method and it is used to reduce the array elements in a single value. It returns the reduced value of an array. It does not modify the original array. It accepts arguments as accumulator which stores the current result, current value, index and array itself.

arr = [10, 15, 25, 30, 18];
res = arr.reduce((accumulator, currVal, index, arr) => {
  // console.log(accumulator);
  // console.log(currVal);
  // console.log(index);
  return accumulator + currVal;
});

console.log(res);
