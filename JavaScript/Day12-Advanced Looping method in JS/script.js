let arr = ["Shanu", "Sundari", "Shakeela", "Sheila", "Sharanya"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("Normal Loop finished");
//! for of
for (let i of arr) {
  console.log(i);
}

let fName = "Amarjeet";
for (let i of fName) {
  console.log(i);
}
//! for in
let obj = {
  userName: "Shanu",
  age: 23,
  gender: "male",
  isAvailable: true,
};

// console.log(obj.userName);
// console.log(obj.age);

// for (let i = 0; i < obj.length; i++) {
//   console.log(i);
// }

for (let i in obj) {
  console.log(obj[i]); //? It helps to access the object keyname dynamically.
}
