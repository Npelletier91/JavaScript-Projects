
document.write(typeof "hello world")    // testing different JavaScript operators
document.write("<br>")
document.write("10" + 5)                // testing coercion JavaScript operators
document.write("<br>")
document.write(2E310)                   // testing floating point JavaScript operators
document.write("<br>")
document.write(-5E310)                  // testing floating point JavaScript operators
document.write("<br>")
document.write(10 > 4)                  // testing Boolean Logic JavaScript operators
document.write("<br>")
document.write(10 < 4)                  // testing Boolean Logic JavaScript operators
document.write("<br>")

console.log(2 + 2)                      // testing console log methods
console.log(10 < 4)                     // testing console log methods

console.log(10 == 10)                   // testing double equal signs
console.log(5 == 10)                    // testing double equal signs

X = 50                                  // adding variables to test triple equal signs
Y = 50
A = "50"
B = "40"
C = 40

console.log(X === Y)                    // testing triple equal signs                   
console.log(X === B)                    // testing triple equal signs
console.log(X === A)                    // testing triple equal signs
console.log(X === C)                    // testing triple equal signs

document.write(10 > 5 && 10 > 2)        // testing AND operators
document.write("<br>")
document.write(10 < 5 || 10 > 5)        // testing OR operators
document.write("<br>")

document.write(!(10 < 5 || 10 > 5))     // testing NOT operators


function My_Function() {                                // testing inifity JavaScript outputs
    document.getElementById("Test").innerHTML = 0 / 0;
}

function My_Function1() {                               // testing NaN JavaScript outputs
    document.getElementById("Test1").innerHTML = isNaN('this is a string');
}

function My_Function2() {                               // testing NaN JavaScript outputs
    document.getElementById("Test2").innerHTML = isNaN('99');
}

