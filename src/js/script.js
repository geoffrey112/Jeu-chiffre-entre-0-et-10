
class Display{
  constructor(select){
    this._select = select;
  }

  get select(){
    return this._select;
  }

  set select(value){  

    if(value === 'easy'){
      document.getElementById("difficulty").style.backgroundColor = "#04f804";
    }else{
      document.getElementById("difficulty").style.backgroundColor = "red";
    }
    this._select = value;

  }


}

let displayColor = new Display();
document.getElementById('difficulty').addEventListener('change', function(){
  displayColor.select = document.getElementById('difficulty').value;
});



















// Display number of life
let selectChance = document.getElementById("selectChance");

selectChance.addEventListener('change', function(){
  
  selectChance = parseInt(document.getElementById("selectChance").value);
  
  if(selectChance == 2){
    document.getElementById("life2").style.visibility = "visible";
    document.getElementById("life1").style.visibility = "hidden";
    document.getElementById("answer").innerHTML = "";
    nbOfChance = 2;
  }else if(selectChance == 3){
    document.getElementById("life2").style.visibility = "visible";
    document.getElementById("life1").style.visibility = "visible";
    document.getElementById("answer").innerHTML = "";
    nbOfChance = 3;
  }else{
    document.getElementById("life2").style.visibility = "hidden";
    document.getElementById("life1").style.visibility = "hidden";
    document.getElementById("answer").innerHTML = "";
    nbOfChance = 1;
  }
  
});



// Game
let randomNb = Math.floor(Math.random()* 11);
let nbOfChance = parseInt(document.getElementById("selectChance").value);
let submit = document.getElementById("ok");

submit.addEventListener('click', function(){
  
  let nb = parseInt(document.getElementById("findNb").value);
  let difficult = document.getElementById("difficulty").value;

  if(difficult == "easy"){ // Easy
    if(nbOfChance > 0){
      if(nb ===  randomNb){
        document.getElementById("answer").innerHTML = "Gagnée!";
        nbOfChance = 0;
      }else if(nb != randomNb && nbOfChance === 3){
        document.getElementById("life1").style.visibility = "hidden";
        document.getElementById("answer").innerHTML = "Ouch, try again, 2 chance remaining";
        document.getElementById("difficulty").disabled = true;
        document.getElementById("selectChance").disabled = true;
        --nbOfChance;
      }else if(nb !== randomNb && nbOfChance === 2){
        document.getElementById("answer").innerHTML = "Ouch, try again.. Last chance";
        document.getElementById("life2").style.visibility = "hidden";
        document.getElementById("difficulty").disabled = true;
        document.getElementById("selectChance").disabled = true;
        --nbOfChance;
      }else{
        document.getElementById("life3").style.visibility = "hidden";
        document.getElementById("answer").innerHTML = "Perdu!";
        --nbOfChance;
      }
    }
  }else{ // Hard
    if(nbOfChance > 0){
      if(nb ===  randomNb){
        document.getElementById("answer").innerHTML = "Gagnée!";
        nbOfChance = 0;
      }else if(nb != randomNb && nbOfChance === 3){
        document.getElementById("life1").style.visibility = "hidden";
        document.getElementById("answer").innerHTML = "Ouch, try again, 2 chance remaining";
        randomNb = Math.floor(Math.random()* 11);
        document.getElementById("difficulty").disabled = true;
        document.getElementById("selectChance").disabled = true;
        --nbOfChance;
      }else if(nb !== randomNb && nbOfChance === 2){
        document.getElementById("answer").innerHTML = "Ouch, try again.. Last chance";
        document.getElementById("life2").style.visibility = "hidden";
        randomNb = Math.floor(Math.random()* 11);
        document.getElementById("difficulty").disabled = true;
        document.getElementById("selectChance").disabled = true;
        --nbOfChance;
      }else{
        document.getElementById("life3").style.visibility = "hidden";
        document.getElementById("answer").innerHTML = "Perdu!";
        --nbOfChance;
      }  
    }
  }

});



// Reset
let reset = document.getElementById("reset");

reset.addEventListener('click', function(){
  
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
  nbOfChance = 1;
  randomNb = Math.floor(Math.random()* 11);
});



// Enabled Ok
let enter = document.getElementById("findNb");

enter.addEventListener('input', function(){

  enter = document.getElementById("findNb").value;

  if(enter > 10 || enter < 0){
    document.getElementById("ok").disabled = true;
  }else if(enter == "" || enter == "-" || enter == "e"){
    document.getElementById("ok").disabled = true;
  }else{
    document.getElementById("ok").disabled = false;
  }
});



// Enable Enter button
enter.addEventListener('keydown', function(e){
  if(e.key === "Enter"){
    submit.click();
  }
});
