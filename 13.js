// ¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

// Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

// Sólo tienes que tener en cuenta unas cosillas ✌️:

// Si el array está vacío, devuelve un array vacío
// Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
// Por suerte, cada posición del array siempre tiene la misma longitud...

// export default function wrapGifts(gifts) {
//   if (gifts.length === 0 ) return [];
  
//   return gifts.reduce((acc, curr, i, arr) => {
//     console.log(acc)
//     let lengthCurr = '*' + '*'.repeat(curr.length) + '*'
//     if( i === 0 && arr.length - 1 === i ) return [lengthCurr, '*' + curr + '*', lengthCurr]
//     if( i === 0 ) return [lengthCurr, '*' + curr + '*']
//     if( arr.length - 1 === i ) return [...acc, '*' + curr + '*', lengthCurr]
//     return [...acc, '*' + curr + '*']
//   }, [])
   
// }

function wrapGifts(gifts) {
  if (gifts.length === 0) return [];
  const width = gifts[0].length + 2;
  const border = '*'.repeat(width);
  return [
    border,
    ...gifts.map(gift => `*${gift}*`),
    border
  ];
}



// console.log(wrapGifts(["📷", "⚽️"]))
console.log(wrapGifts(["🏀"]))
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/
console.log(wrapGifts(["🏈🎸", "🎮🧸", "🎮🧸"]))
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

// console.log(wrapGifts(["📷"]))
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/