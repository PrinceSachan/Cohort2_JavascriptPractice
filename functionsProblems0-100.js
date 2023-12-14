console.log("function assingment");

// Question-1:  Write a function that takes a name as an argument and logs a greeting message to the console, like "Hello, [Name]!".

const greet = function(name) {
    console.log("hello" + " " + name);
}

// exmaple usage
greet("Alexa")

// Question-2:  Write a function that takes two parameters, adds them together, and returns the result.

const adder = (n1, n2) => {
    let sum = n1 + n2
    return sum
}

// example usage
console.log(adder(1, 2));

// Question-3:  Write a function that takes the current hour as a parameter and logs a different greeting message based on whether it's morning, afternoon, or evening.

function greetingMsg(currHour) {

    // check for time
    if(currHour > 24) {
        console.log("What!!! are you aline, because you are not putting earth time zone");
    } else if(currHour >= 6 && currHour < 12) {
        console.log("Wake up! you lazy, Good morning");
    } else if(currHour == 12) {
        console.log("Good Noon");
    } else if(currHour > 12 && currHour <= 18) {
        console.log("Good Aftrenoon")
    } else {
        console.log("Good Night!!!")
    }
}

// example usage
greetingMsg(15);

// Question-4:  Write a function that calculates and returns the area of a rectangle. The function should take the length and width as parameters.

// same as datatypes0-100 problem no. 5

// Question-5:  Write a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent.

const expo = (n1, n2) => n1 ** n2

console.log(expo(2, 4));

// Question-6:  Write a function that takes a number as a parameter and returns true if it's a prime number and false otherwise.

function isPrime(n) {

    //check if number is less than 2 is not prime
    if(n < 2) {
        return false;
    }
    for(i = 2; i < Math.sqrt(n); i++) {
        if(n % i ===0) {
            return false;
        }
    }

    // if no divisors were found than it is prime number
    return true;
}

// example usage
console.log(isPrime(11));
console.log(isPrime(16));
console.log(isPrime(41));

// Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.

let golbalVariable = 5;

function adders () {
    
    // define local variable 
    let localVaribale = 10;

    let sum = localVaribale + golbalVariable;
    return sum
}

// example usage

console.log(adders())
// console.log(localVaribale); //output will be an error because localVariable define inside a function we access it golbally. 

// Question-8:  Write a function that returns another function. The inner function should have access to a variable from the outer function.

let outerFuntion = function () {
    // outer function var
    let name = "nexsus";

    // defining another function
    function innerFuntion () {

        // accessing the outerFuntion var
        // inner function var is result
        let result = `hello! ${name}`
        console.log(result);
    }

    return innerFuntion;
}

// example usage
const newFuntion = outerFuntion();
newFuntion();

// Question-9:  Write a recursive function to calculate the factorial of a given number.

function factorial(n) {
    if(n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// example usage

console.log(factorial(5));

// Question-10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then the composed function should be h(x) = f(g(x)).

let firstFunction = function(x) {
    return x + 2;
}

let secondFunction = function(x) {
    return x * 2
}

let thirdFunction = function(x) {
    return firstFunction(secondFunction(x));
}

// example usage
console.log(thirdFunction(10))

