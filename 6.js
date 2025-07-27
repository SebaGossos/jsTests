export default function sumPairs(numbers, result) {
  for ( let i=0; i < numbers.length; i++) {
    let num =  numbers[i]
    const restNum = result - num
    if(numbers.includes(restNum, i+1)) return [num, restNum]
  }

  return null
}

// export default function sumPairs(numbers, result) {
//   const vistos = {}
//   for ( let num of numbers ) {
//     const completo = result - num;
//     if(vistos[num]) return [completo, num]
//     vistos[completo] = 1
//   }

//   return null
// }



console.log( sumPairs([3, 5, 7, 2],  10) ); // → [3, 7]
console.log( sumPairs([-3, -2, 7, -5], 10) ); // → null
console.log( sumPairs([2, 2, 3, 1],  4)  ); // → [2, 2]
console.log( sumPairs([6, 7, 1, 2],  8)  ); // → [6, 2]
console.log( sumPairs([0, 2, 2, 3, -1, 1, 5], 6) ); // → [1, 5]
