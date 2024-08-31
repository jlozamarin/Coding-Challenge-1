// Task 1: Variables and Data Types

let employeeName = "Brianna Deaubler";
const employeeID = 012803;
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));



// Task 2: Compound Data Types

let products = ["Matte Lipstick","Liquid Foundation","Eyeshadow Palette"];
const productDetails = {
    name: products,
    price: 75.00,
    inStock: true,
}

console.log(products, productDetails);


// Task 3: Assignment Operators

let accountBalance = 50000;
console.log("Initial balance is: $" + accountBalance);
accountBalance += 2500;
console.log("After adding 250, account balance is: $" + accountBalance); // Output: 52500
accountBalance -= 6000;
console.log("After subtracting 600, account balance is: $" + accountBalance); // Output: 46500
accountBalance *= 1.2;
console.log("After multiplying by 1.2, account balance is: $" + accountBalance.toFixed(2)); // Output: 55800.00
accountBalance /= 2;
console.log("After dividing by 2, account balance is: $" + accountBalance.toFixed(2)); // Output: 27900.00
accountBalance %= 50;
console.log("After modulus operation, account balance is: $" + accountBalance.toFixed(2)); // Output: 0.00


// Task 4: Comparison Operators

let employeeScore1 = 75;
let employeeScore2 = 87;

// Comparison > 
console.log(`Is employeeScore1 greater than employeeScore2? ${employeeScore1 > employeeScore2}`); // Output: false
// Comparison < 
console.log(`Is employeeScore1 less than employeeScore2? ${employeeScore1 < employeeScore2}`); // Output: true
// Comparison >= 
console.log(`Is employeeScore1 greater than or equal to employeeScore2? ${employeeScore1 >= employeeScore2}`); // Output: false
// Comparison <= 
console.log(`Is employeeScore1 less than or equal to employeeScore2? ${employeeScore1 <= employeeScore2}`); // Output: true
// Comparison === 
console.log(`Is employeeScore1 equal to employeeScore2? ${employeeScore1 === employeeScore2}`); // Output: false
// Comparison !== 
console.log(`Is employeeScore1 not equal to employeeScore2? ${employeeScore1 !== employeeScore2}`); // Output: true



// Task 5: Logical Operators

let hasKeyCard = false;
let hasPermission = true; 

// Check access using (&&)
let canAccessConferenceRoom = hasKeyCard && hasPermission;
console.log(`Can access the conference room? ${canAccessCondferenceRoom}`); // Output: false
// Check access using (||)
let canAccessCafeteria = hasKeyCard || hasPermission;
console.log(`Can access the cafeteria? ${canAccessCafeteria}`); // Output: true
// Check access using (!) to reverse a boolean value
let cannotAccessConferenceRoom = !canAccessConferenceRoom;
console.log(`Cannot access the main area? ${cannotAccessMainArea}`); // Output: true
