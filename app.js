// 1- Write a program that allow to user enter number then print it

let userInput1 = window.prompt('Add a number');

userInput1 !== undefined ? console.log(userInput1) : null;


//2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

let userInput2 = window.prompt('add a number to check if / by 3 and 4', 12)

let convertedInput2 = userInput2 !== undefined ? Number(userInput2) : null;
if (convertedInput2) {
    if (convertedInput2 % 3 === 0 && convertedInput2 % 4 === 0) {
        console.log('YES')
    }
    else {
        console.log('NO!')
    }
}

//3- Write a program that allows the user to insert 2 integers then print the max
let userInput3 = window.prompt('add first number', 4);
let userInput4 = window.prompt('add first number', 9);

if (userInput3 && userInput4) {
    if (Number(userInput3) > Number(userInput4)) {
        console.log(userInput3)
    } else {
        console.log(userInput4)
    }
}

//4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
let userInput5 = window.prompt('add num to check if + or -', -1);

if (userInput5) {
    if (Number(userInput5) > 0) {
        console.log('Positive')
    } else {
        console.log('Negative')
    }
}

//5-Write a program that take 3 integers from user then print the max element and the min element.
let userInput6 = window.prompt('add first number', 4);
let userInput7 = window.prompt('add sec number', 9);
let userInput8 = window.prompt('add third number', 19);

if (userInput6 && userInput7 && userInput8) {
    if (Number(userInput6) < Number(userInput7) &&Number(userInput6) < Number(userInput8) ) {
        console.log(userInput6)
    } 
    if (Number(userInput7) < Number(userInput6) &&Number(userInput7) < Number(userInput6) ) {
        console.log(userInput8)
    } 
    if (Number(userInput8) < Number(userInput6) &&Number(userInput8) < Number(userInput7) ) {
        console.log(userInput8)
    } 
}

// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd
let userInput9 = window.prompt('add num to check if even or odd', 1);

if (userInput5) {
    if (Number(userInput5) %2 === 0) {
        console.log('EVEN')
    } else {
        console.log('ODD')
    }
}

// 8-Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
let userInput10 = window.prompt(`add a letter man to check if vowel -_-;`, 'o');
if (userInput10) {
    let value = String(userInput10).toLocaleLowerCase();
    switch (userInput10) {
        case 'a':
            console.log('VOWEL')
            break;
        case 'e':
            console.log('VOWEL')
            break;
        case 'i':
            console.log('VOWEL')
            break;
        case 'o':
            console.log('VOWEL')
            break;
        case 'u':
            console.log('VOWEL')
            break;
        default:
            console.log('lol, not a vowel')
            break;
    }
}


// 9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number
// Example Input 5

const userInput11 = window.prompt(`add a #`, 5);
if (userInput11) {
    for (let i = 1; i <= userInput11; i++){
        console.log(i)
    }
}

// 10- Write a program that allows user to insert integer then print a multiplication table up to 12.
const userInput12 = window.prompt(`add a #`, 5);
if (userInput12) {
    for (let i = 1; i <= 12; i++){
        console.log(userInput12 * i);
    }
}

// 11- Write a program that allows to user to insert number then print all even numbers between 1 to this number
const userInput13 = window.prompt(`add a #`, 5);
if (userInput13) {
    for (let i = 1; i <= userInput12; i++){
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

// 12- Write a program that take two integers then print the power
const userInput14 = window.prompt(`add a #`, 5);
const userInput15 = window.prompt(`add a #`, 2);

if (userInput13 && userInput14) {
    console.log(Math.pow(Number(userInput14), Number(userInput15)))
}

// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.
const userInput16 = window.prompt(`add a #`, 5);
const userInput17 = window.prompt(`add a #`, 10);
const userInput18 = window.prompt(`add a #`, 22);
const userInput19 = window.prompt(`add a #`, 12);
const userInput20 = window.prompt(`add a #`, 2);
if (userInput16 && userInput17 && userInput18 && userInput19 && userInput20) {
    let fullMark = 25;
    let sum = Number(userInput16) + Number(userInput17) + Number(userInput18) + Number(userInput19) + Number(userInput20);
    sum && console.log('total is : ', sum)
    
    if (sum) {
        let avg = sum / 5;
        avg && console.log(avg);
        let percentage = sum / 25 * 100;
        console.log('percentage is ', percentage, '%');
    }

}

// 13-Write a program to input month number and print number of days in that month.
// +
// 15- Write a program to print total number of days in month

let userInput21 = window.prompt(`add a #`, 2);
if (userInput21) {
    let value = Number(userInput21);
        switch (value) {
            case 1:
                console.log('30')
                break;
            case 2:
                console.log('28')
                break;
            case 3:
                console.log('31')
                break;
            case 4:
                console.log('30')
                break;
            case 5:
                console.log('31')
                break;
            case 6:
                console.log('31')
                break;
            case 7:
                console.log('30')
                break;
            case 8:
                console.log('31')
                break;
            case 9:
                console.log('30')
                break;
            case 10:
                console.log('31')
                break;
            case 11:
                console.log('30')
                break;
            case 12:
                console.log('31')
                break;
            default:
                console.log('lol, not a month')
                break;
        }
    }
    

    // 16- Write a program to check whether an alphabet is vowel or consonant
    let userInput22 = window.prompt(`add a letter man to check if vowel -_-;`, 'o');
if (userInput22) {
    let value = String(userInput22).toLocaleLowerCase();
    switch (userInput22) {
        case 'a':
            console.log('VOWEL')
            break;
        case 'e':
            console.log('VOWEL')
            break;
        case 'i':
            console.log('VOWEL')
            break;
        case 'o':
            console.log('VOWEL')
            break;
        case 'u':
            console.log('VOWEL')
            break;
        default:
            console.log('lol, not a vowel')
            break;
    }
}


// 17- Write a program to find maximum between two numbers
let userInput23 = window.prompt(`add a #`, 4);
let userInput24 = window.prompt(`add a #`, 2);
if (userInput23 && userInput24) {
    switch (userInput23) {
        case Number(userInput23) > Number(userInput24):
            console.log(userInput23)
            break;
        default:
            console.log(userInput24)
            break;
    }
}

//18- Write a program to check whether a number is even or odd

let userInput25 = window.prompt(`add a #`, 2);
if (userInput25) {
    let value = Number(userInput25);
    switch (value) {
        case value % 2 === 0:
            console.log('even')
            break;
        default:
            console.log('odd')
            break;
    }
}

// 19- Write a program to check whether a number is positive or negative or zero
let userInput26 = window.prompt(`add a #`, 2);
if (userInput26) {
    let value = Number(userInput26);
    switch (value) {
        case value  === 0:
            console.log('0')
            break;
        case value  > 0:
            console.log('+')
            break;
        default:
            console.log('-')
            break;
    }
}

// 20- Write a program to create Simple Calculator
const sum =  (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const multiply = (a, b) => {
    return a * b;
}
let userInput27 = window.prompt(`add a #`, 2);
let userInput28 = window.prompt(`add a #`, 2);
let userInput29 = window.prompt(`choose operation + , - or *`, '+');
if (userInput27 && userInput28 && userInput29) {
    let value1 = Number(userInput27)
    let value2 = Number(userInput28)
    switch (userInput29) {
        case '+':
            console.log(sum(value1, value2))
            break;
        case '-':
            console.log(sub(value1, value2))
            break;
        default:
            console.log(multiply(value2, value1))
            break;
    }
}