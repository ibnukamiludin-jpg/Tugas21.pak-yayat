const prompt = require("prompt-sync")({sigint: true});

let bilangan = parseInt(prompt("Masukkan Bilangan"));

if (bilangan % 7 == 0) {
    console.log("Kelipatan 7");
} else {
    console.log("Anda belum beruntung");
}