const diceIMG = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

function getRandomIndex (){
 return Math.floor(Math.random()* diceIMG.length);   
}
const player1 = document.querySelector(".img1");
const player2 = document.querySelector(".img2");

const random1 = getRandomIndex();
const random2 = getRandomIndex();

player1.src = "images/" + diceIMG[random1];
player2.src = "images/" + diceIMG[random2];


