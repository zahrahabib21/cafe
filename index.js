// Part 1: Login & Access Control
const username = prompt("Enter your username:");
const password = prompt("Enter your password:");

let role, securityLevel;

if ((username === "admin" || username === "user") && password === "1234") {
  role = username;
  securityLevel = username === "admin" ? "high" : "low";
} else {
  alert("Incorrect username or password. Access denied.");
  throw new Error("Authentication failed");
}

// Part 2: Coffee Shop Order Calculator
const customerName = prompt("Welcome! What is your name?");
const age = parseInt(prompt("How old are you?"));
const coffeeType = prompt("What coffee would you like? (espresso, latte, cappuccino)").toLowerCase();
const quantity = parseInt(prompt("How many cups would you like?"));

let pricePerCup;

switch (coffeeType) {
  case "espresso":
    pricePerCup = 2.5;
    break;
  case "latte":
    pricePerCup = 3.5;
    break;
  case "cappuccino":
    pricePerCup = 4.0;
    break;
  default:
    alert("Invalid coffee type selected.");
    throw new Error("Invalid coffee type");
}

let originalTotal = quantity * pricePerCup;
let discount = 0;

if (age < 18 || age > 60) {
  discount = originalTotal * 0.10;
}

let finalTotal = originalTotal - discount;

// Part 3: Bill Splitter with Tip
const people = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
const tipPercentage = parseInt(prompt("Enter tip percentage (0, 5, 10, or 15):"));

if (![0, 5, 10, 15].includes(tipPercentage)) {
  alert("Invalid tip percentage.");
  throw new Error("Invalid tip value");
}

const tipAmount = (finalTotal * tipPercentage) / 100;
const totalWithTip = finalTotal + tipAmount;
const amountPerPerson = totalWithTip / people;

// Final Output
alert(`Hello ${customerName}!
You ordered ${quantity} ${coffeeType}(s).
Original total: $${originalTotal.toFixed(2)}
Discount: $${discount.toFixed(2)}
Tip: $${tipAmount.toFixed(2)}
Total with Tip: $${totalWithTip.toFixed(2)}
Split between ${people} people: $${amountPerPerson.toFixed(2)} each`);

