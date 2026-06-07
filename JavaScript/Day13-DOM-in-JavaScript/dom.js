console.log("DOM in JavaScript");
//! DOM
//? DOM stands for Document object model and it is an API which helps to update the content dynamically in the UI using some DOM methods. It represents the entire HTML file in a tree like structure inside browser.

//? The DOM (Document Object Model) is a programming interface that represents a web page as a tree-like structure of objects. It acts as a bridge between the browser's rendered document and a scripting language like JavaScript, allowing you to change the page's content, structure, and style dynamically.

//! Document
//? The document object is your entry point to the DOM. It represents the entire page and provides methods (like getElementById) to find and manipulate elements.
console.log(document);
//! Methods to access or Read HTML elements using DOM
//? DOM allows certain methods to access HTML elements using JavaScript

//! document.getElementById()
//? It selects or targets the first matching element based on their id. if the specified argument is not present insid the HTML document it will return null.
// console.log(document.getElementById("title"));
let myHeading = document.getElementById("title");
console.log(myHeading);

//! document.getElementsByClassName()
//? This method helps you to target the entire HTML elements having the same class name. It will return one HTML collection containing element nodes. if the specified argument is not present it will return empty HTML collection
//? HTML collection is an array like object which contains only the element nodes.
let elements = document.getElementsByClassName("demo");
console.log(elements);

//! document.getElementsByTagName()
//? This method helps you to target the elements based on their tag names it will return HTMl collection containing element nodes.
let tags = document.getElementsByTagName("h1");
console.log(tags);

//! document.querySelector()
//? This method helps you to target the elements using css selector means it accepts CSS selectors as an argument and returns the first matching element. if the specified argument is not present it will return null.
let myele = document.querySelector(".demo");
console.log(myele);
myele = document.querySelector("#title");
console.log(myele);
myele = document.querySelector("[type=text]");
console.log(myele);

//! document.querySelectorAll()
//? It is similar to querySelector but it returns NodeList containing nodes of the elements.
let eleQueryAll = document.querySelectorAll(".demo");
console.log(eleQueryAll);

//! the difference between nodelist and htmlcollection
