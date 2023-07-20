
var X = 10                      // creating a global variable
function Add() {
    var Y = 5                   // creating a local variable
    console.log(X + 2);
}
function Sub() {
    console.log(Y - 2);         // testing local variable error
}

function Minutes() {            //writting a function that tells you the hour of the day
    var time = new Date().getHours();
    document.getElementById("Time1").innerHTML = "this is the hour of today's date: "
    + time;
}

function If_statement() {       // writting an "if" statement and return result of condition using gloabl variable
    if (X < 12) {
        document.getElementById("IF").innerHTML = X + " is bigger than 12";
    }
}

function Age_Function() {       // using "if" and "else" statements to check age requirements
    Age = document.getElementById("Age").value;
    if (Age >= 25) {
        document.getElementById("output").innerHTML = "You are old enough to rent a car!";
    }
    else {
        document.getElementById("output").innerHTML = "You are not old enough to rent a car.";
    }

}

function Time_Function() {          // time function using Javascript Date() method 
    var Time = new Date().getHours(); 
    var Reply;
    if (Time < 12 && Time > 4) {        // limiting what hour of day returns the time of day
        Reply = "It's the morning!";
    }
    else if (Time >= 12 && Time <= 16) {
        Reply = "It's the afternoon!";
    }
    else if (Time >= 0 && Time <= 4) {
        Reply = "It's the middle of the night!";
    }
    else {
        Reply = "It's the evening!";
    }
    document.getElementById("Time_Right_Now").innerHTML = Reply
}


