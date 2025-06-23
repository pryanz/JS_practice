const accountId = 65769
let accountEmail = "priyansh@google.com"
var accountPassword = "12345"
accountCity="Delhi"
let accountState;  

// accountId = 2 not allowed

accountEmail = "pk@google.com"
accountPassword = "54321"
accountCity = "Lucknow"


console.log(accountId);
console.table([accountEmail, accountPassword, accountCity])

/*
always use only const and let and not var as it leads to block scope and functional scope problems
*/ 