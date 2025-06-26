const name = "priyansh"
const repoCount = 10

// console.log(name + repoCount + " Value"); // outdated

// string interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('priyansh-hc-com') //automatically key value pairs and have many methods

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // pass index

console.log(gameName.indexOf('y')); // gives index

// read all string method on mdn docs

const newString = gameName.substring(0 , 4) // last not included
console.log(newString);

const anotherString = gameName.slice(-8,6) // can also give neg values

console.log(anotherString);


const newStringOne = "  priyansh  "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes starting and end spaces


const url = "https://priyansh.com/priyansh%20khare"

console.log(url.replace('%20' , '-'));

console.log(url.includes('priy'));

console.log(gameName.split('-'));

// read string documentation on mdn
