

//using a function to combine (Concatenate) multiple variables together
//and displaying the whole sentence to the HTML
function Combined_Func() {
    var part1 = "I am combining";
    var part2 = " this sentence";
    var part3 = " together!";
    var Sentence = part1.concat(part2, part3);
    document.getElementById("Concatenate").innerHTML = Sentence;
}


//using a function to only display a sliced part of a string
//and displaying the sliced part to the HTML
function Slice_Func() {
    var one = "testing my slicing capabilities";
    var slice = one.slice(11, 18);
    document.getElementById("Slice").innerHTML = slice;
}


//using a function to change the string to all uppercase letters
//and displaying the sentence to the HTML
function Upper_Func() {
    var text = document.getElementById("convert").innerHTML;
    document.getElementById("convert").innerHTML =
    text.toUpperCase();
}
  

//using a function to find the position of a word
//and displaying the position to the HTML
function Search_Func() {
    var text = document.getElementById("find").innerHTML;
    var word = text.search("word");
    document.getElementById("search").innerHTML = word;
}


//using a function to convert the number data type to a string data type
//and displaying it to the HTML
function String_Func() {
    var X = 423;
    document.getElementById("Number").innerHTML = X.toString();
}


//using a function to round up and only display 5 digits
//and displaying it to the HTML
function Percision_Func() {
    var X = 423.432432;
    document.getElementById("long_number").innerHTML = X.toPrecision(5);
}


//using a function to round up and display only 1 decimal position 
//and displaying it to the HTML
function Fixed_Func() {
    var X = 423.456;
    document.getElementById("Fixed").innerHTML = X.toFixed(1);
}



//using a function to show the primitive value of a variable
//and displaying it to the HTML
function Value_Func() {
    var X = 423;
    document.getElementById("Value").innerHTML = X.valueOf();
}

