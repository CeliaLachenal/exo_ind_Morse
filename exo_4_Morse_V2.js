//ETAPE 1 : décomposer une chaine de caractère en lettres dasn un tableau.
//Utiliser le spread operator
let texteADecomposer = "Hello world";
let txtEnMaj = texteADecomposer.toLocaleUpperCase();
console.log(txtEnMaj);

function getLatinCharacterList(texte) {
  let txtDecompose = [...txtEnMaj];
  console.log(txtDecompose);
  return txtDecompose;
}

let txtFinal = getLatinCharacterList(txtEnMaj);
//console.log(txtFinal);

//ETAPE 2 : Ajout du dico qui va nous permettre d'établir une table de correspondance entre l'alphabet Latin et l'aphabet en morse

const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

function translateLatinCharacter(caractere) {
  for (const property in latinToMorse) {
    if (property === caractere) {
      //console.log(property + " : " + latinToMorse[property]);
      return `${property}: ${latinToMorse[property]}`;
    }
  }
  return caractere;
}

let transforme = translateLatinCharacter("A");
console.log(transforme);

function encode(phrase) {
  for (let i = 0; i < phrase.length; i++) {
    console.log(translateLatinCharacter(phrase[i]));
  }
}

encode(txtFinal);
