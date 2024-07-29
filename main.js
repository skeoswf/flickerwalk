const startButton = document.getElementById('big-ass-start-button');

const app = document.getElementById('app');
const header = document.getElementById('header-text');
const aboutButton = document.getElementById('about-button');
const aboutButtonTwo = document.getElementById('about-button-2');
const fullScreen = document.getElementById('full-screen');

const breath = new Audio('./breathe-slow.mp3');
breath.volume = 0.2;
const heart = new Audio('./heartbeat.mp3');

startButton.addEventListener('click', () => {
  header.remove();
  aboutButton.remove();
  startButton.remove();
  document.body.style.backgroundImage = 'url(./background2.png)';
  document.body.style.backgroundSize = 'cover';
  heart.play();
});

document.addEventListener('click', (event) => {
  if (event.target.id === 'about-button') {
    const aboutButton = event.target;
    aboutButton.innerHTML = 'a̶̢̙͈̳͓̯̪̜͌̅̎̐̎̍̾̓̓͜ͅb̷̺̜̖͕̦̰͈̙̉̉̀̎̋̂͂̾͐͠ȏ̵͚̰̪̀͒͒̿u̵̞̘͕̺͓̞͔̮͒̂t̶̳̫̟̣͔̲͈̾̄ͅ!̶̨̰̥̭̜́̎̌̕';
    aboutButton.style.color = 'purple';
    aboutButton.style.paddingLeft = '90px';
    aboutButton.style.paddingTop = '40px';
    aboutButton.style.fontSize = '40px';
    aboutButton.style.backgroundColor = 'transparent';
    aboutButton.style.border = 'none';
    aboutButton.setAttribute('id', 'about-button-2');
    aboutButton.style.fontFamily = 'serif';
  } else if (event.target.id === 'about-button-2') {
    const aboutButtonTwo = event.target;
    aboutButtonTwo.innerHTML = 'a̷̧̘͔͚̣̲̦͍̪̭̩̻̻̔̿̄̏͝b̷̨͔̱̻̭̘̫̪͗̉͘ŏ̸̢͙̺̘͈̋́ư̸̢͎̭͎̪̱̰̣͖̥̈͒̀ţ̴̢̪̣̹̩̳̦͔̟͕̹̜͛͛̃̓́̒̅̔̀̓̅̓̚!̷̜͍̬͔̗̊͆͠';
    aboutButton.style.color = 'black';
    aboutButton.style.fontSize = '50px';
    aboutButton.style.paddingRight = '240px';
    aboutButton.style.paddingTop = '50px';
    aboutButton.style.textShadow = '0px 0px 10px red';
    document.body.style.backgroundImage = 'url(./background1.5.png)';
    header.style.transform = 'rotate(180deg)';
    header.style.color = 'rgb(255, 255, 255)';
    breath.play();
  }
});

document.addEventListener('click', (event) => {
  if (event.target.id == 'full-screen') {
    fullScreen.hidden = true;
    app.hidden = false;
    app.classList.add('fade-in');
    document.body.style.backgroundColor = 'transparent';
    document.body.style.backgroundImage = 'url(./background.png)';
  }
});
