const score = 400

const balance = new Number(100) // guaranteed that it is number
// console.log(balance); // [Number: 100]
// console.log(balance.toString());
// console.log(balance.toFixed(2)); // reduces to 2 decimal places

const otherNumber =  23.8966

// console.log(otherNumber.toPrecision(3)); // returns a string 23.9 upto 3 values

const hundred = 10000000
// console.log(hundred.toLocaleString('en-IN')); // 1,00,00,000


// +++++++++++++++++++ Maths +++++++++++++++++++++++++++



// console.log(Math);

// console.log(Math.abs(-4)); // 4

// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4

console.log(Math.random()); // value between 0 and 1

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min);

