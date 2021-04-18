// ## 1
let monTab = ['pomme', 'fraise', 'melon', 'citron'];

monTab.pop();


monTab.shift();


monTab.push("banaaaane");


monTab.unshift("potiron");


monTab[0] = monTab[0].toUpperCase();


monTab.reverse();
console.log(monTab);

// ## 2
let chiffres = [4, 5, 2, 1, 3];

chiffres.sort();

chiffres.join();

chiffres.constructor();

console.log(chiffres.sort());

// ## 3
let array = [];

array.push("fack", true, 96, 25, "nudes", false, "lolipop", 85, "albator", 007)

console.log(array + "===" + array.length);

array.indexOf(false);

array.splice(5, 1);

let array2 = ["Farhad", "Junior", "Kevin", "Loic", "Alexis", "Oussama", "Issam", "Tania", "Mohammed", "William", "Andy", "Mihai", "Charles", "Yassin", "Ilyas", "Dorian", "Anthony", "Alain", "Gauthier", "Bonzaï"]
console.log(Math.floor(Math.random() * array2.length));