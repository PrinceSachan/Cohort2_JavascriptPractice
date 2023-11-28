console.log("Data Type assignment Practice");

//Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.

function convertKilometersIntoMetersAndCentimeters(kilometers) {

    //1km = 1000meter
    const meter = kilometers * 1000;

    //1km = 1000meter = 100000centimeter
    const centimeter = meter * 100
    
    //returning value in meters and centimeters
    return{meter, centimeter};
}

//Example usage
let kilometers = 5;
const result1 = convertKilometersIntoMetersAndCentimeters(kilometers);

console.log(`${kilometers} kilometers is equal to ${result1.meter} meters`);
console.log(`${kilometers} kilometers is equal to ${result1.centimeter} centimeter`);

// Question-2:    WAP to input radius of a circle and log the area of circle.

function areaOfCircle(radius) {

    // Area of circle 
    const area = Math.PI * radius * radius;

    // returning the area of circle
    return area;
}

// Example usage
let radius = 7;
const result2 = areaOfCircle(radius);

console.log(result2);

// Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.

function arithmeticOperations(num1, num2) {

    // Addition
    const sum = num1 + num2;

    // Subtraction
    const subtraction = num1 - num2;

    // Multiplication
    const multiplication = num1 * num2;
    
    // division 
    const divide = num1 / num2;

    // Exponentiation
    const expo = num1 ** 2;
    const expo2 = num2 ** 3;

    // Modulus(Remainder)
    const mod = num1 % num2;

    // Increment
    const incre = ++ num1 ;

    // Decrement
    const decre = -- num2;

    // return the results
    return{
        sum,
        subtraction,
        multiplication,
        divide,
        expo,
        expo2,
        incre,
        mod,
        decre
    };
}

// example usage
let num1 = 10;
let num2 = 5;
const result3 = arithmeticOperations(num1, num2);

console.log(`Addition: ${result3.sum}`);
console.log(`Subtraction: ${result3.subtraction}`);
console.log(`Multiplication: ${result3.multiplication}`);
console.log(`Division: ${result3.divide}`);
console.log(`Exponentiation of num1: ${result3.expo}`);
console.log(`Exponentiation of num2: ${result3.expo2}`);
console.log(`Modulus: ${result3.mod}`);
console.log(`Increment of num1: ${result3.incre}`);
console.log(`Decrement of num2: ${result3.decre}`);

// Question-4:    WAP to calculate total marks in two subject and then calculate percentage.

const totalAndPercentageOfTwoSubjects = function(subject1, subject2) {

    //total of two subjects;
    const total = subject1 + subject2;

    //Percentage of two subject
    const percentage = (total / 200) * 100;

    return {
        total,
        percentage
    };
}

// Example usage
let subject1 = 65;
let subject2 = 85;
const result4 = totalAndPercentageOfTwoSubjects(subject1, subject2);

console.log(`Total of both subjects is ${result4.total}`);
console.log(`Percentage of both subjects is ${result4.percentage}`);

// Question-5:    WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.

const calculateAreaAndPerimeterOfRectangle = function(length, breath) {

    // area of rectangle
    const area = length * breath;

    // perimeter of rectangle
    const perimeter = 2 * (length + breath);

    // returning the results
    return {
        area,
        perimeter
    };
}

// example usage

let length = 45;
let breath = 30;
const result5 = calculateAreaAndPerimeterOfRectangle(length, breath);

console.log(`Area of Rectangle: ${result5.area}`);
console.log(`Perimeter of Rectangle: ${result5.perimeter}`);

// Question-6:    WAP to input n numbers and log the average of those number.

const averageOfNnumbers = function(numbers) {

    //check the totalNumbers
    const totalNumbers = numbers.length;
    if(totalNumbers == 0) {
        return ('No number to calculate the average');
    }

    //Calculate the sum of the numbers
    const sum = numbers.reduce((acc,curr) =>{
        return acc + curr;
    }, 0);

    //Calculate the average of given numbes
    const avg = sum / totalNumbers;

    //returning the average
    return avg;
}

// example usage

let numbers = [10, 20, 30, 40];
const result6 = averageOfNnumbers(numbers);

console.log(`Average of given n numbers: ${result6}`)

// Question-7: WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.

const conversionOfDistance = function(distance) {

    //1kilometer = 39370inches
    const inches = distance * 39370.1;
    const roundInches = Math.round(inches);

    //1kilometer = 3280.84feet
    const feet = distance * 3280.84;
    const roundFeets = Math.round(feet);

    const metersAndCentimeters = convertKilometersIntoMetersAndCentimeters(distance);

    return{
        roundInches,
        roundFeets,
        metersAndCentimeters
    }
}

// Example usage
let distanceBetweenCities = 15;
const result7 = conversionOfDistance(distanceBetweenCities);

console.log(`Distance in meter ${result7.metersAndCentimeters.meter}`);
console.log(`Distance in centimeters ${result7.metersAndCentimeters.centimeter}`);
console.log(`Distance in inches ${result7.roundInches}`);
console.log(`Distance in feets ${result7.roundFeets}`);

// Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.

const temperatureConversion = (fahernheit) => {
    
    //fahernheit into centigrade
    const centigrade = (fahernheit - 32) * 5/9;
    const roundCentigrade = Math.round(centigrade);

    //return the result
    return roundCentigrade;
} 

// Example Usage

let fahernheit = 104;
const result8 = temperatureConversion(fahernheit);

console.log(`Fahrenheit to centigrade: ${result8}`);

// Question-9:    Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.

const calculatePrices = (quantity, rate) => {

    //Calculate amount
    const amount = quantity * rate;

    //Calculate the discount of 10%
    const discount = (quantity * rate) * 10/100;

    //Amount after discount
    const discountedAmount = amount - discount;

    //return the results
    return {amount, discount, discountedAmount};
};

// Example Usage
let rate = 100;
let quantity = 20;
const result9 = calculatePrices(quantity, rate);

console.log(`Amount: ${result9.amount}`);
console.log(`Discount: ${result9.discount}`);
console.log(`Amount after discount: ${result9.discountedAmount}`);


// Question-10:    Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.

const calculateSimpleInterest = (amount, interest, years) => {

    //calculate simple interest
    const simpleInterest = (amount * interest * years) /100;

    // returning the result
    return simpleInterest;
}

// Example Usage

let amount = 1000;
let interest = 10;
let years = 2;
const result10 = calculateSimpleInterest(amount, interest, years);

console.log(`Simple Interest: ${result10}`)