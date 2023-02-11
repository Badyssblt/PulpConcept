const lorem =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo assumenda beatae animi minima tempora culpa cupiditate aliquid vero amet nemo sit est, harum enim cumque.";

// Objet Sneakers
function Sneakers(img, name, description, id, price) {
  (this.img = img),
    (this.name = name),
    (this.description = description),
    (this.id = id),
    (this.price = price);
}

const sneakers1 = new Sneakers(
  "resources/sneakers2.png",
  "Victor's Sneakers",
  lorem,
  0,
  "0€"
);
const sneakers2 = new Sneakers(
  "resources/sneakers3.png",
  "Air Jordan 1 Retro High Travis Scott",
  lorem,
  1,
  "2100€"
);

const sneakers3 = new Sneakers(
  "resources/sneakers4.png",
  "Air Force 1",
  lorem,
  2,
  "119.99€"
);
const sneakers4 = new Sneakers(
  "resources/sneakers5.png",
  "Jordan Air 1",
  lorem,
  3,
  "210€"
);
const sneakers5 = new Sneakers(
  "resources/sneakers6.png",
  "Air Jordan 1 Mid SE Tartan Swoosh",
  lorem,
  4,
  "139.99€"
);

const sneakers6 = new Sneakers(
  "resources/sneakers7.png",
  "New Balance 2002r",
  lorem,
  5,
  "310€"
);

// Changer l'objet en dessous pour changer Sneakers en premier

const sneakers7 = new Sneakers(
  "resources/Sneakers.png",
  "Air Jordan 1 Mid Chicago Toe",
  lorem,
  6,
  "240€"
);

let Sneakerslist = [];
Sneakerslist.push(
  sneakers1,
  sneakers2,
  sneakers3,
  sneakers4,
  sneakers5,
  sneakers6
);

let SneakerFirst = [];
SneakerFirst.push(sneakers7);

function firstSneaker() {
  let listPage = "";
  const main = document.querySelector(".first-page");
  console.log(main);

  SneakerFirst.forEach((sneak) => {
    listPage += `
    <img src="${sneak.img}" alt="">   
    <div class="details-hero">
        <h1 class="titlehero">${sneak.name}</h1>
        <a href="product.html?name=${sneak.name}&description=${sneak.description}&img=${sneak.img}&price=${sneak.price} id="">COMMANDEZ</a>
    </div>
    `;
    console.log(listPage);

    main.innerHTML = listPage;
  });
}
firstSneaker();

// Créer cartes snakers avec tableau SneakersList
function createCard() {
  let listSneakers = "";
  const grid = document.querySelector(".list-card");

  Sneakerslist.forEach((sneak) => {
    listSneakers += `
    <div class="card">
        <img src= ${sneak.img} alt="">
        <h1 class="titre">${sneak.name}</h1>
        <p class="description">${sneak.description}</p>
        <button id="buy"><a href = "product.html?name=${sneak.name}&description=${sneak.description}&img=${sneak.img}&price=${sneak.price}"id="lien">Acheter</a></button>
        <button id="favoris">Ajouter aux favoris</button>
    </div>
    `;
    grid.innerHTML = listSneakers;
  });
}
createCard();

function productPage() {
  const buyBtn = document.getElementById("buy");
  const lien = document.getElementById("lien");
  console.log(lien);
}

function productPage() {}
