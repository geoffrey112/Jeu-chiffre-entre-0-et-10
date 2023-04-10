class Display{
  constructor(difficultElem, chanceElem, msg){
    this.difficultElem = difficultElem;
    this.chanceElem = chanceElem;
    this.okButton = document.getElementById('ok');
    this.msg = msg;
    this.life1 = document.getElementById('life1');
    this.life2 = document.getElementById('life2');
    this.life3 = document.getElementById('life3');
  }

  init(){
    this.displayColor();
    this.displayLife();
    this.okStatut(true);
    this.disableSelect();
    this.reset();
  }

  displayColor(){
    this.difficultElem = document.getElementById('difficulty');

    this.difficultElem.addEventListener('change', () =>{
      if(this.difficultElem.value == "hard"){
        this.difficultElem.style.backgroundColor = "red";
        this.messageMode("(The hard mode change the random number every turn)");
      }else if(this.difficultElem.value == "easy"){
        this.difficultElem.style.backgroundColor = "#04f804";
        this.messageMode("");
      }
    });
  }

  displayLife(){
    this.chanceElem = document.getElementById('selectChance');

    this.chanceElem.addEventListener('change', () =>{ // Before game start (display life)
      if(this.chanceElem.value == 2){
        this.life1.style.visibility = "hidden";
        this.life2.style.visibility = "visible";
      }else if(this.chanceElem.value == 3){
        this.life1.style.visibility = "visible";
        this.life2.style.visibility = "visible";
      }else if(this.chanceElem.value == 1){
        this.life1.style.visibility = "hidden";
        this.life2.style.visibility = "hidden";
      }
    });

  }

  looseLife(){
    if(this.chanceElem.value == 2){
      this.life1.style.visibility = 'hidden';
    }else if(this.chanceElem.value == 1){
      this.life2.style.visibility = 'hidden';
    }else if(this.chanceElem.value == 0){
      this.life3.style.visibility = 'hidden';
    }
  }

  okStatut(statut){
    this.okButton.disabled = statut;
  }

  message(){
    this.msg = document.getElementById('answer');

    if(this.randomNum == this.input.value){
      this.msg.innerHTML = "Win!";
    }else if(this.chanceElem.value == 0){
      this.msg.innerHTML = "Game over <img src='../../rick-sad.png' alt='Rick-sad' width='50'>";
    }else if(this.chanceElem.value == 1){
      this.msg.innerHTML = "Ouch, try again.. Last chance";
    }else if(this.chanceElem.value == 2){
      this.msg.innerHTML = "Ouch, try again, 2 chance remaining";
    }

  }

  messageMode(msg){
    const msgHardMode = document.getElementById('descHard');
    msgHardMode.innerHTML = msg;
  }

  disableSelect(){
    this.okButton.addEventListener('click', () =>{
      this.difficultElem.disabled = true;
      this.chanceElem.disabled = true;
    });
  }
  
  reset(){
    let resetElem = document.getElementById('reset'); 
    
    resetElem.addEventListener('click', () =>{
      location.reload();
    });
  }



}

class Game extends Display{
  constructor(chanceElem, difficultElem, okButton, randomNum, input){
    super(chanceElem, difficultElem, okButton);

    this.chanceElem = document.getElementById('selectChance');
    this.difficultElem = document.getElementById('difficulty');
    this.randomNum = randomNum;
    this.input = input;
  }

  init(){
    this.randomNb();
    this.enableOkButton();
    this.process();
  }
  

  randomNb(){
    this.randomNum = Math.floor(Math.random()*11);
    // console.log(this.randomNum);
  }

  enableOkButton(){
    this.input = document.getElementById('findNb');

    this.input.addEventListener('input', () =>{
      if(this.input.value != "" && this.input.value <= 10 && this.input.value >= 0){
        this.okStatut(false);
      }else{
        this.okStatut(true);
      }
    });
  }

  process(){

    this.okButton.addEventListener('click', () =>{
      
      if(this.difficultElem.value == 'easy'){
        if(this.chanceElem.value > 0){
          if(this.randomNum == this.input.value){
            this.chanceElem.value = 0;
            this.message();
          }else if(this.randomNum < this.input.value || this.randomNum > this.input.value){
            --this.chanceElem.value;
            this.looseLife();
            this.message();
          }
        }
      }else if(this.difficultElem.value == 'hard'){
        if(this.chanceElem.value > 0){
          if(this.randomNum == this.input.value){
            this.chanceElem.value = 0;
            this.message();
          }else if(this.randomNum < this.input.value || this.randomNum > this.input.value){
            --this.chanceElem.value;
            this.looseLife();
            this.message();
            this.randomNum = Math.floor(Math.random()*11);
            // console.log(`Après reset: ${this.randomNum}`);
          }
        }
      }
      
    });    
    
  }
  
}



let displayElem = new Display();
displayElem.init();


let process = new Game();
process.init();
