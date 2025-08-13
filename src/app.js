window.onload = function() {
  //write your code here
  let cardType = ["♠","♥", "♦", "♣"];
  let numCard = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let type = cardType[Math.floor(Math.random()*cardType.length)];
  let num = numCard[Math.floor(Math.random()*numCard.length)];
  

  document.getElementById("top").innerHTML = type;
  document.getElementById("bottom").innerHTML = type;
  document.getElementById("center").innerHTML = num;

  if (type === "♥" || type === "♦") {
    document.getElementById("top").style.color = "red";
    document.getElementById("bottom").style.color = "red";
    document.getElementById("center").style.color = "red";
  }
  
};
