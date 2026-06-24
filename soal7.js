const prompt = require("prompt-sync")({sigint: true});


let a = 8.3;
let c = "3.2";

console.log(a + " + " + c + " = " + (a + Number(c)));
console.log(a + " - " + c + " = " + (a - Number(c)));
console.log(a + " x " + c + " = " + (a * Number(c)));
console.log(a + " / " + c + " = " + (a / Number(c)));

console.log(parseInt(a) + " % " + parseInt(c) + " = " + (parseInt(a) % parseInt(c)));