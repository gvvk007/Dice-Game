var roll1=Math.floor(Math.random()*6)+1;
var roll2=Math.floor(Math.random()*6)+1;

var src1="images/dice"+roll1+".png";
var src2="images/dice"+roll2+".png";

document.querySelector('img.img1').src=src1;
document.querySelector('img.img2').src=src2;


if (roll1 > roll2) {
  document.querySelector('h1').textContent="⛳️ Player 1 Wins";
}
else if (roll1 <  roll2) {
  document.querySelector('h1').textContent="Player 2 Wins ⛳️";
}
else {
  document.querySelector('h1').textContent="It's a Draw!";
}
