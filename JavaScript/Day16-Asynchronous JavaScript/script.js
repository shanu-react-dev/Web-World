//! Asynchronous JavaScript
//? Asynchronous JavaScript is a feature of javascript which allows it to run the code in non-blocking manner. It runs the heavy task in background and allow other tasks to run. We can perform asynchronous JavaScript in three ways.
//! Timer Function (Callback function)
//?1. setTimeOut
//todo This method allows you to run the code after a specific time.
//implementations

// setTimeout(function () {
//   console.log("Hii this is Shanu"); //5s
// }, 5000);
// console.log("hii this is JavaScript"); //1s
//?2. setInterval
//todo This method allows you to run the code again and again based on the specified time.
// let timer = document.getElementById("timer");
// let button = document.getElementById("start");
// let stopBtn = document.getElementById("stop");
// console.log(timer.innerText);
// let startInterval;
// button.addEventListener("click", function () {
//   startInterval = setInterval(() => {
//     timer.innerText = Number(timer.innerText) + 1;
//   }, 1000);
// });
//?3. clearTimeOut
//todo this method helps you to stop the setTimeOut function.
//?4. clearInterval
//todo this method helps you to stop the intervals.

// stopBtn.addEventListener("click", function () {
//   clearInterval(startInterval);
// });
//! Promises
//? Promise is an object in JavaScript and it represents the eventual completion of a task. Whether a task will get completed in the future or not. it has three stages pending, fulfilled and rejected.
//? We can handle promises using then and catch
//? it gets created whenever we try to do a task which is outside of JavaScript environment.

//!How to fetch the data from any api using JavaScript
//? using fetch api we can fetch the data using JavaScript it is an api or method provided by browser.
// let data = fetch("https://api.github.com/users");
// console.log(data);

// let finalData = data.then(function (mydata) {
//   //   console.log(mydata); //string data received from server
//   return mydata.json(); //json is amethod which converts string data into JavaScript opbject
// });

// console.log(finalData);
// finalData.then(function (data) {
//   console.log(data);
// });

// fetch("https://fakestorea.com/products")
//   .then(function (data) {
//     return data.json();
//   })
//   .then(function (finaldata) {
//     console.log(finalData);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });
//! async and await
//? async and await both are keywords in JavaScript and used to make JavaScript asynchronous. Where async keyword is used to create asynchronous function and await keyword is used to wait for the task completion of asynchronous task or promises. we can handle promises using try and catch.

//? it handles the asynchronous task in synchronous syntax unlike Promises.

async function fetchData() {
  try {
    let data = await fetch("https://fakestorei.com/products");
    console.log(data);

    let finalData = await data.json();
    console.log(finalData);
  } catch (error) {
    console.log(error.message);
  }
}

fetchData();
