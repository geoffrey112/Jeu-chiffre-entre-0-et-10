 Trouver le chiffre entre 0 et 10 avec 1 chance. OK

 let chiffre = 5;
 let joueur = prompt("Entrez un nombre entre 0 et 10");

 if(joueur == chiffre){
     alert("Bien joué! :)");
 }else{
     alert("Perdu :(");
 }



// Trouver le chiffre (statique) entre 0 et 10 avec 3 chance et les annoncer. OK
// (Bonus) Prévenir si ce n'est pas entre 0 et 10. OK

<<<<<<< HEAD
// let chiffre = Math.floor(Math.random() * 11);
=======
// let chiffre = Math.floor(Math.random() * 10);
>>>>>>> 022bf96e8dc44a1fa3f030bed7c4ea6b3aa8d17a
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

<<<<<<< HEAD
// let chiffre = Math.floor(Math.random() * 11);
// console.log(chiffre); //(Verification chiffre dynamique)
// let joueur = prompt("Choisi un chiffre entre 0 et 10");
// let chance = 3;

// while(chance > 0){
    
//     if(joueur > 10 || joueur < 0){
=======
// let chiffre = Math.floor(Math.random() * 10);
// console.log(chiffre); //(Verification chiffre dynamique)
// let joueur = prompt("Choisi un chiffre entre 0 et 10");
// let chance = 2;

// while(chance > -1){
    
//     if(chance > -1 && joueur > 10 || joueur < 0){
>>>>>>> 022bf96e8dc44a1fa3f030bed7c4ea6b3aa8d17a
//         alert("Ce n'est pas entre 0 et 10 :/");
//     }else if(joueur == chiffre){
//         alert("Gagnée!");
//         break;
<<<<<<< HEAD
//     }else if(chance == 1 && joueur != chiffre){
//         alert("Perdu :( " + "\nLe chiffre à trouver était: " + chiffre);
//         break;
//     }else{
//       --chance;
//       alert("Retente ta chance, il t'en reste: " + chance);
//       chiffre = Math.floor(Math.random() * 11);
//       console.log(chiffre); //(Verification chiffre dynamique)
=======
//     }else if(chance == 0 && joueur != chiffre){
//         alert("Perdu :( " + "\nLe chiffre à trouver était: " + chiffre);
//         break;
//     }else{
//         alert("Retente ta chance, il t'en reste: " + chance);
//         --chance;
//         chiffre = Math.floor(Math.random() * 10);
//         console.log(chiffre); //(Verification chiffre dynamique)
>>>>>>> 022bf96e8dc44a1fa3f030bed7c4ea6b3aa8d17a
//     }

//     joueur = prompt("Choisi un chiffre entre 0 et 10");
    
// }



