//etape 1

let toto = "Hello, world";

function getLatinCharacterList(text) {
  let characters = [];
  for (let i = 0; i < text.length; i++){
    characters.push(text[i])
   /*  console.log(text[i]); */
  }

  return characters
}
/* console.log(getLatinCharacterList(toto)); */

function getLatinCharacterList2(text) {
  
  return text.split("");
}
/* console.log(getLatinCharacterList2(toto)); */


//etape 2
const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

function translateLatinCharacter(tata) {
  //possibilité de le faire en une ligne en écrivant ici return latinToMorse[tata]
  //console.log(tata)
  for (let key in latinToMorse){
    if (key == tata) {
      return latinToMorse[key];
      }
    //console.log(key + ": " + latinToMorse[key]);
  }
}
console.log(translateLatinCharacter("A"))

function translateLatinCharacter2(tata) {
  return latinToMorse[tata]
}
console.log(translateLatinCharacter2("A"))


//etape 3

function encode(texte) {
  let table = getLatinCharacterList2(texte);
  for (let i = 0; i < table.length; i++){
    console.log(translateLatinCharacter2(table[i]));
  }
}
encode("COUCOU")