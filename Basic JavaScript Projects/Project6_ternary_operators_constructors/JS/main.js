// A Ternary operation using user input for deciding wether user is tall enough to ride
function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}
// A Ternary operation using user input for deciding wether user old enough to vote
function Vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age > 18) ? "You are old enough" : "You are too young";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}



// creating a constructor function to add new Objects and assign them key/value pairs
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

//adding new Objects with values as above
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red")
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black")
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard")
// displaying the output of object Erik
function myFunction() {
    document.getElementById("Keywords").innerHTML = "Erik drives a " +
    Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in "
    + Erik.Vehicle_Year
}

// creating a constructor function to add new Objects and assign them key/value pairs
function Dog_Function(name, breed, color, age) {
    this.dogName = name;
    this.dogBreed = breed;
    this.dogColor = color;
    this.dogAge = age;
}
//adding new Object with values as above
var Buddy = new Dog_Function("Buddy", "Golden Retriever", "Yellow", 5)

// displaying the output of object Buddy
function Call_Function() {
    document.getElementById("New_and_This").innerHTML = "My dog's name is "
    + Buddy.dogName
}




// making a nested function to add x + y
function First_Function(x) {
    function Second_Function(y) {
        return x + y;
    }
    return Second_Function(7)
}

// calling the function to the button
function Nesting_Function() {
    var result = First_Function(3)
    document.getElementById("Nested_Function").innerHTML = "3 + 7 = " + result;
    
}



