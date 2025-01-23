// 'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements = function(movements,sort = false){
//   containerMovements.innerHTML = ' ';
// const sortMovements = sort ? sortMovements.slice().sort((a,b) => a > b) : movements; //descending order here
//    movements.forEach(function(mov,i){
//    const type = mov > 0 ? "deposit" : "withdrawal";
//   const html = `
//         <div class="movements__row">
//           <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
//           <div class="movements__value">${mov}</div>
//         </div>
//   `;
// containerMovements.insertAdjacentHTML('afterbegin',html)
// })
// }


// //Print current balance
// const calDisplayBalance = function(acc){
//  acc.balance = acc.movements.reduce((acc, mov) =>
//     acc + mov,0);
//   labelBalance.textContent = `${acc.balance}EUR`;
// };


// const calDisplaySummary = function(acc){
//   const incomes = acc.movements.filter((mov, i) => mov > 0).reduce((acc, mov) => acc + mov,0);
//   labelSumIn.textContent = `${incomes}€`;
  
//   const outcomes = acc.movements.filter((mov, i) => mov <0).reduce((acc, mov) => acc +mov, 0);
//   labelSumOut.textContent = `${Math.abs(outcomes)}€`;

//   const interest = acc.movements.filter(mov => mov > 0).map(deposit => (deposit *acc.interestRate)/ 100).filter((int, i, arr)=>{
//     return int >=1;
//   })
//   .reduce((acc, int)=> acc + int, 0);
//   labelSumInterest.textContent = `${Math.abs(interest)}€`;
// } 


// //creating username of Account holder
// const createUserNames = function(accs){
// accs.forEach(function(acc)
// {
// acc.username = acc.owner.toLowerCase().split(" ").map(name => name[0]).join("")
// });
// }
// createUserNames(accounts);

// //Implementing Login
// let currentAccount;
// btnLogin.addEventListener('click', function(e){
//          e.preventDefault();

// //login for current username and pin

// currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
// console.log(currentAccount);

// if(currentAccount?.pin === Number(inputLoginPin.value))
// {
//   labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(" ")[0]}`;
// }else{
//   containerApp.textContent = "Wrong Entry"
//   containerApp.style.opacity = 0;
// }
// containerApp.style.opacity = 100;

// //username and pin should disappear after login and focus/cursor should be gone
// inputLoginUsername.value = inputLoginPin.value = " ";
// inputLoginPin.blur();

// displayMovements(currentAccount.movements);
// calDisplayBalance(currentAccount);
// calDisplaySummary(currentAccount)
// });

// //Transfer money
// btnTransfer.addEventListener('click',function(e){
//   e.preventDefault();

//   const amount = Number(inputTransferAmount.value);
//   const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
//   // inputTransferTo = inputTransferAmount = " ";
//   console.log(amount,receiverAcc);
// if(amount > 0 && receiverAcc && currentAccount.balance >= amount  && receiverAcc?.username!== currentAccount.username){
//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);
//     console.log("transfer valid");
//   } 
//   displayMovements(currentAccount.movements);
//   calDisplayBalance(currentAccount);
//   calDisplaySummary(currentAccount)
// })

// //Close an account
// btnClose.addEventListener("click",function(e){
//     e.preventDefault();
// if (currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value))
//   {
//     const index = accounts.findIndex(acc => acc.username === inputCloseUsername.value);
//     accounts.splice(index,1);
//     containerApp.style.opacity = 0;
//   }
//   inputCloseUsername.value = inputClosePin.value = " ";
// })

// //Loan request
// btnLoan.addEventListener("click",function(e){
//    e.preventDefault();
// const amount  = Number(inputLoanAmount.value);
//  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount*0.1))
//   {
//     currentAccount.movements.push(amount)
//     displayMovements(currentAccount.movements);
//     calDisplayBalance(currentAccount);
//     calDisplaySummary(currentAccount)
//   }
// })

