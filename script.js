// Trouver le chiffre entre 1 et 10 avec 1 chance. OK

// let chiffre = 7;
// let utilisateur = prompt("Entrez un nombre entre 1 et 10");
// let essaie = 3;

// if(utilisateur == chiffre){
//     alert("Bien joué! :)");
// }else{
//     alert("Perdu :(");
// }



// Trouver le chiffre entre 1 et 10 avec 3 chance et annoncer les chances
// Bonus si il dépasse 10 prevenir et ne pas enlever de chance

let joueur = prompt("Choisi un chiffre entre 1 et 10");
let chance = 2;
let chiffre = 5;

while(chance > 0){
    if(joueur != chiffre){
        console.log("Retente ta chance il t'en reste: " + chance);
        joueur = prompt("Reessaye, choisi un chiffre entre 1 et 10");
    }else if(joueur == chiffre){
        console.log("Gagnée !");
        break;
    }

    --chance
    
    if(chance == 0){
        console.log("Perdu :(");
    }
}

// à 1 chance restante: Perdu s'affiche à la place de gagnée






