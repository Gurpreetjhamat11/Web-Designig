// HOMEWORK 4:

let age = Number(prompt("Enter your age:"));

if (age >= 1 && age <= 17) {
  alert("You are not a major yet.");
}

if (age >= 18 && age <= 49) {
  alert("You are major, but not senior yet.");
}

if (age >= 50 && age <= 64) {
  alert("You are senior, but not yet retired.");
}

// Homework 5:
// Display "Bonjour" 25 times to the user by using while loop.
// start -> 1 and end -> 25

// let i = 1;
// while (i <= 25) {
//     alert("Bonjour");
//     i = i + 1;
// }

// Homework 1: Create a function having name `computeSubstraction` which should take 4 numbers as parameters &
// then perform the subtration of 4 three numbers and display it to the user.
// ****** Code starts here ******
function computeSubstraction(x, y, z, k) {
  return x - y - z - k;
}

console.log("Substraction:> ", computeSubstraction(100, 10, 30, 2));
// ****** Code ends here ******

// Homework 2: Create a function having name `computeMultiplication` which should take 4 numbers as parameters &
// then perform the multiplication of 4 three numbers and display it to the user.
// ****** Code starts here ******
function computeMultiplication(x, y, z, k) {
  return x * y * z * k;
}

console.log("Multiplication:> ", computeMultiplication(100, 10, 30, 2));
// ****** Code ends here ******

// HOMEWORK 1: Create an empty array of type string having a name 'LaptopCompanies'.
//            * At index 0: Samsung
//            * At index 1: Apple
//            * At index 2: Google
//            * At index 3: Lenovo
//            * At index 4: LG
//            * Calculate the length of an array.
//            * console.log its length.
//            * Add Dell & Sony to LaptopCompanies array.
//            * console.log the LaptopCompanies array.
//            * Remove Google from the array.
//            * console.log the LaptopCompanies array.

// ************ HOMEWORK 1 code begins here ************
let laptopCompanies = ["Samsung", "Apple", "Google", "Lenovo", "LG"];
let arrayLength = laptopCompanies.length;
console.log(`Length of array is:> ${arrayLength}`);

laptopCompanies.push("Dell", "Sony");

var removeGoogle = laptopCompanies.indexOf("Google");
laptopCompanies.splice(removeGoogle, 1);
console.log(laptopCompanies);
// ************ HOMEWORK 1 ends begins here ************

// HOMEWORK 2: Create an obj having name mobileCompanies
//             |-----------------------|
//             |     KEY      |  VALUE |
//             |  apple       |    2   |
//             |  samsung     |    5   |
//             |  motorola    |    2   |
//             |  google      |    3   |
//             |-----------------------|
//  * console.log the mobileCompanies object.
//  * console.log  no. of motorola mobiles.
//  * remove apple key.
//  * console.log the mobileCompanies object.

// ************ HOMEWORK 2 code begins here ************
let mobileCompanies = {
  apple: 2,
  samsung: 5,
  motorola: 2,
  google: 3,
};

console.log(mobileCompanies);
console.log("Number of motorola mobiles is:> ", mobileCompanies.motorola);
delete mobileCompanies.apple;

console.log(mobileCompanies);

// ************ HOMEWORK 2 ends begins here ************
