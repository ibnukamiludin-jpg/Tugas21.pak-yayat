const prompt = require("prompt-sync")({sigint: true});

let huruf = prompt("Masukkan Huruf").toUpperCase();

if (huruf.length !== 1 || !/[A-Z]/.test(huruf)) {
    console.log("Bukan berupa huruf");
} else if ("AIUEO".includes(huruf)) {
    console.log("Huruf Vokal");
} else {
    console.log("Huruf Konsonan");
}