let score = false;

console.log(typeof(score));
console.log(typeof score);
console.log(score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = "";
let boolLoggedIn = Boolean(isLoggedIn);
console.log(boolLoggedIn);

// *************** Operations ***************
let a = "1"+2;
let b = 1+"2";
let c = "1"+2+2;
let d = 1+2+"2";
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

console.log(+true);
console.log(+"");
