// If difficult Easy, the random number are defined 1 more time
// If difficult Hard, the random number are defined every round

//If number are inside, enabled "Ok" button 

// Re-boot game with button

// Between 0-10 only and no charac



// Reset
let reset = document.getElementById("reset");
reset.addEventListener('click', function(){
  
  color = document.getElementById("difficulty").style.backgroundColor = "#04f804";
  life = document.getElementById("life2").style.visibility = "hidden";
  life = document.getElementById("life1").style.visibility = "hidden";
  life = document.getElementById("life3").style.visibility = "visible";
  gameAnswer = document.getElementById("answer").innerHTML = "";
  nbOfChance = 1;
  
  console.log(nbOfChance);
});



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
  selectChance = document.getElementById("selectChance").value;
  
  if(selectChance == 2){
    document.getElementById("life2").style.visibility = "visible";
    document.getElementById("life1").style.visibility = "hidden";
  }else if(selectChance == 3){
    document.getElementById("life2").style.visibility = "visible";
    document.getElementById("life1").style.visibility = "visible";
  }else{
    document.getElementById("life2").style.visibility = "hidden";
    document.getElementById("life1").style.visibility = "hidden";
  }
  
});



// Game easy with 1 life
let randomNb = Math.floor(Math.random()* 11);
let nbOfChance = document.getElementById("selectChance").value;
let submit = document.getElementById("ok");

submit.addEventListener('click', function(){

  nb = parseInt(document.getElementById("findNb").value);

  while(nbOfChance > 0){
    if(nb ===  randomNb){
      document.getElementById("answer").innerHTML = "Gagnée!";
      --nbOfChance;
      break;
    }else if(nb > randomNb || nb < randomNb){
      document.getElementById("answer").innerHTML = "Perdu!";
      document.getElementById("life3").style.visibility = "hidden";
      --nbOfChance;
      break;
    }
  }

});