// Trouver le chiffre entre 0 et 10 avec 1 chance. OK

// let chiffre = 5;
// let joueur = prompt("Entrez un nombre entre 0 et 10");

// if(joueur == chiffre){
//     alert("Bien joué! :)");
// }else{
//     alert("Perdu :(");
// }



// Trouver le chiffre (statique) entre 0 et 10 avec 3 chance et les annoncer. OK
// (Bonus) Prévenir si ce n'est pas entre 0 et 10. OK

// let chiffre = Math.floor(Math.random() * 11);
// console.log(chiffre); //(Verification chiffre statique)
// let joueur = prompt("Choisi un chiffre entre 0 et 10");
// let chance = 3;

// while(chance > 0){
//     if(joueur > 10 || joueur < 0){
//         alert("Ce n'est pas entre 0 et 10 :/");
//     }else if(joueur == chiffre){
//         alert("Gagnée!");
//         break;
//     }else if(chance == 1 && joueur != chiffre){
//         alert("Perdu :( " + "\nLe chiffre à trouver était: " + chiffre);
//         break;
//     }else{
//         --chance;
//         alert("Retente ta chance, il t'en reste: " + chance);
//     }

//     joueur = prompt("Choisi un chiffre entre 0 et 10");
    
// }



// De même, mais chiffre dynamique (aleatoire à chaque tour). OK

// let chiffre = Math.floor(Math.random() * 11);
// console.log(chiffre); //(Verification chiffre dynamique)
// let joueur = prompt("Choisi un chiffre entre 0 et 10");
// let chance = 3;

// while(chance > 0){
    
//     if(joueur > 10 || joueur < 0){
//         alert("Ce n'est pas entre 0 et 10 :/");
//     }else if(joueur == chiffre){
//         alert("Gagnée!");
//         break;
//     }else if(chance == 1 && joueur != chiffre){
//         alert("Perdu :( " + "\nLe chiffre à trouver était: " + chiffre);
//         break;
//     }else{
//       --chance;
//       alert("Retente ta chance, il t'en reste: " + chance);
//       chiffre = Math.floor(Math.random() * 11);
//       console.log(chiffre); //(Verification chiffre dynamique)
//     }

//     joueur = prompt("Choisi un chiffre entre 0 et 10");
    
// }



