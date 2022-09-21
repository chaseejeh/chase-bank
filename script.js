"use strict";

/////////////////////////////////////////////////////////////
// Data
/////////////////////////////////////////////////////////////

const accounts = [
  {
    owner: "Shohanur Rahman",
    movements: [2500, 500, -750, 1200, 3200, -1500, 500, 1200, -1750, 1800],
    interestRate: 1.5, // %
    password: 1234,
    movementsDates: [
      "2021-11-18T21:31:17.178Z",
      "2021-12-23T07:42:02.383Z",
      "2022-01-28T09:15:04.904Z",
      "2022-04-01T10:17:24.185Z",
      "2022-07-08T14:11:59.604Z",
      "2022-09-10T17:01:17.194Z",
      "2022-09-12T23:36:17.929Z",
      "2022-09-15T12:51:31.398Z",
      "2022-09-19T06:41:26.190Z",
      "2022-09-21T08:11:36.678Z",
    ],
    currency: "USD",
    locale: "en-US",
  },
  {
    owner: "Sunerah Binte Ayesha",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -300, 1500, -1850],
    interestRate: 1.3, // %
    password: 5678,
    movementsDates: [
      "2021-12-11T21:31:17.671Z",
      "2021-12-27T07:42:02.184Z",
      "2022-01-05T09:15:04.805Z",
      "2022-02-14T10:17:24.687Z",
      "2022-03-12T14:11:59.203Z",
      "2022-05-16T17:01:17.392Z",
      "2022-08-10T23:36:17.522Z",
      "2022-09-03T12:51:31.491Z",
      "2022-09-18T06:41:26.394Z",
      "2022-09-21T08:11:36.276Z",
    ],
    currency: "EUR",
    locale: "en-GB",
  },
];

/////////////////////////////////////////////////////////////
// Elements
/////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////
// Create usernames
/////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////
// Days calculation
/////////////////////////////////////////////////////////////

function formatMovementDate(date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPasssed = calcDaysPassed(new Date(), date);

  if (daysPasssed === 0) return "Today";
  if (daysPasssed === 1) return "Yesterday";
  if (daysPasssed <= 7) return `${daysPasssed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
}

/////////////////////////////////////////////////////////////
// Formatting currencies
/////////////////////////////////////////////////////////////

function formatCurrency(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
}

/////////////////////////////////////////////////////////////
// Display movements
/////////////////////////////////////////////////////////////

function displayMovements(account, sort = false) {
  containerMovements.innerHTML = "";

  const moves = sort
    ? account.movements.slice(0).sort((a, b) => a - b)
    : account.movements;

  moves.forEach((move, i) => {
    const type = move > 0 ? "deposit" : "withdrawal";

    const date = new Date(account.movementsDates[i]);
    const displayDate = formatMovementDate(date, account.locale);

    const formattedMove = formatCurrency(
      move,
      account.locale,
      account.currency
    );

    const html = `
    <div class="movements-row">
        <div class="movements-type movements-type-${type}">${
      i + 1
    } ${type}</div>
        <div class="movements-date">${displayDate}</div>
        <div class="movements-value">${formattedMove}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

/////////////////////////////////////////////////////////////
// Display balance
/////////////////////////////////////////////////////////////

function displayBalance(account) {
  account.balance = account.movements.reduce((acc, move) => acc + move, 0);

  labelBalance.textContent = formatCurrency(
    account.balance,
    account.locale,
    account.currency
  );
}

/////////////////////////////////////////////////////////////
// Display summary
/////////////////////////////////////////////////////////////

function displaySummary(account) {
  const incomes = account.movements
    .filter((move) => move > 0)
    .reduce((acc, move) => acc + move, 0);

  labelSumIn.textContent = formatCurrency(
    incomes,
    account.locale,
    account.currency
  );

  const outcomes = account.movements
    .filter((move) => move < 0)
    .reduce((acc, move) => acc + move, 0);

  labelSumOut.textContent = formatCurrency(
    Math.abs(outcomes),
    account.locale,
    account.currency
  );

  const interest = account.movements
    .filter((move) => move > 0)
    .map((dep) => (dep * account.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = formatCurrency(
    interest,
    account.locale,
    account.currency
  );
}

/////////////////////////////////////////////////////////////
// Update UI
/////////////////////////////////////////////////////////////

function updateUI(currentAccount) {
  // Display movements
  displayMovements(currentAccount);
  // Display balance
  displayBalance(currentAccount);
  // Display summary
  displaySummary(currentAccount);
}

/////////////////////////////////////////////////////////////
// Implementing login
/////////////////////////////////////////////////////////////

let currentAccount, timer;

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

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

    // Create current date and time
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Timer
    if (timer) clearInterval(timer);
    timer = logOutTimer();

    // Update UI
    updateUI(currentAccount);
  } else {
    // Hide UI and display warning message
    labelWelcome.textContent = "Incorrect user or password!";
    labelWelcome.style.color = "#f3442a";
    containerApp.style.opacity = 0;
  }

  // Clear input fields
  inputLoginUsername.value = inputLoginPassword.value = "";
  inputLoginPassword.blur();
});

