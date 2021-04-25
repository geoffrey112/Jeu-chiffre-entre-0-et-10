// Display Color - Nb of life - Ok button - Enable text, Disabled select
class Display{
  constructor(difficulty, nbOfLife, enableOk){
    this._difficulty = difficulty;
    this._nbOfLife = nbOfLife;
    this._enableOk = enableOk;
  }

  set difficulty(value){
    if(value === 'easy'){
      document.getElementById('difficulty').style.backgroundColor = "#04f804";
    }else{
      document.getElementById('difficulty').style.backgroundColor = "red";  
    }
    this._difficulty = value;
  }

  set nbOfLife(value){
    if(value == 2){
      document.getElementById('life2').style.visibility = "visible";
      document.getElementById('life1').style.visibility = "hidden";
    }else if(value == 3){
      document.getElementById('life2').style.visibility = "visible";
      document.getElementById('life1').style.visibility = "visible";
    }else{
      document.getElementById('life2').style.visibility = "hidden";
      document.getElementById('life1').style.visibility = "hidden";
    }
    this._nbOfLife = value;
  }

  set enableOk(value){
    if(value > 10 || value < 0){
      document.getElementById('ok').disabled = true;
    }else if(value == "" || value == "-" || value == "e"){
      document.getElementById('ok').disabled = true;
    }else{
      document.getElementById('ok').disabled = false;
    }
    this._enableOk = value;
  }


  // set drawInGame(value){
  //   if(this._difficulty === 'easy'){
  //     if(this._nbOfLife > 0){
  //       if(value === this._randomNb){
  //         document.getElementById('answer').innerHTML = "Win!";
  //         document.getElementById('selectChance').disabled = true;
  //         document.getElementById('difficulty').disabled = true;
  //       }else if(value != this._randomNb && this._nbOfLife === 3){
  //         document.getElementById('life1').style.visibility = "hidden";
  //         document.getElementById('answer').innerHTML = "Ouch, try again, 2 chance remaining";
  //         document.getElementById('difficulty').disabled = true;
  //         document.getElementById('selectChance').disabled = true;
  //       }else if(value !== this._randomNb && this._nbOfLife === 2){
  //         document.getElementById('answer').innerHTML = "Ouch, try again.. Last chance";
  //         document.getElementById('life2').style.visibility = "hidden";
  //         document.getElementById('difficulty').disabled = true;
  //         document.getElementById('selectChance').disabled = true;
  //       }else{
  //         document.getElementById('life3').style.visibility = "hidden";
  //         document.getElementById('answer').innerHTML = "Game over!";
  //         document.getElementById('difficulty').disabled = true;
  //         document.getElementById('selectChance').disabled = true;
  //       }
  //     }
  //   }else{
  //     if(this._nbOfLife > 0){
  //       if(value === this._randomNb){
  //         document.getElementById('answer').innerHTML = "Win!";
  //         document.getElementById('selectChance').disabled = true;
  //         document.getElementById('difficulty').disabled = true;
  //       }else if(value != this._randomNb && this._nbOfLife === 3){
  //         document.getElementById('life1').style.visibility = "hidden";
  //         document.getElementById('answer').innerHTML = "Ouch, try again, 2 chance remaining";
  //         document.getElementById('difficulty').disabled = true;
  //         document.getElementById('selectChance').disabled = true;
  //       }else if(value != this.randomNb && this._nbOfLife === 2){
  //         document.getElementById('answer').innerHTML = "Ouch, try again.. Last chance";
  //         document.getElementById('life2').style.visibility = "hidden";
  //         document.getElementById('difficulty').disabled = true;
  //         document.getElementById('selectChance').disabled = true;
  //       }else{
  //         document.getElementById('life3').style.visibility = "hidden";
  //         document.getElementById('answer').innerHTML = "Game over!";
  //       }
  //     }
  //   }
  // }

}


// Game process
class Game extends Display{
  constructor(difficulty, nbOfLife, randomNb, reset){
    super(difficulty, nbOfLife);
    this._randomNb = randomNb;
    this._reset = reset;
  }

  get randomNb(){ 
    return this._randomNb;
  }

  set randomNb(value){
    this._randomNb = value;
  }

  functionality(value){ 
    if(this._difficulty === 'easy'){
      if(this._nbOfLife > 0){
        console.log(`Nb de vie avant: ${this._nbOfLife}`); // Check
        if(value === this._randomNb){
          this._nbOfLife = 0;
          console.log(`Win ! Nb de vie après: ${this._nbOfLife}`); // Check
        }else if(value !== this._randomNb && this._nbOfLife === 3){
          --this._nbOfLife;
          console.log(`Ouch, try again Nb de vie après: ${this._nbOfLife}`); // Check
        }else if(value !== this._randomNb && this._nbOfLife === 2){
          --this._nbOfLife;
          console.log(`Ouch, try again.. Nb de vie après: ${this._nbOfLife}`); // Check
        }else{
          --this._nbOfLife;
          console.log(`Game over Nb de vie après: ${this._nbOfLife}`); // Check
        }
      }
    }else{
      if(this._nbOfLife > 0){
        if(value === this._randomNb){
          this._nbOfLife = 0;
          console.log("Gagné"); // Check
        }else if(value !== this._randomNb && this._nbOfLife === 3){
          this._randomNb = Math.floor(Math.random()* 11);
          --this._nbOfLife;
          console.log(`Aie, recommence, reste: ${this._nbOfLife}`); // Check
        }else if(value !== this.randomNb && this._nbOfLife === 2){
          this._randomNb = Math.floor(Math.random()* 11);
          --this._nbOfLife;
          console.log(`Aie, recommence.. reste:  ${this._nbOfLife}`); // Check
        }else{
          --this._nbOfLife;
          console.log(`Perdu ${this._nbOfLife}`); // Check
        }
      }
    }
  }

  set reset(value){
    if(value){
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
      this._randomNb = Math.floor(Math.random()*11);
      this._nbOfLife = 1;
      console.log(`Après reset ${this._randomNb}`); // Check log
    }
  }
}

// Enable enter button
class Enable{
  constructor(enterButton){
    this._enterButton = enterButton;
  }

  set enterButton(value){
    if(value === "Enter"){
      document.getElementById('ok').click();
    }
  }
}


let displayElement = new Display('easy', 1);

// Color
document.getElementById('difficulty').addEventListener('change', () => {
  displayElement.difficulty = document.getElementById('difficulty').value;
});
// Nb of life
document.getElementById('selectChance').addEventListener('change', () => {
  displayElement.nbOfLife = parseInt(document.getElementById('selectChance').value);
});
// Ok button
document.getElementById('findNb').addEventListener('input', () => {
  displayElement.enableOk = document.getElementById('findNb').value;
});


let game = new Game('easy', 1);
game.randomNb = Math.floor(Math.random()*11);
console.log(game.randomNb); // Check

// game process
document.getElementById('ok').addEventListener('click', () => {
  game.functionality(parseInt(document.getElementById('findNb').value));
});
// Reset
document.getElementById('reset').addEventListener('click', () => {
  game.reset = document.getElementById('reset');
});


let enableEnter = new Enable();

document.getElementById('findNb').addEventListener('keydown', (e) => {
  enableEnter.enterButton = e.key;
});



