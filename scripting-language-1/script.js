// ******** Assignment 1:  Homework 1, 2, 3 ******** 

// Homework 1: Take 2 numbers and perform DIVISION (Assignment 1 )
let pDivide = document.querySelector('#divide')
let num1 = Number(prompt('Please provide first number'));
let num2 = Number(prompt('Please provide second number'));

let division = num1 / num2

console.log(`Division of the numbers is ${division}`);

// Homework 2: Take 5 numbers from User and perform substraction, multiplication

let substraction = num1 - num2;
console.log(`Substraction of the numbers is ${substraction}`);

let multiplication = num1 - num2;
console.log(`Multiplication of the numbers is ${multiplication}`);

alert(`
    Division: ${division}
    Substreaction: ${substraction}
    Multiplication: ${multiplication}
`);

// Homework 3: Take Name, address, phone number, email-id from User and display them on the screen
let name = prompt('Please provide your name');
let address = prompt('Please provide your address');
let phoneNumber = prompt('Please provide your phone number');
let emailId = prompt('Please provide your email');

alert(`
    Name: ${name}
    Address: ${address}
    Phone Number: ${phoneNumber}
    Email Id: ${emailId}
`);



// ******** Assignment 2:  Homework 1, 2, 3 ******** 

// Homework 1: Take radius from the user.
// Calculate circumference: 2 * PIE * radius
// Calculate surface area: PIE(3.14) * radius * radius
// Display Circumference and surface area.
let radius = Number(prompt("Enter radius:"));
let circumference = 2 * 3.14 * radius;
let surfaceArea = 3.14 * radius * radius;
alert(`
    Circumference: ${circumference} 
    Surface Area: ${surfaceArea}
`);


let A = Number(prompt('Enter number A'))
let B = Number(prompt('Enter number B'))
let C = Number(prompt('Enter number C'))

if(A > B && C){
    console.log('A is greater')
} else if(B > A && C){
    console.log('B is greater')
}else if(C > A && B){
    console.log('C is greater')
}