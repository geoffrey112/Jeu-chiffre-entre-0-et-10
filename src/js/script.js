// Ne pas mettre de logique dans Display, Game gère de pointer vers Diplay (voir sample.js)
// Ne pas set-get si on ne change pas de valeur directement
// Bien nommer nos variables/paramètres + créer des variable pour plusieurs document.getElement 

class Display{

  // displayColor
  // displayLife
  // okStatus
  // displayReset
  // disabledSelect

  displayColor(lvl){
    selectDifficulty = document.getElementById('difficulty');

    if(lvl === 'hard'){
      selectDifficulty.style.backgroundColor = "red";
    }else{
      selectDifficulty.style.backgroundColor = "#04f804";
    }
  }
  
}


class Game extends Display{

  // randomNb
  // Difficulty
  // nbOfLife
  // functionality
  // enableEnterButton
  // enableOk
  // reset

  
}



let displayElem = new Display('easy');
let process = new Game();




