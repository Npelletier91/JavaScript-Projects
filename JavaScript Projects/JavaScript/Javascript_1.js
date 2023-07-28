
//
function Veg_Func() {
    var Veggie = document.getElementById("Input").value
    var veg = Veggie.toLowerCase()
    var Output;
    var String = " is one of my favorites!";
    switch (veg) {
        case "broccoli":
            Output = "Mmm " + "broccoli" + String
            break;
        case "brussels sprouts":
            Output = "Mmm " + "brussels sprouts" + String
            break;
        case "spinach":
            Output = "Mmm " + "spinach" + String
            break;
        case "tomato":
            Output = "Mmm " + "tomato" + String
            break;
            case "mushroom":
            Output = "Mmm " + "mushroom" + String
            break;
            case "eggplant":
            Output = "Mmm " + "eggplant" + String
            break;
        default:
            Output = "Sorry, I don't know that vegetable :("
            break;
    }
    document.getElementById("Output").innerHTML = Output
}


//
function Class_Func() {
    var A = document.getElementsByClassName("class");
    A[0].style.color = "red"
}


//
var C = document.getElementById("canvas1");
var context = C.getContext("2d");
context.beginPath()
context.moveTo(10, 80);
context.lineTo(40, 110);
context.lineTo(160, 110);
context.lineTo(190, 80);
context.moveTo(160, 50);
context.lineTo(190, 80);
context.lineTo(10, 80);
context.lineTo(40, 50);
context.lineTo(160, 50);
context.stroke();


//
{
var D = document.getElementById("canvas2");
var context = D.getContext("2d");
var grd = context.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(0.5, "white");
grd.addColorStop(1, "red");
context.fillStyle = grd;
context.fillRect(0, 0, 200, 150);
}