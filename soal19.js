const prompt = require("prompt-sync")({sigint: true});

let x = parseInt(prompt("X"));
let y = parseInt(prompt("Y"));
let z = parseInt(prompt("Z"));

let terbesar = Math.max(x, y, z);
let terkecil = Math.min(x, y, z);

console.log("Terbesar =", terbesar);
console.log("Terkecil =", terkecil);