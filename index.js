let score = 0;

const holes = document.getElementsByClassName("hole");

setInterval(function () {
  const randomNum = Math.floor(Math.random() * holes.length);
  holes[randomNum].classList.toggle("mole");
}, 300);

const scoreDis = document.getElementById('score');

const gameArea = document.getElementById('whack-a-mole');
gameArea.addEventListener('click', function(clickEvent) {
  if (clickEvent.target.matches('.mole')) {
    clickEvent.target.classList.remove('mole');
    score++;
    scoreDis.innerText = score;
  }
});