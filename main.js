// elements
const startButton = document.getElementById('big-ass-start-button');
const app = document.getElementById('app');
const header = document.getElementById('header-text');
const aboutButton = document.getElementById('about-button');
let aboutButtonTwo = null; // we have to set it as a null here because it doesnt exist yet
const fullScreen = document.getElementById('full-screen');
const secondIntroWrapper = document.getElementById('second-intro-wrapper');
const secondIntroContinue = document.getElementById('second-intro-continue');

// dialogue elements
const dialogueBoxHim = document.getElementById('dialogue-box-him');
const dialogueBoxHer = document.getElementById('dialogue-box-her');
const dialogueBoxOurs = document.getElementById('dialogue-box-ours');

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

// dialogue sounds
const dialogueClickOne = new Audio('./dialogue-sounds/dialogue-random-1.mp3');
const dialogueClickTwo = new Audio('./dialogue-sounds/dialogue-random-2.mp3');
const dialogueClickThree = new Audio('./dialogue-sounds/dialogue-random-3.mp3');
const dialogueClickFour = new Audio('./dialogue-sounds/dialogue-random-4.mp3');
const dialogueClickFive = new Audio('./dialogue-sounds/dialogue-random-5.mp3');

const mainRoomDialogueOne = new Audio('./dialogue-sounds/main-room-1.mp3');

breath.volume = 0.2;
saveMeow.volume = 0.1;

let gameStage = 1;
let gameTrueStart = false

const updateGameState = () => {
  gameTrueStart = gameStage >= 6;
};

const randomDialogueClick = () => {
  let randomValueOneToFive = (Math.floor(Math.random() * 5) + 1)
  switch (randomValueOneToFive) {
    case 1:
      dialogueClickOne.play();
      break;
    case 2:
      dialogueClickTwo.play();
      break;
    case 3:
      dialogueClickThree.play();
      break;
    case 4:
      dialogueClickFour.play();
      break;
    case 5:
      dialogueClickFive.play();
      break;
  }
}

const dialogueControl = (id, text) => {
  randomDialogueClick();


  if (dialogueBoxHim) {
    dialogueBoxHim.setAttribute('id', id);
    dialogueBoxHim.innerHTML = text;
  } else if (dialogueBoxHer) {
    dialogueBoxHer.setAttribute('id', id);
    dialogueBoxHer.innerHTML = text;
  } else if (dialogueBoxOurs) {
    dialogueBoxOurs.setAttribute('id', id);
    dialogueBoxOurs.innerHTML = text;
  }
}

document.addEventListener('click', (event) => {
  const targetId = event.target.id;
  console.log(`current gameStage value: ${gameStage}`)
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
  theme.volume = 0.2;
  themeDistorted.volume = 0.2;
  gameStage = 6;

  updateGameState();
  mainRoom();
}

const mainRoom = () => {
  let mainValue = 0;

  document.addEventListener('click', (event) => {

    if (event.target && gameStage === 6) {

      mainValue++
      console.log(`current mainValue: ${mainValue}`)

      switch (mainValue) {
        case 1:
          dialogueBoxHim.hidden = false;
          dialogueControl('dialogue-box-him', 'i cant be here');
          break;
        case 2:
          dialogueControl('dialogue-box-him', 'i have to leave--  i need to get out of here. now.');
          mainRoomDialogueOne.play();
          break;
        case 3:
          randomDialogueClick();
          dialogueBoxHim.hidden = true;
          gameStage = 7;
          updateGameState();
          break;
      }

    }
  })
}
