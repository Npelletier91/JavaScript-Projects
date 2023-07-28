
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    else {
        document.getElementById("thanks").innerHTML = "Thank you " + x;
    }
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }
}
