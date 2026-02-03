let number = 10; // Assign any number here

if (number > 0) {
    console.log("The number is positive."); // Output for positive
} else if (number < 0) {
    console.log("The number is negative."); // Output for negative
} else {
    console.log("The number is zero."); // Output for zero
}let day = 3; // Change this number to test different days

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}// --- For Loop ---
for (let i = 1; i <= 5; i++) {
    console.log("For Loop:", i);
}

// --- While Loop ---
let count = 1;
while (count <= 5) {
    console.log("While Loop:", count);
    count++;
}

// --- Do...While Loop ---
let k = 1;
do {
    console.log("Do-While Loop:", k);
    k++;
} while (k <= 5);// --- Break Example ---
console.log("Testing Break:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // This stops the loop entirely when i hits 3
    }
    console.log(i);
}

// --- Continue Example ---
console.log("Testing Continue:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // This skips number 3 but keeps going to 4 and 5
    }
    console.log(i);
}// --- Step 6: Scope ---

let globalVar = "I'm global!"; // Declared outside

function scopeExample() {
    let localVar = "I'm local!"; // Declared inside
    
    console.log("Inside function:", globalVar); // Can see global
    console.log("Inside function:", localVar);  // Can see local
}

// Run the function to see the logs
scopeExample();

console.log("Outside function:", globalVar); // This works
// console.log("Outside function:", localVar); // This would cause an error!