let myDate = new Date()
// console.log(myDate.toJSON()); // every method represent date in every other format

// console.log(typeof myDate); // object

let myCreatedDate = new Date("2023-01-14")
// month start with 0 in js in (2023,0,23) format
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

newDate.toLocaleString('default', {
    weekday:"long"
}) // for customization


