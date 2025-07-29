// En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

// Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

// Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a.

// Vamos a ver unos ejemplos de frases:



export default function pangram(letter) {
  const newLetter = letter.toLowerCase().replace(/(?<!n)[\u0300-\u036f]/g, "") // restauramos ñ;
  const alphabet = new Set("abcdefghijklmnñopqrstuvwxyz");
  const counterLetter = new Set()

  for( let char of newLetter ) if( alphabet.has(char) && !counterLetter.has(char)) counterLetter.add(char)

  return alphabet.size === counterLetter.size
}  



console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')) // true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false