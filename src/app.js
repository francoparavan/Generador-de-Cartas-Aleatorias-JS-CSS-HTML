/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  displayRandomCard();
  document
    .getElementById("randomizar-button")
    .addEventListener("click", displayRandomCard);
  setInterval(displayRandomCard, 10000);
};

function displayRandomCard() {
  const cards = [
    { value: "8", suit: "♠", color: "black" },
    { value: "3", suit: "♥", color: "red" },
    { value: "8", suit: "♥", color: "red" },
    { value: "J", suit: "♣", color: "black" }
  ];

  const randomIndex = Math.floor(Math.random() * cards.length);
  const card = cards[randomIndex];

  document.getElementById("value").innerText = card.value;
  document.getElementById("top-symbol").innerText = card.suit;
  document.getElementById("bottom-symbol").innerText = card.suit;

  document.getElementById("value").style.color = card.color;
  document.getElementById("top-symbol").style.color = card.color;
  document.getElementById("bottom-symbol").style.color = card.color;
}
