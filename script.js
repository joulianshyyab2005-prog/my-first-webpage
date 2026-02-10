 // Part 1: Declaring and Invoking Functions
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Student")); 

// Part 2: Working with Parameters and Returning Values
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log("The sum is: " + addNumbers(5, 10));

// Part 3: Function Scope
let x = 10; // Global variable

function changeValue() {
    let x = 20; // Local variable with same name
    console.log("Inside function local x:", x);
}

changeValue();
console.log("Outside function global x:", x);

// Part 4: Closures
function outerFunction() {
    let count = 0; 
    return function() {
        count++; 
        return count;
    };
}

const updateCount = outerFunction();
console.log("Closure count 1:", updateCount());
console.log("Closure count 2:", updateCount());