//! Conditional Statements
//? Conditional Statement is also known as Decision Making statement and It returns or give the output based on certain condition. In JavaScript We can perform conditional rendering in multiple ways

//? In JavaScript we can perform conditional statement in various ways listed below
//? if Statement
let isDabba = false
if(isDabba){
    console.log("Students are dabba")
}else{
    console.log("Students are not dabba!!")
}

let isMarried = ""
if(isMarried){
    console.log("I am married")
}else{
    console.log("I am not married!!!")
}

//? else if
let score = 98
if(score>=90 && score<= 100){
    console.log("You are outstanding!!!")
} else if(score>=80 && score < 90){
    console.log("You are excellent")
}else if( score >= 60 && score <80){
    console.log("you are an average")
}else{
    console.log("Enter correct marks!!")
}

//! Taks to calculate percentage