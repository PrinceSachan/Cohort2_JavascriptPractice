console.log("Array Methods");

// push(element) - Instance add the specific element at the end of an array and returns new length of array

// Example Usage

let arr = ["abc", "xyz", "asd"];
let arr2 = arr.push("sbc", "namee");
console.log(arr2);
console.log(arr);

// Create a function that takes an array and a variable number of arguments and pushes each argument into the array.
function pushToArray(arr3, ...n) {
    for(let i = 0; i < n.length; i++) {
        arr3.push(n[i])
    }
}

const myArr = [1, 2, 3];
pushToArray(myArr, 4, 5, 6);

console.log(myArr);

// Pop() - instances removes the last element from an array and returns that element.

// Example usage
let arr4 = ["name", "place", "age", "gender"];
let arr5 = arr4.pop()

console.log("popped element:", arr5);
console.log("Modified array:", arr4);

// Implement a custom version of the pop method. Your function should remove the last element from an array and return it. 

function customPop(arr) {

    if(arr.length === 0) {
        console.error("Error: your array is empty");
        return undefined;
    }

    const poppedElement = arr.pop()

    return poppedElement;
}

let arr6 = [11, 12, 13, 14, 15]
let poppedElement = customPop(arr6)

console.log("Popped Element:", poppedElement);
console.log("Modified array:", arr6);

// shift() - instances removes the first element from an array and returns that removed element. This method changes the length of the array.

// example usage
let arr7 = ["prince", 'saurabh', 'ashish', 'pal', 'nawo', 'new'];
let arr8 = arr7.shift();

console.log('shifted element:',arr8);
console.log('modified array:', arr7);

// unshift() - instances adds the specified elements to the beginning of an array and returns the new length of the array.

// exmaple
let arr9 = ['cgi', 'l&t', 'apple'];
let arr0 = arr9.unshift('nokia', 'oneplus');

console.log(arr0);
console.log(arr9);

// push(end) & unshift(start) add the element in array and return length of the element

// pop(end) & shift(start) remove the element from the array and returned the removed element

// both methods modified the original array

// includes() - instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

let array = [21, 54, 98, 33, 31];
let array0 = array.includes(98);

console.log(array0);
console.log(array.includes(21, 0)) //2nd parameter is formIndex
console.log(array.includes(21, 6)) //if formIndex <= arr.length it'll return true otherwise it return false.

// join() - instances creates and "#returns a new string" by concatenating all of the elements in this array, separated by commas or a specified separator string. 

let array1 = ["alex", "grey", 'devid'];
let array2 = array1.join();

console.log(array2);

let array3 = array1.join("-");
console.log(array3)

// reverse() - instances reverses an array and returns the reference to the same array, it changes the original array.

let array4 = [1, 2, 3, 4, 5];
let array5 = array4.reverse();

console.log(array5);

// forEach() - instances executes a provided function once for each array element. a good alternative of for loop

// example usage
let array6 = [1, 2, 3];
array6.forEach((item) => console.log(item));

// You are given an array of numbers. Write a function doubleArray that takes this array as input and returns a new array where each element is doubled.
let array7 = [5, 10, 15, 20];

function doubleArray(arr) {

    // define a empty array
    let array = [];

    arr.forEach((item) => {
        // double the element of the given array
        let element = 2 * item;
        array.push(element);

    })

    // return array doubled array
    return array;

}

let array8 = doubleArray(array7);
console.log(array8);

// Write a function sumOfSquares that takes an array of numbers as input and returns the sum of the squares of each number.

function sumOfSquares(arr) {
    // declare sum vairable
    let sum = 0

    arr.forEach((item) => {
        // calculate the square of each element
        let square = item ** 2;

        // add each square to sum
        sum += square;
    })

    return sum;
}

let squareOfEachElement = sumOfSquares(array4);
console.log(squareOfEachElement);

// Write a function filterWordsByLength that takes an array of words and a minimum length as input, 
// and returns a new array containing only the words that are equal to or longer than the specified length.

