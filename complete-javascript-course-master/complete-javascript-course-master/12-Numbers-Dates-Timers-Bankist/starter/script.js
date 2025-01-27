'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function(date,locale){
  const calDaysPassed = (date1, date2) => 
    Math.round(Maths.abs(date2 - date1)/(1000*60*60*24));
  const daysPassed = calDaysPassed(new Date() , dateReceived)
  console.log(daysPassed);

  if(daysPassed === 0)
    return `Today`;
  if(daysPassed === 1)
    return `Yesterday`;
  if(daysPassed <= 7)
    return `${daysPassed} days ago`;
  // else {
  //   // const day = `${date.getDate()}`.padStart(2,0);
  //   // const month = `${date.getMonth() + 1}`.padStart(2,0); //month is 0 based
  //   // const year = date.getFullYear();
  //   // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
  // }

}
const displayMovements = function (acc, sort = false) {
containerMovements.innerHTML = '';
  const combineMovementsAndDates = acc.movements.map((mov,i) => 
    ({movement: mov, movementDate: acc.movementsDates.at(i)}))
    if(sort) {
      combineMovementsAndDates.sort((a,b)=> a.movement-b.movement)
    }

  combineMovementsAndDates.forEach(function (obj, i) {
    const {movement, movementDate} = obj;
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementDate[i]);
    const displayDate = formatMovementDate(date,acc.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
     <div class="movements__date">${displayDate}</div> 
        <div class="movements__value">${formatMov}€</div> 
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers

let currentAccount;


//Fake always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;
/////////////////////////////////////



btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    
    //create current date and time
    const now = new Date();
    const options = {
  hour: 'numeric',
  minute: 'numeric',
  day:'numeric',
  month:'numeric', //can use long as well, it will display month name
  year:'numeric', // can use 2-digit as well, it will display year in 2 digits
  // weekday: 'long'
}
// const locale = navigator.language; // will display Date and time in locale language.
// console.log(locale) //this locale is coming from browser
// labelDate.textContent = new Intl.DateTimeFormat('en-IN',locale).format(now); 
labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale,options).format(now);//this locale is specified in account json
  //   const day = `${now.getDate()}`.padStart(2,0);
  //   const month = `${now.getMonth() + 1}`.padStart(2,0); //month is 0 based
  //   const year = now.getFullYear();
  //   const hour = `${now.getHours()}`.padStart(2,0);
  //   const min = `${now.getMinutes()}`.padStart(2,0);
  //  labelDate.textContent =`${day}/${month}/${year}, ${hour}:${min}`;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  //Rounding loan amount(loan amount should not be in decimal hence used Math.floor)
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    //Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());
    

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

//Colour every second row of movement orage
labelBalance.addEventListener('click',function(){
  [...document.querySelectorAll('.movements__row')].forEach(function(row  , i ){
    if(i % 2 === 0) 
    row.style.backgroundColor = 'orange'
    });
});


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//Converting and checking numbers
// console.log(Number.parseInt('20px'));
// console.log(Number.parseFloat(' 2.5rem '));
// console.log(Number.isNaN('20px'));
// console.log(Number.isNaN(Number('20px')));
// console.log(Number.isFinite(Number('20px')));
// console.log(Number.isInteger(Number(20)));
// console.log(Number.isInteger((23/0))); //Infinite 

// //Math and Rounding
// console.log(Math.sqrt(25));
// console.log(25 **(1/2)); //Square root
// console.log(Math.max(5,'18','34',9))
// console.log(Math.min(5,'18','34',9))
// console.log((Math.random() * 6)+1); // random between 1 and 6
//Hello
// //Rounding decimals
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.73333).toFixed(2));

//Remainder Operator
// console.log(5 % 2)

//Whether number is even or not
// const n = prompt("Please enter a number to know whether it is even or odd")
// const isEven = function(n){
//   if(n % 2 === 0){
//     console.log(`${n} is even`)
// }else{
//   console.log(`${n} is odd`)
// }
// }
//  isEven(n)

//Create Dates
// const  now  = new Date();
// console.log(now)
// console.log(new Date('2 Aug 2024 17:42'));
// console.log(account1.movementsDates[0]);
// console.log(new Date (2024,10,33)) //10 is nov as date starts with 0 month

// //Working with dates
// const future = new Date (2037,10,19,15,23);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());
// future.setFullYear(2040)
// console.log(future);

//Create a function that returns 2 dates and return number od dates that passed between them
// const calDaysPassed = (date1,date2) => {
//   const days = (date2 - date1)/(1000*60*60*24)
//   console.log(days)
// }
// calDaysPassed(new Date(2023,10,12) , new Date (2024,10,12))



