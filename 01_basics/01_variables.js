const accountId = 5647;
let accountName = "Keshav Agarwal";
var accountPwd = "kalaana";
accountCity = "Guwahati";
let accountState;

// accountId = 432; not allowed
accountName = "Aashu";
accountPwd = "bolanakalaana";
accountCity = "Benguluru";
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountName,accountPwd,accountCity,accountState]);
