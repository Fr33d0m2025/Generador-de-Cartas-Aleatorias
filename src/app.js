window.onload = function() {
  //write your code here
  let cardType = ["♠","♥", "♦", "♣"];
  let numCard = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let type = cardType[Math.floor(Math.random()*cardType.length)];

  document.getElementById("top").innerHTML = type;
  document.getElementById("bottom").innerHTML = type;
  document.getElementById("center").innerHTML = numCard[Math.floor(Math.random()*numCard.length)];
  
};
