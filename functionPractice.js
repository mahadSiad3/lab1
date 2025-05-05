// -------------------------------
// 1. Greet User
// -------------------------------
// Write a function greetUser(name) that returns "Hello, <name>!"
// Example:
// greetUser("Alice"); // "Hello, Alice!"

let names = "john"
function greetUser(name) {
    console.log("hello " + name);
}
greetUser(names)

//  2. Add Two Numbers
// -------------------------------
// Write a function addNumbers(a, b) that returns the sum of two numbers.

let a = 8;
let b = 20;
function addNumbers(num1, num2) {
    console.log(num1 + num2);
}
addNumbers(a, b);

// 3. Check Even or Odd
// -------------------------------
// Write a function isEven(num) that returns true if the number is even, false if odd.

//     Example:
//     isEven(4); -> true
//     isEven(7); -> false


function evenOrOdd(num) {
    if (num % 2 == 0) {
        console.log("this number is even: " + num);
    }
    else {
        console.log("this number is odd: " + num);
    }
}
evenOrOdd(4);

// 4. Find the Larger Number
// -------------------------------
// Write a function maxOfTwo(a, b) that returns the larger of the two numbers.

//     Example:
//     maxOfTwo(10, 20); -> 20

function larger(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is larger than " + num2)
    }
    else if (num2 > num1) {
        console.log(num2 + " is larger than " + num1)
    }
    else {
        console.log(num1 + " is equal to " + num2)

    }
}
larger(7, 7);

// 5. Repeat a Word
// -------------------------------
// Write a function repeatWord(word, times) that returns the word repeated X number of times.

//     Example:
//     repeatWord("hi", 3); -> "hihihi"

function word(word, num) {
    let repeated = "";
    for (let i = 0; i < num; i++) {
        repeated += word;
    }
    console.log(repeated);
}
word("something", 2)

// 6. Convert Celsius to Fahrenheit
// -------------------------------
// Write a function toFahrenheit(celsius) that converts Celsius to Fahrenheit.

//     Formula: F = C * 9/5 + 32

//     Example:
//     toFahrenheit(0); -> 32
//     toFahrenheit(100); -> 212
let f = 0;
function toFahrenheit(num) {
    f = (num * 9 / 5) + 32;
    console.log(f + " is " + num + " in fahrenheit!");
}
toFahrenheit(1);

// 7. Reverse a String
// -------------------------------
// Write a function reverseString(str) that returns the reversed version of the input string.
//     Example:
//     reverseString("hello"); -> "olleh"

let reverse = "";
function reverseString(string) {
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    console.log(reverse);
}
reverseString("hello");