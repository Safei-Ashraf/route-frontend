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
