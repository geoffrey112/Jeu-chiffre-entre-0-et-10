// If difficult Easy, the random number are defined 1 more time
// If difficult Hard, the random number are defined every round

//If number are inside, enabled "Ok" button 

// Between 0-10 only and no charac



// Select: Display color
let select = document.getElementById("difficulty");

select.addEventListener('change', function(){
  select = document.getElementById("difficulty").value;
  
  if(select === "easy"){
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



// Game easy with 1-2 life
let randomNb = Math.floor(Math.random()* 11);
let nbOfChance = parseInt(document.getElementById("selectChance").value);
console.log(`Chiffre à trouver: ${randomNb}`); //Vérif chiffre à trouver
let submit = document.getElementById("ok");


submit.addEventListener('click', function(){
  
  let nb = parseInt(document.getElementById("findNb").value);
  
  
  while(nbOfChance > 0){
    if(nb ===  randomNb){
      document.getElementById("answer").innerHTML = "Gagnée!";
      nbOfChance = 0;
      console.log(nbOfChance); // Check chance
      break;
    }else if(nb != randomNb && nbOfChance == 3){
      document.getElementById("life1").style.visibility = "hidden";
      document.getElementById("answer").innerHTML = "Ouch, try again, 2 chance remaining";
      --nbOfChance;
      console.log(nbOfChance); // Check chance
      break;
    }else if(nb !== randomNb && nbOfChance == 2){
      document.getElementById("answer").innerHTML = "Ouch, try again.. Last chance";
      document.getElementById("life2").style.visibility = "hidden";
      --nbOfChance;
      console.log(nbOfChance); // Check chance
      break;
    }else{
      document.getElementById("life3").style.visibility = "hidden";
      document.getElementById("answer").innerHTML = "Perdu!";
      --nbOfChance;
      console.log(nbOfChance); // Check chance
      break;
    }
    
  }
  
});



// Reset
let reset = document.getElementById("reset");
reset.addEventListener('click', function(){
  
  color = document.getElementById("difficulty").style.backgroundColor = "#04f804";
  life = document.getElementById("life2").style.visibility = "hidden";
  life = document.getElementById("life1").style.visibility = "hidden";
  life = document.getElementById("life3").style.visibility = "visible";
  gameAnswer = document.getElementById("answer").innerHTML = "";
  nbOfChance = 1;
  randomNb = Math.floor(Math.random()* 11);
  
  console.log(`Random après reset: ${randomNb}`); // Check chance after reset
});

