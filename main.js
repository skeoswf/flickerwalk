const phaseOneElements = document.getElementsByClassName('phase-one');
const startButton = document.getElementById('big-ass-start-button');

startButton.addEventListener('click', () => {
  document.body.style.backgroundImage = 'url(./background2.png)';
});

phaseOneElements.addEventListener('click', () => {
  console.log('clicked');
});
