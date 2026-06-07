let heading = document.querySelector("h1");
console.log(heading);
//! How to set attribute to the elements
//? By using direct attribute name
heading.className = "myHeading";
heading.id = "shanu";

//? With the help of classlist.add method
//todo This method helps u to add extra class name to the elements. It does not overwrite the previous classname
heading.classList.add("demo");

//! setAttribute method
//? This method overwrites the previous values of attributes.
heading.setAttribute("title", "This is my heading");
heading.setAttribute("class", "sun");

//! Creating and adding attribute using attributeNode method
let style = document.createAttribute("style");
style.value = "background-color: lightseagreen; color: orange";
// style.value = "border: 2px solid black";
heading.setAttributeNode(style);
