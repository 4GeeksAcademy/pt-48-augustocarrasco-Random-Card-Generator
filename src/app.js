
let suits = ['♦', '♥','♠', '♣'];
let cards = ['Ace',2,3,4,5,6,7,8,9,10,'J','Q','K'];
let numero = document.getElementsByClassName('numeros');
let palo = document.getElementById('palo');
let newcardbutton = document.getElementById('newcardbutton');
let resizebutton = document.getElementById('resizebutton');
let carta = document.getElementById('carta');
let starttimer = document.getElementById('starttimer');
let stoptimer = document.getElementById('stoptimer');
let timercount = document.getElementById('timercount');
let timerp = document.getElementById('timerp');

let timer;
var myInterval;

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

function getcard() {
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
}

newcardbutton.addEventListener('click', recargar);

function recargar() {
  location.reload();
}

starttimer.addEventListener('click', function() {
  countDown();
  timer = setInterval(getcard, 10000);
  stoptimer.classList.remove('hidden');
  timerp.classList.remove('hidden');
  starttimer.classList.add('hidden');
  
  

});

stoptimer.addEventListener('click', function() {
  clearInterval(timer);
  clearInterval(myInterval);
  stoptimer.classList.add('hidden');
  timerp.classList.add('hidden');
  starttimer.classList.remove('hidden');
});

function countDown() {
  var i = 9;
  var myInterval = setInterval(function() {
      document.getElementById("timercount").innerHTML = i;
  
      if (i === 0) {
        
          i=9;
          //call your function
      }
      else {
          i--;
         }
      }, 1000);
  }

  var size = false;
  resizebutton.addEventListener('click',function () {
    if (!size) {
      carta.classList.add('scale-125');
      carta.classList.remove('scale-100');
      size = true;
    } else if (size) {
      carta.classList.add('scale-100');
      carta.classList.remove('scale-125');
      size=false;
    }
  });