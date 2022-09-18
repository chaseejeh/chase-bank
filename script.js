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

// Sorting
let sorted = false;
btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
