const prompt = require("prompt-sync")({sigint: true});

let siswa = prompt("Nama Siswa");
let nilai = parseInt(prompt("Nilai"));

let grade;

if (nilai >= 90) {
    grade = "A";
} else if (nilai >= 80) {
    grade = "B";
} else if (nilai >= 70) {
    grade = "C";
} else if (nilai >= 60) {
    grade = "D";
} else {
    grade = "E";
}

console.log("Nama :", siswa);
console.log("Nilai :", nilai);
console.log("Grade :", grade);