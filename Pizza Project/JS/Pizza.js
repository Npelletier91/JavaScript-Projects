//creating a function for storing the selected pizza data 
function getReceipt() {
    //initialize varibles to manipulate throughout the whole program
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    //setting this variable to target the array called "size" in the HTML
    var sizeArray = document.getElementsByClassName("size");
    //iterating through the "size" array for "checked" selected size
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            //adding the selected size value to the order list receipt
            text1 = text1 + selectedSize;
        }
    }
    //adding values to each selection of pizza size for determining total cost
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    //adding the cost of pizza per size to the current total cost of order
    runningTotal = sizeTotal;
    //logging the data of the function above
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //adding these variables to be used in the next function
    getTopping(runningTotal, text1, sizeTotal);
};

//this function is for adding the toppings to the receipt
function getTopping(runningTotal, text1, sizeTotal) {
    //initialize variables to work with toppings
    var toppingTotal = 0;
    var selectedTopping = [];
    //getting the array from the html for toppings
    var toppingArray = document.getElementsByClassName("toppings");
    //iterating through the selected toppings of the array
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            //storing the value and adding the selected topping to the console
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            //combining the selected toppings to the order list receipt with their price
            //making the first topping free on the receipt
            if (selectedTopping.length === 1) {
                text1 = text1 + " ($" + sizeTotal + ".00)" +"<br>" + toppingArray[j].value + " (Free topping!)" + "<br>";
            } else {
                //adding ($1.00) to each topping other than the first
                text1 = text1 + toppingArray[j].value + " ($1.00)" + "<br>";
            }
        }
    }
    //variable for counting the total topping for getting the right price for receipt
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        //minus the first topping which is free
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    //adding topppings to the total order list receipt
    runningTotal = (runningTotal + toppingTotal);
    //logging the data of each pizza
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    //adding the updated pizza and toppings with prices to the HTML as a receipt
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";

}