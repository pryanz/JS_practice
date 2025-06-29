// singleton  only made when made using constructor

// to declare symbol
const mySum = Symbol("key1")

// object literals

const Jsuser = {
    name : "Priyansh",
    "full name": "Priyansh Khare",
    [mySum] : "mykey1",
    age : 20,
    location: "Delhi",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Friday"]
} // literals method 
// objects have keys and values

// console.log(Jsuser.name);
// console.log(Jsuser["name"]); // same

// we axis using [] because to get access to full name you can't access it using .full name as a space is in between

// console.log(Jsuser["full name"]);

// console.log(Jsuser[mySum]); // its not using it as a symbol

// to use it as symbol put it in [mySum] in the object in keys instead of mySum directly

// Jsuser.name = "abc" will change the value

// Object.freeze(Jsuser)  now any changes wont propogate
// console.log(Jsuser);



Jsuser.greeting = function(){
    console.log("Hello JS user");
}

console.log(Jsuser.greeting); // if we dont add () the function wont excute but we will get a reference tot he function

console.log(Jsuser.greeting()); // now the function will be executed

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user ${Jsuser["full name"]}`);
    
} // inside ${this.name} can also access it 

Jsuser.greetingTwo(); // as console log is lready inside we dont need to write it wrapping the function