// //Need overall balance of all accounts together, single value
// const overAllBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0)
// console.log(overAllBalance);
// // USing flatMap
// const overAllBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0)
// console.log(overAllBalance2);
// //Btn for sort
// let sorted = false; //need to create state variable sorted so that when sort btn is clicked again the balance sheet goes back to normal
// btnSort.addEventListener('click',function(e){
// e.preventDefault();
// displayMovements(currentAccount.movements,!sorted);
// sorted = !sorted; // when clicked again it should return back to normal
// });
  









// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES
// /////////////////////////////////////////////////
// /////////////ARRAY METHODS///////////////////////

// // const arr = ['a','b','c','d','e','f','g','h'];
// // const arr1 = ['a','b','c','d','e','f'];
// // const arr2 = ['a','b','c','d','e','f'];

// // console.log(arr.splice(2,4));
// // console.log(arr1.slice(1,3));
// // console.log(arr.reverse());
// // console.log(arr.concat(arr1));
// // console.log(arr2.join('-'));

// //////////////////////at/////////////////
// // const arr = ['a','b','c','d','e','f'];
// // console.log(arr.at(-1));
// // console.log('shilpa'.at(2)); //also works on string

// ////////////////Array forEach/////////////////////////////

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // movements.forEach(function(movement, index, array){
// //   if(movement > 0){
// //     console.log(`Movement ${index + 1} : You have  deposited ${movement}`)
// //   }else{
// //     console.log(`Movement ${index + 1} : You have withdrawn ${movement}`)
// //   }
// // });

// //////////////////forEach with Maps and Sets///////////////////////
//  //MAP
// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// // currencies.forEach(function(value, key, map){
// //   console.log(`You can see  ${key} : ${value} `)
// // }
// // )
// //Set
// // const currencies1 = new Set([ 'USD', 'United States dollar', 'Euro','USD']);
// // console.log(currencies1);
// // currencies1.forEach(function(value, value1, set){ //Value and key are same.
// //   console.log(`You can see  ${value} : ${value1} `);
// // }
// // )

// ///////////////////MAP Method//////////////////////////////////
// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//  // const euroToUSD = 1.1;
// // const convertUSD = movements.map(function(mov){
// //    return mov * euroToUSD;
// //   })
// //   console.log(movements);
// //   console.log(convertUSD);


// //do it with Arrow function
// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // const euroToUSD = 1.1;
// // const convertUSD = movements.map(mov =>{
// //  return mov * euroToUSD;
// // })
// // console.log(convertUSD);



// // const movementAccount1 = account1.movements.map(function(mov,i){
// //   return `Movement ${i + 1} : you have ${mov > 0 ? "deposit" : " withdrawal"} ${Math.abs(mov)}`
// // })
// // console.log(movementAccount1)

// //////////////////////////////////////FILTER////////////////////////////////////////////////////////////////
// // const Movement =  [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
// //Filter money which is more than 0 .i.e. deposits
// // const Deposits = Movement.filter(function(mov){
// //   return mov > 0
// // });
// // console.log(Deposits);

// // //Filter money which is less than 0 .i.e. withdrawals
// // const Withdrawals = Movement.filter(function(mov){
// //   return mov < 0 ;
// // });
// // console.log(Withdrawals);

// //////////////////////////////////////REDUCE////////////////////////////////////////////////////////////
// // const Movement =  [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
// // const balance = Movement.reduce(function(acc,curr,i,arr){
// //   console.log(`Iteration ${i +1} : ${acc} `)
// //     return acc + curr;
// // },0)
// // console.log(balance)

// //EX 2
// //find max value from array
// // const Movement =  [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
// // const max = Movement.reduce((acc,mov) =>{
// //   if (acc > mov)
// //     return acc
// //   else return mov;
// // },Movement[0])
// // console.log(max);

// ////////////////////////////FIND METHOD////////////////////////////////////////////////
// //EX1
// // const Movement =  [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
// // const firstWithdrawal = Movement.find(mov => mov < 0)
// // console.log(firstWithdrawal);

