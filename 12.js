// En el taller de Santa 🎅 se están preparando los trineos de motor eléctrico para poder hacer la ruta perfecta para dejar los regalos.

// La ruta empieza en el punto 0 y de ahí va hacia la derecha en línea recta.

// El Keanu Relfes 🧝 nos ha preparado una lista de obstáculos a evitar. El problema es que nos ha dado la lista de posiciones de los obstáculos desordenada... 😅 aunque al menos nunca la posición 0 puede tener un obstáculo.

// Encima, el trineo sólo se puede configurar para saltar un número fijo de posiciones... 😱

// Necesitamos una función que nos diga la longitud mínima del salto del trineo para ir evitando todos los obstáculos en la ruta.

// // S es salto, X es obstáculo
// /* Así quedaría la representación:
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// .  .  .  X  .  X  X  X  .  X  .
// S-----------S-----------S-------
// */

// /* Así quedaría la representación:
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// .  .  X  .  X  .  X  .  X  .  X
// S--------------------S---------

// // Longitudes de salto:
// // 1 caería en el 2
// // 2 caería en el 2
// // 3 caería en el 6
// // 4 caería en el 4
// // 5 caería en el 10
// // 6 caería en el 6
// // 7 es el ideal!!! ✅

// getMinJump([1, 2, 3, 5]) // -> 4
// getMinJump([3, 7, 5]) // -> 2
// getMinJump([9, 5, 1]) // -> 2
// */
// La dificultad del reto está en pensar que sólo podemos configurar el salto del trineo una vez y que buscamos el salto mínimo que nos serviría para sortear todos los obstaculos.

export default function getMinJump(obstacles) {
  // 1) Creamos un Set para consultas rápidas
  const obsSet = new Set(obstacles);
  // 2) Calculamos hasta dónde podríamos necesitar probar
  const maxPos = Math.max(...obstacles);

  console.log(maxPos)
  // 3) Probamos saltos crecientes
  for (let S = 1; S <= maxPos + 1; S++) {
    let collision = false;
    // 4) Recorremos múltiplos de S desde S hasta maxPos
    for (let pos = S; pos <= maxPos; pos += S) {
      if (obsSet.has(pos)) {
        collision = true;
        break;
      }
    }
    // 5) Si no hubo colisión, S es nuestro resultado
    if (!collision) {
      return S;
    }
  }
  // En teoría nunca llegamos aquí, pero por seguridad:
  return maxPos + 1;
}


// const obstacles = [5, 3, 6, 7, 9];
// console.log('la respuesta es:',getMinJump(obstacles)); // -> 4
const obstacles2 = [2, 4, 6, 8, 10];
console.log('la respuesta es:',getMinJump(obstacles2));
