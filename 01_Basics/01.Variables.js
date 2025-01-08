const accountId = 10085
let accountEmail = "student21@gmail.com"
var accountPassword = "12345"
accountCity = "New Delhi"
let accountState;

// accountId = 2323 // Not Allowed

/*
Prefer not to use var
becasue of issue in Block Scope & Functional Scope 
*/

accountEmail = "sk12@gmail.com"
accountPassword = "0000"
accountCity = "Punjab"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);