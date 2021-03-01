// Display Nb of life - Color - Ok button
class Display{
  constructor(difficulty, nbOfLife, enableOk){
    this._difficulty = difficulty;
    this._nbOfLife = nbOfLife;
    this._enableOk = enableOk;
  }

  get difficulty(){
    return this._difficulty;
  }

  set difficulty(value){  
    if(value === 'easy'){
      document.getElementById("difficulty").style.backgroundColor = "#04f804";
    }else{
      document.getElementById("difficulty").style.backgroundColor = "red";
    }
    this._difficulty = value;
  }

  get nbOfLife(){
    return this._nbOfLife;
  }

  set nbOfLife(value){
    if(value == 2){
      document.getElementById("life2").style.visibility = "visible";
      document.getElementById("life1").style.visibility = "hidden";
      document.getElementById("answer").innerHTML = "";
    }else if(value == 3){
      document.getElementById("life2").style.visibility = "visible";
      document.getElementById("life1").style.visibility = "visible";
      document.getElementById("answer").innerHTML = "";
    }else{
      document.getElementById("life2").style.visibility = "hidden";
      document.getElementById("life1").style.visibility = "hidden";
      document.getElementById("answer").innerHTML = "";
    }
    this._nbOfLife = value;
  }

  get enableOk(){
    return this._enableOk;
  }

  set enableOk(value){
    if(value > 10 || value < 0){
      document.getElementById("ok").disabled = true;
    }else if(value == "" || value == "-" || value == "e"){
      document.getElementById("ok").disabled = true;
    }else{
      document.getElementById("ok").disabled = false;
    }
    this._enableOk = value;
  }

}


let displayElement = new Display('easy', 1);

// Color
document.getElementById('difficulty').addEventListener('change', () => {
  displayElement.difficulty = document.getElementById('difficulty').value;
});
// Nb of life
document.getElementById('selectChance').addEventListener('change', () => {
  displayElement.nbOfLife = document.getElementById('selectChance').value;
});
// Ok button
document.getElementById('findNb').addEventListener('input', () => {
  displayElement.enableOk = document.getElementById('findNb').value;
});



// Game
class Game extends Display{
  constructor(difficulty, nbOfLife, randomNb, functionality, reset){
    super(difficulty, nbOfLife);
    this._randomNb = randomNb;
    this._functionality = functionality;
    this._reset = reset;
  }

  get randomNb(){
    return this._randomNb;
  }

  set randomNb(value){
    this._randomNb = value;
  }

  get functionality(){
    return this._functionality;
  }

  set functionality(value){
    if(value === this._randomNb && this._difficulty === 'easy'){
      console.log("Test random OK");
      // Prend la valeur hard aussi
    }
    
  }

  get reset(){
    return this._reset;
  }

  set reset(value){
    if(value){
      document.getElementById("difficulty").style.backgroundColor = "#04f804";
      document.getElementById("difficulty").value = "easy";
      document.getElementById("life2").style.visibility = "hidden";
      document.getElementById("life1").style.visibility = "hidden";
      document.getElementById("life3").style.visibility = "visible";
      document.getElementById("answer").innerHTML = "";
      document.getElementById("difficulty").disabled = false;
      document.getElementById("selectChance").disabled = false;
      document.getElementById("selectChance").value = 1;
      document.getElementById("ok").disabled = true;
      document.getElementById("findNb").value = "";
      this._randomNb = Math.floor(Math.random()*11);
      // Remettre nbOfLife à 1 après reset
      console.log("Après reset: " + this._randomNb);
    }
  }

}

let game = new Game('easy');
game.randomNb = Math.floor(Math.random()*11);
console.log("Random " + game.randomNb);

// game process
document.getElementById('ok').addEventListener('click', () => {
  game.functionality = parseInt(document.getElementById('findNb').value);
});

// Reset
document.getElementById('reset').addEventListener('click', () => {
  game.reset = document.getElementById('reset');
});




// Enable enter button
class Enable{
  constructor(enterButton){
    this._enterButton = enterButton;
  }

  get enterButton(){
    return this._enterButton;
  }

  set enterButton(value){
    if(value === "Enter"){
      document.getElementById('ok').click();
    }
  }
}

let enableEnter = new Enable();

document.getElementById('findNb').addEventListener('keydown', (e) => {
  enableEnter.enterButton = e.key;
});



// Game
// let randomNb = Math.floor(Math.random()* 11);
// let nbOfChance = parseInt(document.getElementById("selectChance").value);
// let submit = document.getElementById("ok");

// submit.addEventListener('click', function(){
  
//   let nb = parseInt(document.getElementById("findNb").value);
//   let difficult = document.getElementById("difficulty").value;

//   if(difficult == "easy"){ // Easy
//     if(nbOfChance > 0){
//       if(nb ===  randomNb){
//         document.getElementById("answer").innerHTML = "Gagnée!";
//         nbOfChance = 0;
//       }else if(nb != randomNb && nbOfChance === 3){
//         document.getElementById("life1").style.visibility = "hidden";
//         document.getElementById("answer").innerHTML = "Ouch, try again, 2 chance remaining";
//         document.getElementById("difficulty").disabled = true;
//         document.getElementById("selectChance").disabled = true;
//         --nbOfChance;
//       }else if(nb !== randomNb && nbOfChance === 2){
//         document.getElementById("answer").innerHTML = "Ouch, try again.. Last chance";
//         document.getElementById("life2").style.visibility = "hidden";
//         document.getElementById("difficulty").disabled = true;
//         document.getElementById("selectChance").disabled = true;
//         --nbOfChance;
//       }else{
//         document.getElementById("life3").style.visibility = "hidden";
//         document.getElementById("answer").innerHTML = "Perdu!";
//         --nbOfChance;
//       }
//     }
//   }else{ // Hard
//     if(nbOfChance > 0){
//       if(nb ===  randomNb){
//         document.getElementById("answer").innerHTML = "Gagnée!";
//         nbOfChance = 0;
//       }else if(nb != randomNb && nbOfChance === 3){
//         document.getElementById("life1").style.visibility = "hidden";
//         document.getElementById("answer").innerHTML = "Ouch, try again, 2 chance remaining";
//         randomNb = Math.floor(Math.random()* 11);
//         document.getElementById("difficulty").disabled = true;
//         document.getElementById("selectChance").disabled = true;
//         --nbOfChance;
//       }else if(nb !== randomNb && nbOfChance === 2){
//         document.getElementById("answer").innerHTML = "Ouch, try again.. Last chance";
//         document.getElementById("life2").style.visibility = "hidden";
//         randomNb = Math.floor(Math.random()* 11);
//         document.getElementById("difficulty").disabled = true;
//         document.getElementById("selectChance").disabled = true;
//         --nbOfChance;
//       }else{
//         document.getElementById("life3").style.visibility = "hidden";
//         document.getElementById("answer").innerHTML = "Perdu!";
//         --nbOfChance;
//       }  
//     }
//   }

// });