/////////////////////////////////////////////////////////////
// Implementing transfers
/////////////////////////////////////////////////////////////

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
    setTimeout(() => {
      // Doing the transfer
      currentAccount.movements.push(-amount);
      receiverAccount.movements.push(amount);

      // Add transfer date
      currentAccount.movementsDates.push(new Date().toISOString());
      receiverAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Display success message
      labelWelcome.textContent = "Transfer successful!";
      labelWelcome.style.color = "#00b79f";
    }, 5000);
  } else {
    setTimeout(() => {
      // Display warning message
      labelWelcome.textContent = "Invalid transfer!";
      labelWelcome.style.color = "#f3442a";
    }, 5000);
  }

  // Reset the timer
  clearInterval(timer);
  timer = logOutTimer();
});

/////////////////////////////////////////////////////////////
// Implementing loan
/////////////////////////////////////////////////////////////

btnLoan.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((move) => move >= amount * 0.1)
  ) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Display message
      labelWelcome.textContent = "Loan request granted!";
      labelWelcome.style.color = "#00b79f";
    }, 5000);
  } else {
    setTimeout(() => {
      // Display warning message
      labelWelcome.textContent = "Amount not granted!";
      labelWelcome.style.color = "#f3442a";
    }, 5000);
  }

  // Clear field
  inputLoanAmount.value = "";

  // Reset the timer
  clearInterval(timer);
  timer = logOutTimer();
});

/////////////////////////////////////////////////////////////
// Close account
/////////////////////////////////////////////////////////////

btnClose.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePassword.value === currentAccount.password
  ) {
    const index = accounts.findIndex(
      (account) => account.username === currentAccount.username
    );
    setTimeout(() => {
      // Delete account
      accounts.splice(index, 1);

      // Hide UI and display warning message
      labelWelcome.textContent = "Account deleted!";
      labelWelcome.style.color = "#00b79f";
      containerApp.style.opacity = 0;
    }, 3000);
  } else {
    setTimeout(() => {
      // Display warning message
      labelWelcome.textContent = "Action failed!";
      labelWelcome.style.color = "#f3442a";
    }, 3000);
  }

  // Clear fields
  inputCloseUsername.value = inputClosePassword.value = "";
  inputClosePassword.blur();
});

/////////////////////////////////////////////////////////////
// Sorting
/////////////////////////////////////////////////////////////

let sorted = false;

btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////////////////
// Logout timer
/////////////////////////////////////////////////////////////

function logOutTimer() {
  labelTimer.textContent = "";

  // Set timer
  let time = 180;

  const tickTick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time
    labelTimer.textContent = `${min}:${sec}`;

    // When we reach 0 second, stop timer and log out
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "You have been logged out!";
      labelWelcome.style.color = "#f3442a";
      containerApp.style.opacity = 0;
    }

    // Decrease 1s
    time--;
  };

  tickTick();

  // Call the timer every second
  timer = setInterval(tickTick, 1000);

  return timer;
}

/////////////////////////////////////////////////////////////
// Copyright year
/////////////////////////////////////////////////////////////

document.querySelector(".copyright-year").textContent =
  new Date().getFullYear();
