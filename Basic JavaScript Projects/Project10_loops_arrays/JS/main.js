
//created a while loop function using var X as a counter and text to display each iteration
function Loop_Func() {
    var X = 1;
    var text = "";
    while (X < 11) {
        text += "loop number #" + X + "<br>";
        X++;
    }
    document.getElementById("Loop").innerHTML = text;
}


//created a for loop function using var Y as a index counter for thge veggies array and displayed each item iteration

var veggies = ["Broccoli", "Tomato", "Onion", "Pepper", "Salad", "Carrot"];
var Y;
var veggie = "";
function For_Loop_Func() {
    for (Y = 0; Y < veggies.length; Y++) {
        veggie += veggies[Y] + "<br>";
    }
    document.getElementById("For").innerHTML = veggie;
}


//created an array function to discplay the string in the 3rd index
function array_func() {
    var Animals = ["cat", "dog", "mouse", "horse"]
    document.getElementById("Array").innerHTML = Animals[2];
}


//created a function with a constant and added a property and value
function const_func() {
    const Student = { Sex: "Male", BirthYear: 1995, BirthdayMonth: 12, BrithdayDay: 30 };
    Student.Sex = "Female";
    Student.Place = "Montreal";
    document.getElementById("Constant").innerHTML = "John is a " + Student.Sex + " from " + Student.Place;
}


// used let as the keyword to show an example of block scope
let A = 100;
{
    let A = 200;
}
document.getElementById("Let").innerHTML = A



// Using a return method to Add Two Numbers (I decided I wanted to tackle a simple calculator)
function Add() {
    let x = parseFloat(document.getElementById("Input1").value)
    let y = parseFloat(document.getElementById("Input2").value)

    let Answer = Add_Two_Num(x, y);

    document.getElementById("Return").innerHTML = Answer; 
}
function Add_Two_Num(a, b) {
    return a + b;
}



//using return in a function to retrieve data from a variable
let Car = {
    Year: "2000 ",
    Make: "Jeep ",
    Color: "Red ",
    Model: "Wrangler ",
    Sentence : function() {
        return "This is a " + this.Year + this.Color + this.Make + this.Model;
    }
};
document.getElementById("Car_Details").innerHTML = Car.Sentence();



// using break and continue statements to end or jump an iteration loop
for (i = 0; i < 11; i++) {
    console.log(i);
    if (i == 5) {   
        break;
    }
}

for (i = 0; i < 11; i++) {
    if (i == 5) {
      continue;
    }
    console.log(i);
}
