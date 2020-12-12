// Between 0-10 only and no charac



// Difficult: Display color
let difficult = document.getElementById("difficulty");

difficult.addEventListener('change', function(){
  difficult = document.getElementById("difficulty").value;
  
  if(difficult === "easy"){
    document.getElementById("difficulty").style.backgroundColor = "#04f804";
  }else{
    document.getElementById("difficulty").style.backgroundColor = "red";
  }
  
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
console.log(`Chiffre à trouver easy/hard: ${randomNb}`); //Vérif chiffre à trouver

submit.addEventListener('click', function(){
  
  let nb = parseInt(document.getElementById("findNb").value);
  let difficult = document.getElementById("difficulty").value;

  if(difficult == "easy"){ // Easy
    while(nbOfChance > 0){
      if(nb ===  randomNb){
        document.getElementById("answer").innerHTML = "Gagnée!";
        nbOfChance = 0;
        break;
      }else if(nb != randomNb && nbOfChance === 3){
        document.getElementById("life1").style.visibility = "hidden";
        document.getElementById("answer").innerHTML = "Ouch, try again, 2 chance remaining";
        document.getElementById("difficulty").disabled = true;
        document.getElementById("selectChance").disabled = true;
        --nbOfChance;
        break;
      }else if(nb !== randomNb && nbOfChance === 2){
        document.getElementById("answer").innerHTML = "Ouch, try again.. Last chance";
        document.getElementById("life2").style.visibility = "hidden";
        document.getElementById("difficulty").disabled = true;
        document.getElementById("selectChance").disabled = true;
        --nbOfChance;
        break;
      }else{
        document.getElementById("life3").style.visibility = "hidden";
        document.getElementById("answer").innerHTML = "Perdu!";
        --nbOfChance;
        break;
      }
    }
  }else{ // Hard
    while(nbOfChance > 0){
      if(nb ===  randomNb){
        document.getElementById("answer").innerHTML = "Gagnée!";
        nbOfChance = 0;
        break;
      }else if(nb != randomNb && nbOfChance === 3){
        document.getElementById("life1").style.visibility = "hidden";
        document.getElementById("answer").innerHTML = "Ouch, try again, 2 chance remaining";
        randomNb = Math.floor(Math.random()* 11);
        console.log("Change random nb: " + randomNb); //Check change
        document.getElementById("difficulty").disabled = true;
        document.getElementById("selectChance").disabled = true;
        --nbOfChance;
        break;
      }else if(nb !== randomNb && nbOfChance === 2){
        document.getElementById("answer").innerHTML = "Ouch, try again.. Last chance";
        document.getElementById("life2").style.visibility = "hidden";
        randomNb = Math.floor(Math.random()* 11);
        console.log("Change random nb: " + randomNb); //Check change
        document.getElementById("difficulty").disabled = true;
        document.getElementById("selectChance").disabled = true;
        --nbOfChance;
        break;
      }else{
        document.getElementById("life3").style.visibility = "hidden";
        document.getElementById("answer").innerHTML = "Perdu!";
        --nbOfChance;
        break;
      }
    }
  }

});



// Enabled Ok
let nb = document.getElementById("findNb");

nb.addEventListener('input', function(){

  nb = document.getElementById("findNb").value;

  if(nb > 10 || nb < 0){
    document.getElementById("ok").disabled = true;
  }else if(nb == "" || nb == "-" || nb == "e"){
    document.getElementById("ok").disabled = true;
  }else{
    document.getElementById("ok").disabled = false;
  }

});



// Enter Ok
nb.addEventListener('keydown', function(){
  
});






// Reset
let reset = document.getElementById("reset");

reset.addEventListener('click', function(){
  
  document.getElementById("difficulty").style.backgroundColor = "#04f804";
  document.getElementById("life2").style.visibility = "hidden";
  document.getElementById("life1").style.visibility = "hidden";
  document.getElementById("life3").style.visibility = "visible";
  document.getElementById("answer").innerHTML = "";
  document.getElementById("difficulty").disabled = false;
  document.getElementById("selectChance").disabled = false;
  nbOfChance = 1;
  randomNb = Math.floor(Math.random()* 11);
  
  console.log(`Random après reset: ${randomNb}`); // Check chance after reset
});

