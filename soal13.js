const prompt = require("prompt-sync")({sigint: true});


let harga = parseFloat(prompt("Harga Makanan"));

let pajak = harga * 0.10;
let fee = harga * 0.05;
let bayar = harga + pajak + fee;

console.log("Harga makanan :", harga);
console.log("Pajak :", pajak);
console.log("Fee :", fee);
console.log("Harga bayar :", bayar);