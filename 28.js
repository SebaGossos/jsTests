// Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. Cada regalo está representado por una cadena. Santa Claus tiene un trineo que puede llevar un peso limitado, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

// Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada reno tiene un límite de peso máximo que puede llevar. El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.

// Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers) que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. Las cajas de regalos no se pueden dividir.


// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

// function distributeGifts(packOfGifts, reindeers) {
//   let sumOfGifts = 0;
//   let sumOfReindeers = 0;
//   let result = 0;

//   for ( let gift of packOfGifts ) sumOfGifts += gift.length
//   for ( let r of reindeers ) sumOfReindeers += (r.length * 2)
//   if(sumOfGifts > sumOfReindeers) return 0
//   console.log( sumOfGifts, sumOfReindeers)
//   while((sumOfGifts * (result+1)) <= sumOfReindeers ) result++
//   return result
// }

function distributeGifts(packOfGifts, reindeers) {
  const totalGiftsWeight = packOfGifts.reduce((sum, gift) => sum + gift.length, 0)
  const totalReinderCapacity = reindeers.reduce((sum, r) => sum + r.length * 2, 0)

  return Math.floor(totalReinderCapacity / totalGiftsWeight)
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]
console.log( distributeGifts(packOfGifts, reindeers) )// 2
console.log( distributeGifts(['a', 'b', 'c'], ['d', 'e']) )// 2

// Cosas a tener en cuenta:

// Las cajas de regalos no se pueden dividir.
// Los nombres de los regalos y los renos siempre serán mayores que 0.