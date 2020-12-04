// If difficult Easy, the random number are defined 1 more time
// If difficult Hard, the random number are defined every round

//If number are inside, enabled "Ok" button 

// Re-boot game with button

// Between 0-10 only and no charac




let select = document.getElementById("selectChance");

select.addEventListener('change', function(){
  select = document.getElementById("selectChance").value;

  if(select == 2){
    document.getElementById("life2").style.visibility = "visible";
    document.getElementById("life1").style.visibility = "hidden";
  }else if(select == 3){
    document.getElementById("life2").style.visibility = "visible";
    document.getElementById("life1").style.visibility = "visible";
  }else{
    document.getElementById("life2").style.visibility = "hidden";
    document.getElementById("life1").style.visibility = "hidden";
  }
  
});