// //EX 2
// // const account = accounts.find(acc => acc.owner === "Jessica Davis")
// // console.log(account);

// //EX 2 Using for of loop
// // const account12 = function(acc){
// //  for(let account of acc){
// //     if(account.owner === "Jessica Davis"){
// //       console.log(account)
// //     }
// //   }
// // }
// // account12(accounts)
// /////////////////////////////Some//////////////////////////////
// // const Movement =  [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
// // const anyDeposits = Movement.some(mov => mov < 0)
// // console.log(anyDeposits);
// /////////////////////////////Every///////////////////////////////
// // const Movement =  [5000, 3400, 150, 790, 210, 1000, 8500]
// // //check if all movement is positive i.e. deposit
// // const deposit = Movement.every(mov => mov >0)
// // console.log(deposit)
// ////////////////////////////FLAT/////////////////////////////////
// // const arr = [[1,2,3],[4,5,6],[7,8,9]]
// // console.log(arr.flat());
// ///////////////////////////////FLAT MAP////////////////////
// // const arr = [[[1,2],3],[[4,5],6],[7,8,9]]
// // console.log(arr.flat(2));

//////////////////////////////////////////Sorting array////////////////////////////////

//strings
// const owners = ["Shilpa","Kajal","Dinesh","sunita"]
// console.log(owners.sort());

//Number
// const Movement =  [-5000, -3400, 150, 790, 210, 1000, 8500]
//return > 0,a,b : (-5000 is a, -3400 is b)
//return < 0, b,a : (-5000 is a, -3400 is b)
// Movement.sort((a,b) =>{
    //(Asecending order)
//     if(a > b)
//         return 1;(this is acsending order)
//     if(a < b)
//         return -1;
// });
// console.log(Movement)
    //(descending order)
//     if(a > b)
//         return -1;(this is descending order)
//     if(a < b)
//         return 1;
// });
// console.log(Movement)
////////////////////////Ways to create and fill array//////////////////////

//create empty array 
// const x = new Array(7);
// console.log(x);

//fill array
// const arr = [1,2,3,4,5,6,7,8,9]
// arr.fill(23,2,5); //23 will start with 2nd index , 23 will end with 4th index :doesnt not include last index i.e. 5th position will not include
// console.log(arr);

//Array.from
//Ex1
// const y = Array.from({length : 7}, () => 7 ) 
// console.log(y);
//Ex2
// const z = Array.from({length : 7}, (currentNum, index) => index+1)
// console.log(z)


//////////////////////////Array practice method///////////////////////////////////////////////////////

//1. How much has been deposited in bank
// const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum,cur) => sum + cur , 0)
// console.log(bankDepositSum);

//2. how many deposit in bank with atleast 1000 $
// const deposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;
// console.log(deposits1000)

//using reduce we can do above problem as well
// const deposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => cur >= 1000? count + 1 : count ,0);
//  console.log(deposits1000);

//3.create new object for sum of deposit and withdrawal
// const sums = accounts.flatMap(acc => acc.movements).reduce((accumulator,curVal)=> {
//   accumulator[curVal >0 ?'deposits': 'withdrawals'] += curVal
//    return accumulator;
// }, {deposits: 0, withdrawals : 0});
// console.log(sums);

//4.convert string into title case(capital letter)
//this is a nice title = This Is a Nice Title => like this

// const Title = function(value)
// { 
//   const execeptions = ['a','an','the','but','or','on', 'in', 'with','and'];
//   const titleCase = value.toLowerCase().split(' ').map(word => execeptions.includes(word) ? word : word[0].toUpperCase()+ word.slice(1)).join(" ");
//   return titleCase;
// }
// console.log(Title("this is a nice title"));
// console.log(Title("this is a LONG title but not too long"));
// console.log(Title("and here is another title with an EXAMPLE"));




