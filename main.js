// elements
const startButton = document.getElementById('big-ass-start-button');
const app = document.getElementById('app');
const header = document.getElementById('header-text');
const aboutButton = document.getElementById('about-button');
let aboutButtonTwo = null; // we have to set it as a null here because it doesnt exist yet
const fullScreen = document.getElementById('full-screen');
const secondIntroWrapper = document.getElementById('second-intro-wrapper');
const secondIntroContinue = document.getElementById('second-intro-continue');

// images 
const gitHubLogo = document.getElementById('github-logo');
const saveCat = document.getElementById('save-cat');

// themes
const theme = new Audio('./songs/cherryost.mp3');
const themeDistorted = new Audio('./songs/cherryost_distorted.mp3')

// sounds
const breath = new Audio('./sounds/breathe-slow.mp3');
const heart = new Audio('./sounds/heartbeat.mp3');
const saveMeow = new Audio('./sounds/savemeow.mp3');

breath.volume = 0.2;
saveMeow.volume = 0.1;

let gameStage = 1;

document.addEventListener('click', (event) => {
  const targetId = event.target.id;
  console.log(gameStage)
  if (targetId === 'about-button') {
    handleAboutButtonClick();
    gameStage = 4;
  } else if (targetId === 'about-button-2') {
    handleAboutButtonTwoClick();
    gameStage = 5;
  } else if (targetId === 'full-screen') {
    handleFullScreenClick();
    gameStage = 2;
  } else if (targetId === 'second-intro-continue') {
    handleSecondIntroContinueClick();
    gameStage = 3;
  } else if (targetId === 'big-ass-start-button') {
    handleStartButtonClick();
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
  gitHubLogo.remove();
  header.style.transform = 'rotate(180deg)';
  header.style.color = 'rgb(255, 255, 255)';

  theme.pause();
  themeDistorted.play();
  saveCat.setAttribute('id', 'save-cat-2');
  saveMeow.volume = 0;
  saveCat.src = './image-assets/savecat2.png';
};

const handleFullScreenClick = () => {
  fullScreen.remove();
  secondIntroWrapper.hidden = false;
  secondIntroWrapper.classList.add('fade-in');
  document.body.style.backgroundImage = 'url(./backgrounds/background.png)';
  theme.play();
};

const handleSecondIntroContinueClick = () => {
  secondIntroWrapper.remove();
  app.hidden = false;
  app.classList.add('fade-in');
  document.body.classList.add('fade-in');
  document.body.style.backgroundColor = 'transparent';

  saveCat.addEventListener('mouseenter', () => {
    saveMeow.play();
  });
};

const handleStartButtonClick = () => {
  header.remove();
  aboutButton.remove();
  startButton.remove();
  gitHubLogo.remove();
  saveCat.remove();
  document.body.style.backgroundImage = 'url(./backgrounds/background2.png)';
  document.body.style.backgroundSize = 'cover';
  heart.play();
  gameStage = 6;
}
