// Element References
const startButton = document.getElementById('big-ass-start-button');
const app = document.getElementById('app');
const header = document.getElementById('header-text');
const aboutButton = document.getElementById('about-button');
let aboutButtonTwo = null; // we have to set it as a null here because it doesnt exist yet
const fullScreen = document.getElementById('full-screen');
const secondIntroWrapper = document.getElementById('second-intro-wrapper');
const secondIntroContinue = document.getElementById('second-intro-continue');

const theme = new Audio('./songs/cherryost.mp3');
const breath = new Audio('./sounds/breathe-slow.mp3');
breath.volume = 0.2;
const heart = new Audio('./sounds/heartbeat.mp3');


startButton.addEventListener('click', () => {
  header.remove();
  aboutButton.remove();
  startButton.remove();
  document.body.style.backgroundImage = 'url(./backgrounds/background2.png)';
  document.body.style.backgroundSize = 'cover';
  heart.play();
});

document.addEventListener('click', (event) => {
  const targetId = event.target.id;

  if (targetId === 'about-button') {
    handleAboutButtonClick();
  } else if (targetId === 'about-button-2') {
    handleAboutButtonTwoClick();
  } else if (targetId === 'full-screen') {
    handleFullScreenClick();
  } else if (targetId === 'second-intro-continue') {
    handleSecondIntroContinueClick();
  }
});

const handleAboutButtonClick = () => {
  aboutButton.innerHTML = 't̴̢̀ṳ̵̓t̴͍̓o̶̒͜ř̷̪i̴̫̓á̴͕l̴̲̚';
  aboutButton.style.color = 'purple';
  aboutButton.style.paddingLeft = '90px';
  aboutButton.style.paddingTop = '40px';
  aboutButton.style.fontSize = '40px';
  aboutButton.style.backgroundColor = 'transparent';
  aboutButton.style.border = 'none';
  aboutButton.setAttribute('id', 'about-button-2');
  aboutButton.style.fontFamily = 'serif';

  aboutButtonTwo = document.getElementById('about-button-2');
};

const handleAboutButtonTwoClick = () => {
  aboutButtonTwo.innerHTML = 't̸̛̤̦̭̫͚̟͊̉̓͂͋̿͠͝ụ̷͉̠̫̲̎̽̄̇͊͒̏͐̽t̷̰̦̹̤͔̜͖͓͋ọ̸̙̘̞̲̽̽͗̾̀͂͝r̷̡̜͕͓͔͕̹͕̀̊͂̍̚͠i̵̜̜̥̥̯̗̗͑̓̌̒͌̓̈́̐̀ͅâ̸̛̹͚̻̳̯̮̹̤̍̈́̚͝l̶͖̻̃́͒́';
  aboutButtonTwo.style.color = 'black';
  aboutButtonTwo.style.fontSize = '50px';
  aboutButtonTwo.style.paddingRight = '240px';
  aboutButtonTwo.style.paddingTop = '50px';
  aboutButtonTwo.style.textShadow = '0px 0px 10px red';
  document.body.style.backgroundImage = 'url(./backgrounds/background1.5.png)';
  header.style.transform = 'rotate(180deg)';
  header.style.color = 'rgb(255, 255, 255)';
  breath.play();
};

const handleFullScreenClick = () => {
  fullScreen.remove();
  secondIntroWrapper.hidden = false;
  secondIntroWrapper.classList.add('fade-in');
  document.body.style.backgroundImage = 'url(./backgrounds/background.png)';
};

const handleSecondIntroContinueClick = () => {
  secondIntroWrapper.remove();
  app.hidden = false;
  app.classList.add('fade-in');
  document.body.classList.add('fade-in');
  document.body.style.backgroundColor = 'transparent';
  theme.play();
};
