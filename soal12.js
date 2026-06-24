const prompt = require("prompt-sync")({sigint: true});


let r = Number(prompt("Jari-jari:"));

let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
let luasPermukaan = 4 * Math.PI * Math.pow(r, 2);

console.log("Volume =", volume);
console.log("Luas Permukaan =", luasPermukaan);