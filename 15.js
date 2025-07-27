// ¡Estamos haciendo los últimos ajustes para el trineo de Santa Claus!

// Como ya sabes, el trineo es volador y estamos ajustando el motor para que haga parabolas lo más óptimas posibles. Para esto el salto debe ser siempre hacia arriba y, a partir del punto más alto, debe bajar siempre hacia abajo...

// Nuestro mecánico de confianza, Kiko Belfs, que tiene un Tesla genial, nos ha explicado que los saltos se pueden ver como arrays... y que sólo tenemos que asegurarnos que los números suben y bajan de forma correcta. También nos avisa que sólo pasaremos arrays de, como mínimo, tres posiciones.

// Nos ha pasado algunos ejemplos de cómo debería ser nuestra función y algunos resultados:

// Lo importante: recorrer el array de izquierda a derecha para ver que la subida es siempre estricta, detectar el punto más alto y entonces ver que la bajada es estricta hacia abajo...

// export default function checkSledJump(heights) {
//   const heightsCounts = heights.length
//   if(heightsCounts < 3 ) return false
  
//   let isGrow = true
//   let isDecreasing = true

//   let index = 0
  
//   for (let h of heights) {
//     if(index === 0) {
//       index++
//       continue
//     };
//     if( h === heights[ index - 1 ] ) {
//       return false
//     }

//     if( h > heights[ index - 1 ] && !isGrow ) {
//       console.log(33)
//       return false
//     }
//     if( h > heights[ index - 1 ] && isGrow ) {
//       index++
//       continue
//     }
//     if( h < heights[ index - 1 ] && isDecreasing) {
//       isGrow = false
//       index++
//       continue
//     }
//   }
//   return isGrow ? false : true

// }
function checkSledJump(heights) {
  let i = 1;
  // Subida estricta
  while (i < heights.length && heights[i] > heights[i - 1]) i++;
  // Debe haber al menos un pico (no solo subida)
  if (i === 1 || i === heights.length) return false;
  // Bajada estricta
  while (i < heights.length && heights[i] < heights[i - 1]) i++;
  // Debe terminar al final del array
  return i === heights.length;
}


console.log(checkSledJump([1, 2, 3, 2, 1])) // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])) // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])) // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])) // false: sólo sube
console.log(checkSledJump([1, 2])) // false
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])) // false: sube y baja y sube... ¡no vale!