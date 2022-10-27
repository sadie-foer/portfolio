let room;
let content = document.getElementById('content')
const now  = new Date();
console.log(now.getMonth())
let date = now.getFullYear().toString() + '-' + (now.getMonth()+1).toString() + '-' + now.getDate().toString()  ;
let affirmations = ['Everything is fine', 'Eat a sandwich!']

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }

let ding = new sound('ding.mp3');

document.getElementById('submit').onclick = function(){
    getThanksScreen()
    setTimeout(clearScreen, 5000)
}

function getThanksScreen(){
    content.remove()
    ding.play()

    let body = document.getElementsByTagName('body')[0]
    body.style.backgroundColor = '#7ED957';

    let finalMessage = document.createElement('div');
    finalMessage.setAttribute('id', 'thanks-div')
    body.appendChild(finalMessage)
    finalMessage.innerHTML = 'Welcome!';

    let affirmation = affirmations[Math.floor(Math.random()*affirmations.length)]
    let affirmationDiv = document.createElement('div');
    affirmationDiv.setAttribute('id', 'affirmation')
    body.appendChild(affirmationDiv)
    affirmationDiv.innerHTML = affirmation;
}

function clearScreen(){
  document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
  //Add text description
}