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

aboutButton.addEventListener('click', () => {
  aboutButton.innerHTML = 'a̶̢̙͈̳͓̯̪̜͌̅̎̐̎̍̾̓̓͜ͅb̷̺̜̖͕̦̰͈̙̉̉̀̎̋̂͂̾͐͠ȏ̵͚̰̪̀͒͒̿u̵̞̘͕̺͓̞͔̮͒̂t̶̳̫̟̣͔̲͈̾̄ͅ!̶̨̰̥̭̜́̎̌̕';
  aboutButton.style.color = 'purple';
  aboutButton.style.paddingLeft = '90px';
  aboutButton.style.paddingTop = '40px';
  aboutButton.style.fontSize = '90px';
  aboutButton.style.backgroundColor = 'transparent';
  aboutButton.style.border = 'none';
  aboutButton.removeAttribute('id');
  aboutButton.setAttribute('id', 'about-button-2');
});

aboutButtonTwo.addEventListener('click', () => {
  aboutButtonTwo.innerHTML = 'a̷̧̘͔͚̣̲̦͍̪̭̩̻̻̔̿̄̏͝b̷̨͔̱̻̭̘̫̪͗̉͘ŏ̸̢͙̺̘͈̋́ư̸̢͎̭͎̪̱̰̣͖̥̈͒̀ţ̴̢̪̣̹̩̳̦͔̟͕̹̜͛͛̃̓́̒̅̔̀̓̅̓̚!̷̜͍̬͔̗̊͆͠';
});
