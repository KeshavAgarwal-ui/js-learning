const gayName = new String("Bishal ki Gaand");

console.log(gayName.toUpperCase());
console.log(gayName.length);
console.log(gayName.__proto__);
console.log(gayName.charAt(10));
console.log(gayName.indexOf("Gaand"));
console.log(gayName.substring(0,6));
console.log(gayName.slice(-13,6));

const url = "https://Bishal%20ki%20Gaand";
console.log(url.replaceAll('%20','-'));

console.log(url.includes("Bishal"));

console.log(`Kal aana main aaj main ${gayName} maarne geya hu. Video link here: ${url.replaceAll('%20','-')}`);
