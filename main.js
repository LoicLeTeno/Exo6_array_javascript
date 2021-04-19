// ## 1
let monTab = ['pomme', 'fraise', 'melon', 'citron'];

monTab.pop();


monTab.shift();


monTab.push("banaaaane");


monTab.unshift("potiron");


monTab[1] = monTab[1].toUpperCase();


monTab.reverse();
console.log(monTab);

// ## 2
let chiffres = [4, 5, 2, 1, 3];

chiffres.sort();

// chiffres.join("-");

// chiffres.constructor(4, 5, 2, 1, 3);

// console.log(chiffres.sort());

chiffres = chiffres.join("-");
console.log(chiffres);

chiffres = chiffres.split("-");
console.log(chiffres);


// ## 3
let array = [];

array.push("fack", true, 96, 25, "nudes", false, "lolipop", 85, "albator", 007)

console.log(array + " === " + array.length);

array.indexOf(false);

array.splice(5, 1);

let array2 = ["Farhad", "Junior", "Kevin", "Loic", "Alexis", "Oussama", "Issam", "Tania", "Mohammed", "William", "Andy", "Mihai", "Charles", "Yassin", "Ilyas", "Dorian", "Anthony", "Alain", "Gauthier", "Bonzaï"]
// console.log(Math.floor(Math.random() * array2.length));
// let random = Math.floor(Math.random() * array2.length);
console.log(array2[Math.floor(Math.random() * array2.length)]);

array2.splice(array2.indexOf("Loic"),1);
console.log(array2);