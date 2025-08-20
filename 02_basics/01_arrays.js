marvel_heros = ["SpiderMan","IronMan","Thor"];
dc_heros = ["SuperMan","Flash","WonderWoman"];

// marvel_heros.push(dc_heros); push the whole array as an element 
// console.log(marvel_heros);

// let allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

let allHeros = [...marvel_heros,...dc_heros];
console.log(allHeros);

let junk = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
let realShit = junk.flat(Infinity);
console.log(realShit);

console.log(Array.isArray("Keshav"));
console.log(Array.from("Keshav"));
console.log(Array.from({name: "Keshav"}));//interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


