
let suits = ['♦', '♥','♠', '♣'];
console.log(suits);
let cards = ['Ace',2,3,4,5,6,7,8,9,10,'J','Q','K'];
console.log(cards);
let numero = document.getElementsByClassName('numeros');
console.log(numero);
let palo = document.getElementById('palo');
console.log(palo);
window.onload = function getcard() {
  //write your code here
  let suit = Math.round(Math.random()*3);
  let card = Math.round(Math.random()*12); 
  if (suit <=1) {
    palo.style.color ='red';
    for (let i =0; i<numero.length; i ++) {
      numero[i].style.color = 'red';
    }
    
  }

  for (let i =0; i<numero.length; i ++) {
    numero[i].innerHTML = cards[card];
  }

  palo.innerHTML = suits[suit];
  

  return suit;
};
