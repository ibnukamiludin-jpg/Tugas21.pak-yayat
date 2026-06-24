const prompt = require("prompt-sync")({sigint: true});

let totalHarga = parseFloat(prompt("Total Harga"));

if (totalHarga >= 200000) {
    let diskon = totalHarga * 0.075;
    let bayar = totalHarga - diskon;

    console.log("Diskon =", diskon);
    console.log("Total Bayar =", bayar);
} else {
    console.log("Tidak mendapat diskon");
}