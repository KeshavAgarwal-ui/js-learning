//singleton
//Object.create();

//Object literals

let mysmb = Symbol("key1");

let JsUser = {
    name: "BishalChutra",
    [mysmb]: "chutraKaChuchi",
    age: 200,
    location: "Bangaldesh",
    email: "chutarKaChut@gmail.com",
    isLoggedIn: true
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mysmb]);
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user!!");
    
}

console.log(JsUser.greeting());