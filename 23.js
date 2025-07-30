// Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.

// Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

// La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

// Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.


export default function canReconfigure(from, to) {
  if (from.length !== to.length) return false;

  const mapping = new Map();    
  const usedTargets = new Set(); 

  for (let i = 0; i < from.length; i++) {
    const a = from[i];
    const b = to[i];


    if (mapping.has(a)) {
      if (mapping.get(a) !== b) return false;
    } else {

      if (usedTargets.has(b)) return false;

      mapping.set(a, b);
      usedTargets.add(b);
    }
  }

  return true;
}


// Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas mencionadas. Lo mejor es que veamos un ejemplo:

let from = 'BAL'
let to   = 'LIB'
console.log( canReconfigure(from, to)) // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

let from1 = 'CON'
let to1   = 'JUU'
console.log(canReconfigure(from1, to1)) // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/
