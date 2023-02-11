const querystring = window.location.search;
console.log(querystring);
const urlParams = new URLSearchParams(querystring);
const sneakersNames = urlParams.get("name");
const sneakersDescriptions = urlParams.get("description");
const sneakersImgs = urlParams.get("img");
const sneakersPrices = urlParams.get("price");

function displayProduct() {
  const sneakersContainer = document.querySelector(".product");
  const sneakersName = document.getElementById("name");
  const sneakersDescription = document.getElementById("description");
  const sneakersImg = document.getElementById("img");
  const sneakersPrice = document.getElementById("price");
  sneakersName.innerHTML = sneakersNames;
  sneakersDescription.innerHTML = sneakersDescriptions;
  sneakersImg.src = sneakersImgs;
  sneakersPrice.innerHTML = sneakersPrices;
}

displayProduct();
