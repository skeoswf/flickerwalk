const startButton = document.getElementById('big-ass-start-button');

const header = document.getElementById('header-text');
const aboutButton = document.getElementById('about-button');

startButton.addEventListener('click', () => {
  header.remove();
  aboutButton.remove();
  startButton.remove();
  document.body.style.backgroundImage = 'url(./background2.png)';
  document.body.style.backgroundSize = 'cover';
});
