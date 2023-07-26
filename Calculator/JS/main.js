
//creating an object to keep track of values
const Calculator = {
    // displays "0" on screen
    Display_Value: "0",
    // holds the first operand for calculations
    First_Operand: null,
    //checks if the second command has been inputted or not
    Wait_Second_Operand: false,
    //this will classify the operator ( + - * /)
    operator: null,
}

//modifying the values when buttons are clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //checks if second operand is true and sets Display_Value to key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //overwrites the display value if it is "0" otherwise it adds onto it
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
    }
}

//function that allows decimal points
function Input_Decimal(dot) {
    //ensures accidental clicking of decimal doesnt cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //making sure the display value has decimal if it needs
        Calculator.Display_Value += dot;
    }
}

//function that handles the operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator;
    //taking the user input value and storing it as a number
    //in Calculator.First_Operand
    const Value_of_Input = parseFloat(Display_Value);
    //checks if operator exists and if wait_second_operand is true,
    //then updates the operator and ends function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //checks if operator exists
        const Value_Now = First_Operand || 0;
        //if exists, property look up is performed for the operator in the
        //Perform_Calculation object and the function that matches the operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //adding a fixed amount of decimal numbers to show
        result = Number(result).toFixed(9);
        //this removes any trailing zeros
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}
//creating the object to perform each operator with each operand
const Perform_Calculation = {
    "/": (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    "*": (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    "+": (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    "-": (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    "=": (First_Operand, Second_Operand) => Second_Operand
};

// function that resets the calculator back to original state when called upon
function Calculator_Reset() {
    Calculator.Display_Value = "0";
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//function that allows the screen to display the Display_Value
function Update_Display() {
    //targets calculator screen class input
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.Display_Value;
}
Update_Display();

//monitoring button clicks for user
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    //variable that represents the element that was clicked on
    const { target } = event;
    //if element that was clicked on is not a button, exit the function
    if (!target.matches("button")) {
        return;
    }
    //calls operator functions when opreator buttons are clicked and displays their values
    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }
    //calls decimal function when decimal button is clicked and displays values
    if (target.classList.contains("decimal")) {
        Input_Decimal(target.value);
        Update_Display();
        return
    }
    //calls the clear all function when clicked on the AC button
    if (target.classList.contains("all-clear")) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})
