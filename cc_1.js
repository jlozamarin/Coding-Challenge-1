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

let accountBalance = 5000; // intiial balance
console.log("Initial balance is: $" + accountBalance); // Output: 5000
accountBalance += 250;
console.log("After adding 250, account balance is: $" + accountBalance); // Output: 5250
accountBalance -= 600;
console.log("After subtracting 600, account balance is: $" + accountBalance); // Output: 4650
accountBalance *= 1.2;
console.log("After multiplying by 1.2, account balance is: $" + accountBalance.toFixed(2)); // Output: 5580.00
accountBalance /= 2;
console.log("After dividing by 2, account balance is: $" + accountBalance.toFixed(2)); // Output: 2790.00
accountBalance %= 50;
console.log("After modulus operation, account balance is: $" + accountBalance.toFixed(2)); // Output: 40.00
