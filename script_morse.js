//ETAPE 1 
let motADecomposer = "Hello, world";
let enMajuscules =motADecomposer.toUpperCase(); 
function getLatinCharacterList(texte){
  let letters = enMajuscules.split('');
  return letters;
    
}
let decompose = getLatinCharacterList(motADecomposer);
console.log(decompose);


//ETAPE 2 AJOUT DU DICO
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

function translateLatinCharacter(caractereLatin){
  for (let property in latinToMorse){
    if (property === caractereLatin){
      console.log(latinToMorse[property]);
    }
  }
}
//translateLatinCharacter('A');
//translateLatinCharacter('B');
translateLatinCharacter(decompose);

//ETAPE 3 

//console.log(enMajuscules);
  
/* function encode(text){
  let table = getLatinCharacterList(decompose);
  for(let i=0; i < table.length; i++){
    console.log(translateLatinCharacter(table[i]));
  }
} */
//encode(enMajuscules);
