// function callMe() {
//   document.write("Hii this is Shanu");
// }

// let frnd = () => console.log("Rohit");

// let myBtn = document.querySelector("#myBtn");
// console.log(myBtn);

//! DOM Events
// myBtn.onclick = () => {
//   console.log("My button got clicked");
// };

// function sumOftwoNumbers(a, b) {
//   console.log(a + b);
// }

// let sum = document.querySelector("#sum");
// sum.onclick = () => {
//   sumOftwoNumbers(100, 90);
// };

//! AddEventListener method
// window.addEventListener("load", function () {
//   alert("hello, welcome to my website");
// });

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents default behavior of the elements
  let email = document.querySelector("#email").value;
  //   console.log(email);
  let password = document.querySelector("#password").value;
  //   console.log(password);
  console.log({ email, password });
});
