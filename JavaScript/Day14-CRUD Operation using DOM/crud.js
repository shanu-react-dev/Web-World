//! createElement

//? This is a method and it is used to create an element using JS.
let myHeading = document.createElement("h3");
console.log(myHeading);

//! innerHTMl & innerText & textContent
//? All these three methods are used to update the content of an HTML elements. innerHTML helps to update the content along with the tags or extra elements. innerText it will hold the visual text content on the UI. TextContent method holds the visible or hidden text content in the UI.
// myHeading.innerHTML = "hi this is shanu";
// myHeading.innerText = "helllo This is Sun";
// myHeading.textContent = "Bye go to hell";

myHeading.innerHTML = "<mark>Hello,</mark> This is shanu";
// myHeading.innerText = "<mark>Hii </mark>";
// myHeading.textContent = "<mark>Hii </mark>";

document.body.appendChild(myHeading);

let unorderedlist = document.createElement("ul");
console.log(unorderedlist);
let item1 = document.createElement("li");
item1.innerText = "Item 1";
item1.style.color = "red";
let item2 = document.createElement("li");
item2.innerText = "Item 2";
item2.style.color = "yellow";
let item3 = document.createElement("li");
item3.innerText = "Item 3";
item3.style.color = "green";
let item4 = document.createElement("li");
item4.innerText = "Item 4";
item4.style.color = "navy";
let item5 = document.createElement("li");
item5.innerText = "Item 5";
item5.style.color = "skyblue";
let item6 = document.createElement("li");
item6.innerText = "Item 6";
item6.style.color = "lightseagreen";
unorderedlist.appendChild(item1, item2);
unorderedlist.append(item1, item2, item3, item4, item5, item6);

//! Deleting the elements from UI
document.body.append(unorderedlist);
item6.remove();

//! difference between innerHTMl & innerText & textContent
// let headingFromHTML = document.querySelector("h1");
// console.log(headingFromHTML.innerHTML);
// console.log(headingFromHTML.innerText);
// console.log(headingFromHTML.textContent);
