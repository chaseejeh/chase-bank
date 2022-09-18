"use strict";

// Data
const accounts = [
  {
    owner: "Shohanur Rahman",
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    password: 1111,
    movementsDates: [
      "2021-11-18T21:31:17.178Z",
      "2021-12-23T07:42:02.383Z",
      "2022-01-28T09:15:04.904Z",
      "2022-04-01T10:17:24.185Z",
      "2022-05-08T14:11:59.604Z",
      "2022-05-27T17:01:17.194Z",
      "2022-07-11T23:36:17.929Z",
      "2022-07-12T10:51:36.790Z",
    ],
    currency: "EUR",
    locale: "pt-PT", // de-DE
  },
  {
    owner: "Sunerah Binte Ayesha",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    password: 2222,
    movementsDates: [
      "2021-11-01T13:15:33.035Z",
      "2021-11-30T09:48:16.867Z",
      "2021-12-25T06:04:23.907Z",
      "2022-01-25T14:18:46.235Z",
      "2022-02-05T16:33:06.386Z",
      "2022-04-10T14:43:26.374Z",
      "2022-06-25T18:49:59.371Z",
      "2022-07-26T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",
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
function displayMovements(movements, sort = false) {
  containerMovements.innerHTML = "";

  const moves = sort ? movements.slice(0).sort((a, b) => a - b) : movements;

  moves.forEach((move, i) => {
    const type = move > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements-row">
        <div class="movements-type movements-type-${type}">${
      i + 1
    } ${type}(s)</div>
        <div class="movements-value">${move.toFixed(2)}$</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

// Display balance
function displayBalance(account) {
  account.balance = account.movements.reduce((acc, move) => acc + move, 0);
  labelBalance.textContent = `${account.balance.toFixed(2)}$`;
}

// Display summary
function displaySummary(account) {
  const incomes = account.movements
    .filter((move) => move > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}$`;

  const outcomes = account.movements
    .filter((move) => move < 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = `${Math.abs(outcomes).toFixed(2)}$`;

  const interest = account.movements
    .filter((move) => move > 0)
    .map((dep) => (dep * account.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}$`;
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

  if (currentAccount?.password === +inputLoginPassword.value) {
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
  const amount = +inputTransferAmount.value;

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

  const amount = Math.floor(inputLoanAmount.value);

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
    +inputClosePassword.value === currentAccount.password
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

// Sorting
let sorted = false;
btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/*
/////////////////////////////////////////////////////////////
// Converting and checking numbers
/////////////////////////////////////////////////////////////
console.log(23 === 23.0);
// Base 10 - 0 to 9
// Binary base 2 - 0 to 1
console.log(0.1 + 0.2);
console.log(1 / 10);
console.log(10 / 3);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number("23"));
console.log(+"23");

// Parsing
console.log(Number.parseInt("30px", 10)); // Second param is radix
console.log(Number.parseInt("es2022", 10));
console.log(Number.parseInt("  2.5rem   ")); // Number object provides namespace
console.log(parseFloat(" 2.5rem  ")); // Old school way

// Checking if the value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(23 / 0)); // Infinity

// Checking if the value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20px"));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0)); */

/*
/////////////////////////////////////////////////////////////
// Math and rounding
/////////////////////////////////////////////////////////////
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2)); // sqrt
console.log(8 ** (1 / 3)); // cbrt

console.log(Math.max(5, 80, 12, 56, 98, 1, 24, 56));
console.log(Math.max(5, 80, 12, "56", "98", 1, 24, 56));
console.log(Math.max(5, 80, 12, "56px", "98", 1, 24, 56)); // Does not parsing
console.log(Math.min(5, 80, 12, 56, 98, 1, 24, 56));
console.log(Math.min(5, 80, 12, 56, 98, 24, 56));

console.log(Math.PI * Number.parseFloat("10px") ** 2);
console.log(Math.PI * Number.parseFloat("25px") ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(23.1));
console.log(Math.trunc(23.9));
console.log(Math.round(23.1));
console.log(Math.round(23.9));
console.log(Math.ceil(23.1));
console.log(Math.ceil(23.9));
console.log(Math.floor(23.1));
console.log(Math.floor("23.9"));
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding decimals
console.log((2.34).toFixed(1));
console.log(+(2.34).toFixed(1));
console.log(+(2.345345).toFixed(3));
console.log(+(2.345345).toFixed(0));

console.log(Math.sin(0));
console.log(Math.sin(1));
console.log(Math.sin(30));
console.log(Math.cos(0));
console.log(Math.cos(90));
console.log(Math.sin(90)); */
