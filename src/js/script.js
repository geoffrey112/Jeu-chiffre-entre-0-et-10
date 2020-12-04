// If difficult Easy, the random number are defined 1 more time
// If difficult Hard, the random number are defined every round

//If number are inside, enabled "Ok" button 

// Re-boot game with button

// Between 0-10 only and no charac



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



// Game
let selectDifficulty = document.getElementById("difficulty");
selectDifficulty.addEventListener('change', function(){
  selectDifficulty = document.getElementById("difficulty").value;

  if(selectDifficulty == "easy"){
    document.getElementById("difficulty").style.backgroundColor = "#04f804";
    
  }else{
    document.getElementById("difficulty").style.backgroundColor = "red";
  }

});


// submit = document.getElementById("submit");
    // submit.addEventListener('click', function(nb){
    //   nb = console.log("test");
    // });