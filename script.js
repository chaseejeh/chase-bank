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

// Create usernames
function createUsernames(accounts) {
  accounts.forEach((account) => {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
  });
}
createUsernames(accounts);

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

// Display balance
function displayBalance(account) {
  account.balance = account.movements.reduce((acc, move) => acc + move, 0);
  labelBalance.textContent = `${account.balance}$`;
}

// Display summary
function displaySummary(account) {
  const incomes = account.movements
    .filter((move) => move > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${incomes}$`;

  const outcomes = account.movements
    .filter((move) => move < 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}$`;

  const interest = account.movements
    .filter((move) => move > 0)
    .map((dep) => (dep * account.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}$`;
}

// Update UI
function updateUI(currentAccount) {
  // Display movements
  displayMovements(currentAccount.movements);
  // Display balance
  displayBalance(currentAccount);
  // Display summary
  displaySummary(currentAccount);
}

// Implementing login
let currentAccount;
btnLogin.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form from submitting
  currentAccount = accounts.find(
    (account) => account.username === inputLoginUsername.value
  );

  if (currentAccount?.password === Number(inputLoginPassword.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    labelWelcome.style.color = "#444";
    containerApp.style.opacity = 1;
    // Update UI
    updateUI(currentAccount);
  } else {
    // Hide UI and display warning message
    labelWelcome.textContent = "Incorrect user or password!";
    labelWelcome.style.color = "tomato";
    containerApp.style.opacity = 0;
  }
  // Clear input fields
  inputLoginUsername.value = inputLoginPassword.value = "";
  inputLoginPassword.blur();
});

// Implementing transfers
btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();

  const receiverAccount = accounts.find(
    (account) => account.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);

  // Clear input fields
  inputTransferTo.value = inputTransferAmount.value = "";
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    receiverAccount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
    // Display success message
    labelWelcome.textContent = "Transfer successful!";
    labelWelcome.style.color = "mediumturquoise";
  } else {
    // Display warning message
    labelWelcome.textContent = "Invalid transfer!";
    labelWelcome.style.color = "tomato";
  }
});

// Implementing loan
btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((move) => move >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
    // Display message
    labelWelcome.textContent = "Loan request granted!";
    labelWelcome.style.color = "mediumturquoise";
  } else {
    // Display warning message
    labelWelcome.textContent = "Amount not granted!";
    labelWelcome.style.color = "tomato";
  }
  // Clear field
  inputLoanAmount.value = "";
});

// Close account
btnClose.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePassword.value) === currentAccount.password
  ) {
    const index = accounts.findIndex(
      (account) => account.username === currentAccount.username
    );
    // Delete account
    accounts.splice(index, 1);
    // Hide UI and display warning message
    labelWelcome.textContent = "Account deleted!";
    labelWelcome.style.color = "mediumturquoise";
    containerApp.style.opacity = 0;
  } else {
    // Display warning message
    labelWelcome.textContent = "Action failed!";
    labelWelcome.style.color = "tomato";
  }
  // Clear fields
  inputCloseUsername.value = inputClosePassword.value = "";
  inputClosePassword.blur();
});
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

/* 
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
console.log(robbersMap); */

/*
/////////////////////////////////////////////////////////////
// Filter
/////////////////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Deposits
// (element, index, entire array)
const deposits = movements.filter((move) => move > 0); // Returns a new array based on the condition we passed
console.log(deposits);

// Starts with letter 'S'
const friends = [
  "Tumpa",
  "Ayesha",
  "Shohan",
  "Sabrina",
  "Rimi",
  "Maisha",
  "Sumaiya",
  "Suraiya",
  "Nibir",
  "Sarah",
];

const friendsWithLetterS = friends.filter((friend) => friend.startsWith("S"));
console.log(friendsWithLetterS);

// Withdrawals
const withdrawals = movements.filter((move) => move < 0);
console.log(withdrawals);

// Foods
const foods = [
  "Burger",
  "Pizza",
  "Pasta",
  "Noodles",
  "Ramen",
  "Fajita",
  "French Fries",
];

const foodsWithP = foods.filter((food) => food.startsWith("P"));
console.log(foodsWithP); */

/*
/////////////////////////////////////////////////////////////
// Reduce
/////////////////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// ((accumulator, element, index, entire array), 0)
// reduce method takes two parameters and the last param is the default value of the accumulator
const balance = movements.reduce((acc, el) => acc + el, 0);
console.log(balance);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const multi = arr.reduce((acc, el) => acc * el, 1);
console.log(multi);

const arr2 = [3, 7, , 9, 12, 34, 5, 56, 7, 87, 32];
const add = arr2.reduce((acc, el) => acc + el, 0);
console.log(add);

// Maximum
const max = movements.reduce(
  (acc, move) => (acc > move ? acc : move),
  movements[0]
);
console.log(max);

// Minimum
const min = movements.reduce(
  (acc, move) => (acc < move ? acc : move),
  movements[0]
);
console.log(min); */

/*
/////////////////////////////////////////////////////////////
// Chaninig methods (Data transformation pipeline)
/////////////////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const total = movements
  .filter((move) => move > 0)
  .map((move) => move * 1.1)
  .reduce((acc, move) => acc + move, 0);
console.log(Math.trunc(total)); */

/*
/////////////////////////////////////////////////////////////
// Find method (retrive one element based on the condition)
/////////////////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find((move) => move < 0);
console.log(firstWithdrawal);
// Returns first element's (not array) value from the array

console.log(accounts);

const account = accounts.find((account) => account.owner === "Afrin Tumpa");
console.log(account);

const username = accounts.find((account) => account.username === "sr");
console.log(username); */

/*
/////////////////////////////////////////////////////////////
// Find index (returns the first index which is satisfied the codition we provided)
/////////////////////////////////////////////////////////////
const arr = [23, 33, 44, 56, 12, 32];
const firstIndex = arr.findIndex((el) => el >= 50);
console.log(firstIndex); */

/*
/////////////////////////////////////////////////////////////
// Some and every method
/////////////////////////////////////////////////////////////
const arr = [2, 3, 4, 5, 1, 3, -2, 9, 43, -23];
console.log(arr);
// Equality
console.log(arr.includes(-2));

// Condition
const anyPositive = arr.some((el) => el > 40); // If the any element fullfills the condition, the some method returns true
console.log(anyPositive);

// Every
// If every elements fullfill the condition, the every method returns true
const arr2 = [1, 3, 4, 5, 67, 23];
console.log(arr.every((el) => el > 0));
console.log(arr2.every((el) => el > 0)); */
