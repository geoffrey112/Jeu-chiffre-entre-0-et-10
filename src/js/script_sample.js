// Display Color - Nb of life - Ok button - Enable text, Disabled select
class Display{

  displayBackground(lvl) {
    difficutlyElem = document.getElementById('difficulty');
    
    if(lvl === 'easy'){
      difficutlyElem.style.backgroundColor = "#04f804";
    }else{
      difficutlyElem.style.backgroundColor = "red";  
    }
  }

  displayLife(nbLife){

    lifeTwoElem = document.getElementById('life2');
    lifeOneElem = document.getElementById('life1');

    if(nbLife == 2){
      lifeTwoElem.style.visibility = "visible";
      lifeOneElem.style.visibility = "hidden";
    }else if(nbLife == 3){
      lifeTwoElem.style.visibility = "visible";
      lifeOneElem.style.visibility = "visible";
    }else{
      lifeTwoElem.style.visibility = "hidden";
      lifeOneElem.style.visibility = "hidden";
    }
  }

  changeButtonOKStatus(newStatus) {
    let buttonOK = document.getElementById('ok');

    buttonOK.disabled = newStatus;
  }

  displayReset() {
    document.getElementById('difficulty').style.backgroundColor = "#04f804";
    document.getElementById('difficulty').value = "easy";
    document.getElementById('life2').style.visibility = "hidden";
    document.getElementById('life1').style.visibility = "hidden";
    document.getElementById('life3').style.visibility = "visible";
    document.getElementById('answer').innerHTML = "";
    document.getElementById('difficulty').disabled = false;
    document.getElementById('selectChance').disabled = false;
    document.getElementById('selectChance').value = 1;
    document.getElementById('ok').disabled = true;
    document.getElementById('findNb').value = "";
  }

  // enableOk(value){
  //   let buttonOK = document.getElementById('ok');

  //   if(value > 10 || value < 0){
  //     buttonOK.disabled = true;
  //   }else if(value == "" || value == "-" || value == "e"){
  //     buttonOK.disabled = true;
  //   }else{
  //     buttonOK.disabled = false;
  //   }
  // }
}


// Game process
class Game extends Display{
  constructor(difficulty, nbOfLife, randomNb, reset){
    super();

    this._randomNb = randomNb;
    this._reset = reset;

    this._difficulty = difficulty;
    this._nbOfLife = nbOfLife;
    this._enableOk = enableOk;
  }

  get randomNb(){ 
    return this._randomNb;
  }

  set randomNb(value){
    this._randomNb = value;
  }

  SetDificulty(lvl) {
    this._difficulty = lvl;
    this.displayBackground(lvl);
  }

  SetChance(chance) {
    this._nbOfLife = chance;
    this.displayLife(chance);
  }

  functionality(value){ 
    if(this._difficulty === 'easy'){
      if(this._nbOfLife > 0){
        if(value === this._randomNb){
          this._nbOfLife = 0;
        }else if(value !== this._randomNb && this._nbOfLife === 3){
          --this._nbOfLife;
        }else if(value !== this._randomNb && this._nbOfLife === 2){
          --this._nbOfLife;
        }else{
          --this._nbOfLife;
        }
      }
    }else{
      if(this._nbOfLife > 0){
        if(value === this._randomNb){
          this._nbOfLife = 0;
        }else if(value !== this._randomNb && this._nbOfLife === 3){
          this._randomNb = Math.floor(Math.random()* 11);
          --this._nbOfLife;
        }else if(value !== this.randomNb && this._nbOfLife === 2){
          this._randomNb = Math.floor(Math.random()* 11);
          --this._nbOfLife;
        }else{
          --this._nbOfLife;
        }
      }
    }
  }

  reset(value){
    if(value){
      this.displayReset();
      this._randomNb = Math.floor(Math.random()*11);
      this._nbOfLife = 1;
      console.log(`Après reset ${this._randomNb}`); // Check log
    }
  }

  enableOK(value) {
    if(value > 10 || value < 0){
      this.changeButtonOKStatus(true)
    }else if(value == "" || value == "-" || value == "e"){
      this.changeButtonOKStatus(true)
    }else{
      this.changeButtonOKStatus(false)
    }
  }
}


let game = new Game('easy', 1);


// Color
document.getElementById('difficulty').addEventListener('change', () => {
  game.SetDificulty(document.getElementById('difficulty').value)
});
// Nb of life
document.getElementById('selectChance').addEventListener('change', () => {
  nbLife = parseInt(document.getElementById('selectChance').value);
  game.SetChance(nbLife);
});
// Ok button
document.getElementById('findNb').addEventListener('input', () => {
  displayElement.enableOk = document.getElementById('findNb').value;
});



game.randomNb = Math.floor(Math.random()*11);
console.log(game.randomNb); // Check randomNb

// game process
document.getElementById('ok').addEventListener('click', () => {
  game.functionality(parseInt(document.getElementById('findNb').value));
});
// Reset
document.getElementById('reset').addEventListener('click', () => {
  game.reset();
});


let enableEnter = new Enable();

document.getElementById('findNb').addEventListener('keydown', (e) => {
  if(e.key === "Enter"){
    document.getElementById('ok').click();
  }
});



