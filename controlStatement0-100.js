console.log('Control Statement Practice');

// Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."

let x = 9;

if(x > 10) {
    console.log("x is greater than 10");
} else {
    console.log("x is not greater than 10");
}

// Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).

let age = 16;

let checker = (age >= 18) ? console.log("You are illegible for drive a car") : console.log("You are not illegible for drive a car");

// Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).

let score = 90;

if(score > 100) {
    console.log("You put invalid scroe");
} else if(score >= 90 && score <= 100) {
    console.log("You have got A grade");
} else if(score >= 80 && score <= 89) {
    console.log("You have got B grade");
} else if(score >= 70 && score <= 79) {
    console.log("You have got C grade");
} else if(score >=50 && score <=69) {
    console.log("Room for improvement");
}else {
    console.log("Fail")
}

// Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).

let currHour = 0;

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

// Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).

let dayNumber = 8;

switch (dayNumber) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("You giving invalid input")
        break;
}

// Question-6:   WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).

let monthNumber = 7;

switch (monthNumber) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Feburary")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;
    default:
        console.log("You giving invalid input")
        break;
}

// Question-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.

const fruit = "Mango";

switch (fruit) {
    case "Apple":
        console.log("Apple");
        break;
    case "Banana":
        console.log("Banana");
        break;
    case "Grape":
        console.log("Grape");
        break;
    default:
        console.log("Invalid fruit")
        break;
}

// Question-8:   WAP to categorize a given temperature into "low," "medium," or "high" ranges.

const temperature = 53;

if(temperature >= 0 && temperature <= 30) {
    console.log("Low Temperature");
}else if(temperature >= 31 && temperature <= 60) {
    console.log("Medium Temperature");
}else if(temperature >= 61 && temperature <= 100) {
    console.log("High Temperature");
}else {
    console.log("You are not giving valid input range, the range of temperature lies between 0-100");
}

// Question-9:   WAP that classifies a number as positive, negative, even, or odd.

const number = 32;

if (number >= 0) {
    console.log("Number is positive");
    if (number % 2 == 0) {
        console.log("Number is Even")
    } else if (number % 2 != 0) {
        console.log("Number is odd")
    }
} else if (number <0) {
    console.log("Number is negative")
    if (number % 2 == 0) {
        console.log("Number is Even")
    } else if (number % 2 != 0) {
        console.log("Number is odd")
    }
}

// Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."

const username = "Prince";

if (username.length >= 6 && username.length <= 15) {
    console.log("Username accepted");
} else if(username.length < 6 || username.length > 15) {
    console.log("Username not accepted")
}