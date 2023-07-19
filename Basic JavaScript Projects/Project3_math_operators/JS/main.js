

// creating an addition function to return an operation

function Add_Function() {
    var Addition = 5 + 3;
    document.getElementById("Add").innerHTML = "5 + 3 = " + Addition;
}

// creating a substraction function to return an operation

function Sub_Function() {
    var Substraction = 5 - 3;
    document.getElementById("Sub").innerHTML = "5 - 3 = " + Substraction;
}

// creating a multiplication function to return an operation

function Mult_Function() {
    var Multiply = 5 * 3;
    document.getElementById("Mult").innerHTML = "5 * 3 = " + Multiply;
}

// creating a multiple operations function to return an value

function Operations_Function() {
    var Operations = (5 + 3) * 10 / 5;
    document.getElementById("Operations").innerHTML = "(5 + 3) * 10 / 5 = " + Operations;
}

// creating a division function to return an operation

function Div_Function() {
    var Division = 5 / 3;
    document.getElementById("Div").innerHTML = "5 / 3 = " + Division;
}

// creating a division function to return only the remainder of an operation

function Remainder_Function() {
    var Remainder = 5 % 3;
    document.getElementById("Remainder").innerHTML = "Remainder of 5 / 3 = " + Remainder;
}

// changing the value of the variable to negative

function Negative_Function() {
    var x = 5;
    document.getElementById("Negative").innerHTML = "negative 5 = " + -x;
}

// using a increment property to add 1 to 5

function Increment_Function() {
    var Increment = 5;
    Increment++;
    document.getElementById("Increment").innerHTML = "5 by increment of 1 = " + Increment;
}

// using a decrement property to subtract 1 to 5

function Decrement_Function() {
    var Decrement = 5;
    Decrement--;
    document.getElementById("Decrement").innerHTML = "5 by decrement of 1 = " + Decrement;
}

// using a math property to return a random number between 1-100

function Random_Function() {
    var random = Math.random() * 100;
    document.getElementById("Random").innerHTML = "Random number between 1-100 = " + random;
}

// using a math property to return a number rounded up to the next interger

function RoundUp_Function() {
    var round = Math.ceil(8.6);
    document.getElementById("RoundUp").innerHTML = "8.6 rounded up = " + round;
}