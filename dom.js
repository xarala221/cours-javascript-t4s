// const nom = document.getElementsByClassName("nom")
const nom2 = document.querySelector(".nom");

// const nom3 = document.getElementById("nom2")
// const nom4 = document.querySelector("#nom2")
nom2.innerHTML = "Awa";
nom2.style.color = "red";

const envoyer = document.querySelector("#envoyer");
envoyer.addEventListener("click", function () {
  alert("Envoyer");
});

// localStorage.setItem("nom", "Khady");

const etudiants = [
  {
    nom: "Awa",
    matricule: 8642,
  },
  {
    nom: "Fatou",
    matricule: 9392,
  },
  {
    nom: "Teddy",
    matricule: 2397,
  },
];

// localStorage.setItem("xaralistes", JSON.stringify(etudiants));

// console.log(localStorage.getItem("nom"));
// console.log(JSON.parse(localStorage.getItem("xaralistes")));

// const loginButton = document.getElementById("login");
// const logoutButton = document.querySelector("#logout");

// loginButton.addEventListener("click", function () {
//   localStorage.setItem("token", "Coumba");
// });

// logoutButton.addEventListener("click", function () {
//   localStorage.removeItem("token");
// });

function seConnecter() {
  localStorage.setItem("token", "Latyr");
}

const name = document.createElement("h2");
const nomSaisi = document.getElementById("nom");
const salut = document.querySelector(".salut");

const submitButton = document.getElementById("salut");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const valeurNom = nomSaisi.value;

  // name.appendChild(document.createTextNode(valeurNom));
  name.innerHTML = "<p>" + valeurNom + "</p>";
  salut.appendChild(name);
  console.log("salut ", salut);
});

const date = new Date();
console.log(date.getTime());
