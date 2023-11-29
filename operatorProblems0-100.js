console.log("Operator Assignmet Problems Solution");

// Problem 1: Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).

// This problem is repeated here again, check the solution in datatypes0-100 (Question-3)

// // Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.

let x = 20;

console.log(x);

x += 10;

console.log(x);

x -= 10;

console.log(x);

x *= 10;

console.log(x);

x /= 10;

console.log(x);

x %= 10;

console.log(x);

let y = 4
y **= 3;

console.log(y);

// Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.

function compare(a, b) {

    if(a == b) {
        console.log("Equal")
    } else if ((a > b) ? console.log("A is greater than B") : console.log("A is less than B"));
}

//example usage 
compare(10,10)

// Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement. 

// The three main logical operators are && (logical AND), || (logical OR), and ! (logical NOT).

let a = 10;
let b = 20

if (a > 0 && b > 0) {
    console.log("Both are postive numbers");
} else if(a > 0 || b > 0) {
    console.log("At least one is positive");
}

// Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.

// Total 7 type of bitwise operator 
// Bitwise (AND(&), OR(|), XOR(^), NOT(~), Left shift(<<), Right shift(>>), Unsigned Right shift(>>>))

let abc = 5;
let xyz = 10;

console.log(abc & xyz);
console.log(abc | xyz);
console.log(abc ^ xyz);
console.log(~xyz);
console.log(abc << 3);
console.log(abc >> 3);
console.log(abc >>> 3);

// Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.

let ternary = (abc > xyz) ? console.log("abc is greater is xyz") : console.log("xyz is greater than abc");


// Problem 7: Write a JavaScript program to demonstrate type operators on different data types.

// Null is primitive data type but type of NUll is object

console.log(typeof 10);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof null);

let variable
console.log(typeof variable);

let arr = [1, 2, 3]
console.log(arr instanceof Array);

let obj = {name : "Prince"};
console.log(obj instanceof Object);

let check = function(a) {return a};
console.log(check instanceof Function);

// Problem 8: Write a JavaScript program to use string operators to concatenate two strings.

function concatenateTwoString(str1, str2) {

    //1st method
    let result1 = str1 + str2;
    console.log(result1);

    //2nd method using concat
    let result2= str1.concat(str2);
    console.log(result2);

    //3rd method using template literals
    let result3 = `${str1}${str2}`;
    console.log(result3);

    // 4th method using "+="
    let result4 = str1 += str2;
    console.log(result4);
}

// exmaple usage
concatenateTwoString("hello", "world");

// Problem 9: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.

// Same as problem no. 7

// Problem 10: Write a JavaScript program to use the in operator to check if a property exists in an object.

let car = {
    name: "Audi",
    model: "Q7",
    year: "2023"
}

console.log('name' in car);

delete car.model;
if('model' in car === false) {
    car.model = "A6";
}

console.log(car.model);
console.log('year' in car);
console.log('mod' in car);
