const name = '  John Dev New  ';
const arr = [1, 2, 3, 4, 5];

// slice(StartPoint, endPoint) - slice method works on both array and string, and it does not incldue the endPoint and return the sliced part of the array or string.
const sliced = name.slice(0, 7);
console.log(sliced);

const slicedArr = arr.slice(0, 3);
console.log(slicedArr);

// substring(fromWhichIndex, lengthTill) - substring method works on  string, and returns the part of this string from the start index up to and excluding the end index
const subStr = name.substring(2, 7);
console.log(subStr);

// replace(oldString, newString) - replace method works on string, and it returns new string with replaced value.
const replacedStr = name.replace("Dev", "Fuddu");
console.log(replacedStr);

// split() - split method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.(The pattern describing where each split should occur)
const splitStr = name.split(" ");
console.log(splitStr);

// const splitStrs = splitStr.join(",").split();
// console.log(splitStrs)

// trim(string) - trim method of String values removes whitespace from both ends of the string.

const trimStr = name.trim();
console.log(trimStr);