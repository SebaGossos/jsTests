// // Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...

// // Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

// // Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo. Por eso, el ratón, que se ha visto los vídeos de midudev, va a crear una función para saber si su próximo movimiento es correcto o no ✅.

// // El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays) donde cada posición puede ser:

// // Un espacio vacío es que no hay nada
// // Una m es el ratón
// // Un * es la comida

// export default function canMouseEat(direction, game) {

//   let mousePosition = false
//   let mealPosition = []
//   let index = 0
//   // * Positions building
//   for( let r of game ) {
//     if(!mousePosition) {
//       const isLocation = r.findIndex( option => option === 'm' )
//       mousePosition = isLocation > -1 ? [index, isLocation] : false
//     }

//     const isLocation = r.findIndex( option => option === '*' )
//     if( isLocation > -1  ) mealPosition.push([index, isLocation])

//     index += 1
//   }
//   // !ERROR HANDLER
//   if( !mousePosition || mealPosition.length === 0 ) return false
  
//   // ? SOLUTIONS
//   const size = game.length;
//   const sizeOfRooms = game[0].length;

//   switch( direction ) {
//     case 'up':
//       if( mousePosition[0] === 0 ) return false
//       for(let i of mealPosition) if( i[0] === mousePosition[0] - 1 && i[1] === mousePosition[1] ) return true
//       return false
//     case 'down':
//       if( mousePosition[0] === size - 1 ) return false
//       for(let i of mealPosition) if( i[0] === mousePosition[0] + 1 && i[1] === mousePosition[1] ) return true
//       return false
//     case 'right':
//       if( mousePosition[1] === sizeOfRooms - 1 ) return false
//       for(let i of mealPosition) if( i[0] === mousePosition[0] && i[1] === mousePosition[1] + 1 ) return true
//       return false
//     case 'left':
//       if( mousePosition[1] === 0 ) return false
//       for(let i of mealPosition) if( i[0] === mousePosition[0] && i[1] === mousePosition[1] - 1 ) return true
//       return false
//     default:
//       return false
//   }

// }


// export default function canMouseEat(direction, game) {
//   // 1) Encontrar al ratón
//   let mousePos = null;
//   for (let i = 0; i < game.length; i++) {
//     const j = game[i].indexOf('m');
//     if (j !== -1) {
//       mousePos = [i, j];
//       break;
//     }
//   }
//   if (!mousePos) return false;  // ratón no encontrado

//   const [r, c] = mousePos;
//   // 2) Mapa de desplazamientos
//   const moves = {
//     up:    [-1,  0],
//     down:  [ 1,  0],
//     left:  [ 0, -1],
//     right: [ 0,  1],
//   };
//   const delta = moves[direction];
//   if (!delta) return false;     // dirección inválida

//   const [dr, dc] = delta;
//   const nr = r + dr, nc = c + dc;
//   // 3) Comprobar límites y comida
//   if (
//     nr < 0 || nr >= game.length ||
//     nc < 0 || nc >= game[nr].length
//   ) return false;

//   return game[nr][nc] === '*';
// }


// // Vamos a ver unos ejemplos:

// const room = [
//   [' ', ' ', ' '],
//   [' ', ' ', 'm'],
//   [' ', ' ', '*']
// ]

// console.log(canMouseEat('up',    room))    // false
// console.log(canMouseEat('down',  room))    // true
// console.log(canMouseEat('right', room))    // false
// console.log(canMouseEat('left',  room))    // false

// const room2 = [
//   ['*', ' ', ' ', ' '],
//   [' ', 'm', '*', ' '],
//   [' ', ' ', ' ', ' '],
//   [' ', ' ', ' ', '*']
// ]

// console.log(canMouseEat('up',    room2))    // false
// console.log(canMouseEat('down',  room2))    // false
// console.log(canMouseEat('right', room2))    // true
// console.log(canMouseEat('left',  room2))    // false
// // ¡Ten en cuenta que el ratón quiere buscar comida en diferentes habitaciones y que cada una puede tener dimensiones diferentes!