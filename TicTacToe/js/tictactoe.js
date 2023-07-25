//varible to keep track of turns
let activePlayer = "X";
//array for storing each move
let seletedSquares = [];

//function to place X or O in spaces
function placeXO(squareNumber) {
    //condition to ensure square is not already selected
    //using the .some() method to check each square in the Array if it is already taken
    if (!seletedSquares.some(element => element.includes(squareNumber))) {
        //variable to retrieve what was clicked on
        let select = document.getElementById(squareNumber);
        //condition to check whos turn it is
        if (activePlayer === "X") {
            //placing X image for the first player
            select.style.backgroundImage = 'url(images/x.jpg)';
            select.style.backgroundSize = "100%"
            // if not X, then O
        } else {
            //placing O image for the second player
            select.style.backgroundImage = 'url(images/o.png)';
            select.style.backgroundSize = "100%"
        }
        //combining activePlayer and squareNumber
        seletedSquares.push(squareNumber + activePlayer);
        //function to check if a player has won
        checkWinConditions();
        //changing players after selected by changing active player
        if (activePlayer === "X") {
            //if player is 'X' than change to 'O'
            activePlayer = "O";
        } else {
            //if player is anything other than 'X' than change to 'X'
            activePlayer = "X";
        }
        //function for sound when clicking
        audio("./media/select.mp3");
        //condition play computers turn
        if (activePlayer === "O") {
            //function for disabling click when it's the computers turn
            disableClick();
            //setting a timer for the computers turn
            setTimeout(function () { computersTurn(); }, 1000)
        }
        //needed for the computersTurn() function to work
        return true;
    }
    //function for telling the computer to choose a random square
    function computersTurn() {
        //boolean needed for loop
        let success = false;
        //variable to store a square from indexes 0-8
        let pickASquare;
        //condition to allow computer to keep choosing if a selected square is already taken
        while (!success) {
            //using a math method to return a random number from 0-8
            pickASquare = String(Math.floor(Math.random() * 9));
            //condition to evaluate wether the returned number has already been selected
            if (placeXO(pickASquare)) {
                //this calls the function
                placeXO(pickASquare);
                //this changes boolean and ends the loop
                success = true;
            };
        }
    }
}

//function to check if a player has won by parsing through the array
//drawLine() function is added if win condition is met
function checkWinConditions() {
    // checking each condition where "X" wins
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    //checking each condition where "O" wins
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //condition check for a tie by checking if no conditions are met 9 times
    else if (seletedSquares.length >= 9) {
        //this plays the tie sounds
        audio("./media/tie.mp3");
        setTimeout(function () { resetGame(); }, 500);
    }
}

//this functions checks for 3 strings that include the same value
function arrayIncludes(squareA, squareB, squareC) {
    // variables set to evaluate 3 in a row
    const a = seletedSquares.includes(squareA);
    const b = seletedSquares.includes(squareB);
    const c = seletedSquares.includes(squareC);
    //if each varible is true and drawLine() is executed
    if (a === true && b === true && c === true) { return true; }
}

//function to make mouse unclickable for 1 second
function disableClick() {
    //this makes it unclickable
    body.style.pointerEvents = "none"
    setTimeout(function () { body.style.pointerEvents = "auto"; }, 1000)
}

//This functino takes a string parameter of the path you set earlier for
//placement sound ('./media/place.mp3')
function audio(audioURL) {
    //created a new audio object
    let audio = new Audio(audioURL);
    //add play method to play sound
    audio.play();
}

//function to draw lines when a win is detected
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //variable to access canvas in HTML
    const canvas = document.getElementById("win-lines");
    //variable to access canvas methods and properties
    const c = canvas.getContext('2d');
    //indicating start and end point coordinates on the y and x axis
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
    //animation for interacting with canvas
    function animateLineDrawing() {
        //variable for creating loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //clears content from last loop
        c.clearRect(0, 0, 608, 608);
        //starts and new path
        c.beginPath();
        //moves us to a starting point
        c.moveTo(x1, y1);
        //where the line ends
        c.lineTo(x, y);
        //width of the line
        c.lineWidth = 10;
        //color of the line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //draws what we listed above
        c.stroke();
        //condition for checking if we reached endpoints
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //this clears the canvas when one line is drawn
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    //disable clicking while win
    disableClick();
    //play win sound
    audio("./media/win.mp3");
    //call the animation to draw a line
    animateLineDrawing();
    //waits 1 second before clearing and reseting game
    setTimeout(function () { clear(); resetGame(); }, 1000);

}
//reseting the game with tie or win
function resetGame() {
    //clearing each square game to blank
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = "";
    }
    //reset the array to empty for next game
    seletedSquares = [];
}