function filterWordsByLength(arr, minLength) {
    // define a empty array
    let newArr = [];

    arr.forEach((item) => {
        if(item.length >= minLength) {

            // filtered array
            newArr.push(item);
        }
    })

    // return new array with filtered word
    return newArr;
}

let minLength = 4
let filteredArray = filterWordsByLength(arr7, 4);
console.log(filteredArray);

// Write a function countOddNumbers that takes an array of numbers as input and returns the count of odd numbers in the array.

function countOddNumbers(arr) {
    let oddNumbers = 0

    arr.forEach((number) => {
        if(number % 2 !== 0) {
            oddNumbers ++;
        }
    })

    return oddNumbers;
}

console.log(countOddNumbers(array4));
console.log(countOddNumbers(array7));

// sort() - Instances sorts the elements of an array and returns the reference to the same array, now sorted.

// example usage 

const months = ['June', 'April', 'Feb', 'Sep', 'Nov'];
console.log(months.sort());

const numberArr = [13, 1, 93, 45, 6, 87, 1000];

console.log(numberArr.sort()); //[1, 1000, 13, 45, 6, 87, 93] because sort uses lexicographic ordering where first digit '1' is smaller than '9'.

const ascendOrder = numberArr.sort((a, b) => a - b);
console.log(ascendOrder);

const descendOrder = numberArr.sort((a, b) => b - a);
console.log(descendOrder);

// Write a function sortByAge that takes an array of objects representing people (each with a name and age property) and returns a new array with the people sorted by their age in ascending order.

const peopleArray = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

const sortByAge = peopleArray.sort((a, b) => a.age - b.age);
console.log(sortByAge);

// Given an array of intervals (represented as pairs of start and end values), write a function mergeIntervals that merges overlapping intervals and returns the merged intervals.


function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    
    /*sorting the intervals*/
    intervals.sort((a, b) => a[0] - b[0]);
    // newArray for storing the sorted intervals
    const mergedIntervals = [intervals[0]];
    
    // iterate through sorted intervals, starting from 2nd intervals
    for (let i = 1; i < intervals.length; i++) {
        // Check whether the current interval overlaps with the last merged interval.
        const currentInterval = intervals[i];
        const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
        
        if (currentInterval[0] <= lastMergedInterval[1]) {
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
            } else {
                mergedIntervals.push(currentInterval);
            }
        }
        
        return mergedIntervals;
}
    
const inputIntervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
];
console.log(mergeIntervals(inputIntervals));

// map() - map used to transform an array, but it won't modiified the original array

// example usage
const mapArray = [1, 2, 17, 9, 10];
function double(x) {
    return x * 2;
}

const map1 = mapArray.map(double);
console.log(map1);

const map2 = mapArray.map(function triple(x) {
    return x * 3;
});
console.log(map2);

const toBinary = mapArray.map((x) => x.toString(2));
console.log(toBinary);

// filter() - filtered used for to filtered out element of array based on callback function, and returns new array.

const filter1 = mapArray.filter(x => x % 2);
console.log(filter1);

const filter2 = mapArray.filter(x => x > 5);
console.log(filter2);

// reduce() - instances executes a user-supplied "reducer" callback function on each element of the array, in order, 
// passing in the return value from the calculation on the preceding element. 
// The final result of running the reducer across all elements of the array is a single value.

// reduce(callbackFun, initialValue); if initial value is not defined then it take arr[0] is as initial value

const initialValue = 0
const reduced = mapArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, initialValue);

console.log(reduced);

const findMax = mapArray.reduce((acc, curr) => {
    if(curr > acc) {
       acc = curr; 
    }
    return acc;
});
console.log(findMax);

const users = [
    {name: "Prince", age: 26},
    {name: "Sangu", age: 25},
    {name: "Nawo", age: 24},
    {name: "Vivek", age: 30},
    {name: "Aryan", age: 30},
    {name: "Faizan", age: 26},
]

const output = users.reduce(function (acc, curr) {
    if(acc[curr.age]) {
        acc[curr.age] =++ acc[curr.age]
    } else {
        acc[curr.age] = 1
    }
    return acc;
}, {})
console.log(output);