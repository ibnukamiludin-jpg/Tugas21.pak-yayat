const prompt = require("prompt-sync")({sigint: true});

let judul = prompt("Judul Buku:");
let penerbit = prompt("Penerbit:");
let jumlah = prompt("Jumlah Buku:");
let tanggal = prompt("Tanggal Pembelian:");

console.log("Judul Buku :", judul);
console.log("Penerbit :", penerbit);
console.log("Jumlah Buku :", jumlah);
console.log("Tanggal Pembelian :", tanggal);
