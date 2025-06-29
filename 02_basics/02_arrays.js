const marvel_heroes = ["thor", "iron man", "spiderman"]

const dc_heroes = ["superman","batman", "joker"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes); // array will take the second array as a whole element


// console.log(marvel_heroes.concat(dc_heroes));
// concat gives a new array and doesnt change existing

const allHeroes = [...marvel_heroes, ...dc_heroes]

console.log(allHeroes);
// works same as concat but you can merge multiple arrays

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usableArray = another_array.flat(2)
//concat all the arrays inside array and flaten them, takes depth as parameter about which depth should you concat, you should give exact depth but can also give infinity

console.log(usableArray);

console.log(Array.isArray("Priyansh")); // returns whether the given is array or not

console.log(Array.from("Priyansh")); // converts into array


console.log(Array.from({name:"Priyansh"})); // interesting case, returns empty array as it doesnt know whether to create array of keys or values


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3)); // returns a new array from set of elements