// Ne pas mettre de logique dans Display, Game gère de pointer vers Diplay (voir sample.js)
// Ne pas set get si on ne change pas de valeur directement
// Bien nommer nos variables/paramètres + créer des variable pour plusieurs document.getElem 

class Display{

  // displayBackground
  // displayLife
  // okStatus
  // displayReset
  // disabledSelect


  method1(){
    return "Une chaine";
  }
  
}


class Game extends Display{

  // randomNb
  // Difficulty
  // nbOfLife
  // functionality
  // enableEnterButton
  // enableOk

  recupMethod1(){
    return this.method1();
  }

}

let enfant = new Enfant();
console.log(enfant.recupMethod1());

