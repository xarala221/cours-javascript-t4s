let age = 17;

if (age > 18) {
  console.log("Majeur");
} else if (age === 18) {
  console.log("Vous avez 18");
} else {
  console.log("Mineur");
}

switch (age) {
  case 18:
    console.log("Majeur");
    break;
  case 17:
    console.log("Vous avez 17");
    break;
  default:
    console.log("Non specifie");
}

function tableMultiplication(table = 8) {
  for (let i = 1; i < 11; i++) {
    let resultat = table * i;
    console.log(resultat);
  }
}

function addition(nombre1, nombre2) {
  console.log(nombre1 + nombre2);
}

function multiplication(nombre1, nombre2) {
  console.log(nombre1 * nombre2);
}

addition(10, 5);
multiplication(10, 5);

// let nom = "Awa";

// function afficherNom() {
//   // let nom = "Fatou";
//   console.log(nom);
// }

// console.log(nom);
// afficherNom();

function calculatrice1(nombre1, nombre2, operateur) {
  if (operateur === "+") {
    return nombre1 + nombre2;
  } else if (operateur === "*") {
    return nombre1 * nombre2;
  } else if (operateur === "-") {
    return nombre1 - nombre2;
  } else {
    return "Operateur inconnu!";
  }
}

const calculatrice = (nombre1, nombre2, operateur) => {
  if (operateur === "+") return nombre1 + nombre2;
  else if (operateur === "*") return nombre1 * nombre2;
  else if (operateur === "-") return nombre1 - nombre2;
  else return "Operateur inconnu!";
};

const resultat = calculatrice(10, 5, "-");
console.log(resultat);

let etudiants = ["Awa", "Jean", "Daba", 6556, true, 2.2, 2.2];

// for, for in
// for (let i = 0; i < etudiants.length; i++) {
//   console.log(etudiants[i]);
// }

// for (let index in etudiants) {
//   console.log(etudiants[index]);
// }

for (let etudiant of etudiants) {
  console.log(etudiant);
}

const nombres = [1, 2, 3, 4];

const squares = nombres.map((nombre) => nombre * nombre);

const squares2 = nombres.map(function (nombre) {
  return nombre * nombre;
});
