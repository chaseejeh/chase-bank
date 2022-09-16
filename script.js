"use strict";

// Data
const accounts = [
  {
    owner: "Shohanur Rahman",
    movements: [250, 400, -500, 3000, -700, -150, 50, 1500],
    interestRate: 1.5, // %
    password: 1111,
  },
  {
    owner: "Sunerah Binte Ayesha",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.3,
    password: 2222,
  },
  {
    owner: "Afrin Tumpa",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1.2,
    password: 3333,
  },
  {
    owner: "Nibir Ahmed",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 0.8,
    password: 4444,
  },
  {
    owner: "Sumaiya Shanta",
    movements: [2000, 400, -100, -890, -2250, -1000, 2500, -300],
    interestRate: 1.4,
    password: 5555,
  },
];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance-value");
const labelSumIn = document.querySelector(".summary-value-in");
const labelSumOut = document.querySelector(".summary-value-out");
const labelSumInterest = document.querySelector(".summary-value-interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login-btn");
const btnTransfer = document.querySelector(".form-btn-transfer");
const btnLoan = document.querySelector(".form-btn-loan");
const btnClose = document.querySelector(".form-btn-close");
const btnSort = document.querySelector(".btn-sort");

const inputLoginUsername = document.querySelector(".login-input-username");
const inputLoginPassword = document.querySelector(".login-input-password");
const inputTransferTo = document.querySelector(".form-input-to");
const inputTransferAmount = document.querySelector(".form-input-amount");
const inputLoanAmount = document.querySelector(".form-input-loan-amount");
const inputCloseUsername = document.querySelector(".form-input-username");
const inputClosePassword = document.querySelector(".form-input-password");

// Display movements
function displayMovements(movements) {
  containerMovements.innerHTML = "";
  movements.forEach((move, i) => {
    const type = move > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements-row">
        <div class="movements-type movements-type-${type}">${
      i + 1
    } ${type}(s)</div>
        <div class="movements-value">${move}$</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}
displayMovements(accounts[0].movements);

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// Lectures
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/* // Slice
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2)); // does not mutate the original array
console.log(arr);
console.log(arr.slice(2, 4)); // end parameter is not included in the output
console.log(arr.slice(-2));
console.log(arr.slice(-1)); // last element
console.log(arr.slice(1, -2));
console.log(arr.slice()); // copying whole array
console.log([...arr]); // same as above

// Splice
// console.log(arr.splice(2)); // does mutate the original array
arr.splice(-1); // remove the last element
console.log(arr);
arr.splice(1, 2); // last element is the delete count
console.log(arr);

// Reverse
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse()); // does mutate the original array
console.log(arr2);

// Concat
const letters = arr.concat(arr2); // does not mutate the original array
console.log(letters);
console.log([...arr, ...arr2]);

// Join
console.log(letters.join(" + "));

// Push, unshift, pop, shift, indexOf and includes */

/* // At method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0)); // ES2022
console.log(arr[arr.length - 1]); // last element
console.log(arr.slice(-1)[0]); // last element
console.log(arr.at(-1)); //  last element
console.log(arr.at(-2));
console.log("Shohan".at(0));
console.log("Shohan".at(-1)); */

/* // forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`Movement ${i + 1}: You deposited ${movement}`);
  else console.log(`Movement ${i + 1}: You withdrew: ${Math.abs(movement)}`);
}

console.log("------- FOREACH -------");
movements.forEach(function (movement, index, array) {
  if (movement > 0)
    console.log(`Movement ${index + 1}: You deposited: ${movement}`);
  else
    console.log(`Movement ${index + 1}: You withdrew: ${Math.abs(movement)}`);
});

// (element, index, entire array)
// forEach does not support continue and beak statements

movements.forEach((move, i, arr) => console.log(`${i + 1}: ${move}`)); */

/* // forEach with maps and sets
// Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// (value, key, map)

// Set
const currenciesUnique = new Set(["USD", "BDT", "USD", "EUR", "GBP", "BDT"]);
console.log(currenciesUnique);

currenciesUnique.forEach((value, _value, map) =>
  console.log(`${value}: ${value}`)
);

// Sets do not have any index
// _value is unneccessary variable

const girls = new Set(["Tumpa", "Ayesha", "Sabrina", "Priya"]);

girls.forEach((girl) => console.log(girl)); */

/////////////////////////////////////////////////////////////
// Map method (returns a new array)
/////////////////////////////////////////////////////////////
// (value, index, array)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;
const movementsUSD = movements.map((move, index, arr) =>
  Math.trunc(move * euroToUsd)
);
console.log(movementsUSD);

const robbers = [1400, 200, 900, 400, 50, 1200];
const robbersMap = robbers.map((money) => money / 2);
console.log(robbersMap);
