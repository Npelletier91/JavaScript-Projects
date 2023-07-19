window.alert("Hello World!")                            //greeting the user popup


var A = "This is a string,",                            //creating variables with string values
    B = " with an added string!",
    C = " Now I am adding multiple variables to one statement.<br>";


document.write(A + B + C);                              //displaying the strings on the HTML

document.write(3 + 3);                                  //using an expression 

function My_First_Function() {                          //naming the function
    var str = "this is my button testing text!"         //naming the variable
    document.getElementById("Button").innerHTML = str   //changing the value of HTML button string by it's ID
}