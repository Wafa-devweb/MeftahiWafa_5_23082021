main();

function main() {
  console.log(localStorage);
displayOrderIdAndPrice();
}

function displayOrderIdAndPrice() {
const totalConfirmation = document.querySelector(".total");
const orderId = document.querySelector("#commandId");
console.log(orderId, totalConfirmation)

totalConfirmation.innerText = localStorage.getItem("total");
orderId.innerText = localStorage.getItem("orderId");

  // On vide le localStorage pour recommencer plus tard le processus d'achat
localStorage.clear();
}