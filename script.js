// Trouver le chiffre entre 1 et 10 avec 1 chance. OK

// let chiffre = 7;
// let utilisateur = prompt("Entrez un nombre entre 1 et 10");
// let essaie = 3;

// if(utilisateur == chiffre){
//     alert("Bien joué! :)");
// }else{
//     alert("Perdu :(");
// }



// Trouver le chiffre (statique) entre 0 et 10 avec 3 chance et les annoncer
// (Bonus) si il dépasse 10 prevenir et ne pas enlever de chance

let chiffre = Math.floor(Math.random() * 10);
// console.log(chiffre); (Verification chiffre statique)
let joueur = prompt("Choisi un chiffre entre 0 et 10");
let chance = 2;

while(chance > 0){
    if(joueur != chiffre){
        alert("Retente ta chance, il t'en reste: " + chance);
        --chance;
    }else{
        alert("Gagnée !");
        break;
    }
    
    joueur = prompt("Choisi un chiffre entre 0 et 10");
    
    if(chance == 0 && joueur == chiffre){
        alert("Gagnée!");
    }else if(chance == 0 && joueur != chiffre){
        alert("Le chiffre à trouver était " + chiffre + "\nPerdu :(");
    }
    
}



// De même, mais chiffre dynamique (aleatoire à chaque tour)

// let chiffre = Math.floor(Math.random() * 10);
// // console.log(chiffre); (Verification chiffre dynamique)
// let joueur = prompt("Choisi un chiffre entre 0 et 10");
// let chance = 2;



// while(chance > 0){
//     if(joueur != chiffre){
//         alert("Retente ta chance, il t'en reste: " + chance);
//         --chance;
//         chiffre = Math.floor(Math.random() * 10);
//         // console.log(chiffre); (Verification chiffre aléatoire)
//     }else{
//         alert("Gagnée! :)");
//         break;
//     }
    
//     joueur = prompt("Choisi un chiffre entre 0 et 10");

//     if(chance == 0 && joueur == chiffre){
//         alert("Gagnée! :)");
//     }else if(chance == 0 && joueur != chiffre){
//         alert("Le chiffre à trouver était " + chiffre + "\nPerdu :(");
//     }

    
// }



