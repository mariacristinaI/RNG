function randomNumberGenerator() {
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    let finalnumber = Math.floor(Math.random() * (max - min + 1) + min); 
    document.getElementById('result').value = finalnumber;
}

let animateButton = function(e) {
    e.preventDefault;
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  let confetti = document.getElementsByClassName("confetti-button");
  for (let i = 0; i < confetti.length; i++) {
    confetti[i].addEventListener('click', animateButton, false);
  }

const today = new Date();
let currentYear = today.getFullYear();
document.getElementById("year").innerHTML = currentYear;