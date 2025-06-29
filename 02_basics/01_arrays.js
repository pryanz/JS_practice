// array

const myArr = [0,1,2,3,4,5,6]
const myHeroes = ['spiderman', 'superman']

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);


//Array Methods

// myArr.push(7) // adds value
// console.log(myArr); //mrArr has changed
// myArr.pop() //removes last value of array

// myArr.unshift(0) //insert the number in start of array

// myArr.shift() // removes starting value

// console.log(myArr.includes(9)); // checks if '9' is there in array and returns a boolean


// console.log(myArr.indexOf(3)); // returns -1 if value doesnt exist in array

const newArr = myArr.join() // adds all element of the array into a string

// slice , splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1,3)
// console.log(myn1);

// console.log("B ", myArr); // no change in myArr even after slice


console.log("A ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);

console.log("B ", myArr); // last range is included in splice and the spliced part is removed from orignal array