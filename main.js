const startButton = document.getElementById('big-ass-start-button');

const header = document.getElementById('header-text');
const aboutButton = document.getElementById('about-button');
const aboutButtonTwo = document.getElementById('about-button-2');

startButton.addEventListener('click', () => {
  header.remove();
  aboutButton.remove();
  startButton.remove();
  document.body.style.backgroundImage = 'url(./background2.png)';
  document.body.style.backgroundSize = 'cover';
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
  } else if (event.target.id === 'about-button-2') {
    const aboutButtonTwo = event.target;
    aboutButtonTwo.innerHTML = 'a̷̧̘͔͚̣̲̦͍̪̭̩̻̻̔̿̄̏͝b̷̨͔̱̻̭̘̫̪͗̉͘ŏ̸̢͙̺̘͈̋́ư̸̢͎̭͎̪̱̰̣͖̥̈͒̀ţ̴̢̪̣̹̩̳̦͔̟͕̹̜͛͛̃̓́̒̅̔̀̓̅̓̚!̷̜͍̬͔̗̊͆͠';
    aboutButton.style.color = 'black';
    aboutButton.style.fontSize = '50px';
    aboutButton.style.textShadow = '0px 0px 10px red';
  }
});
