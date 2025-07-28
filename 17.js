// Las empresas de paquetería 📦 se preparan para la época de fiestas y la locura de envíos que les espera.

// La empresa funciona con flotas de furgonetas 🚛 y camiones 🚚. Las flotas tienen un organigrama, ya que existen rangos de nivel de experiencia.

// Necesitamos saber el número de paquetes que una persona va a poder gestionar en un día. Para ello se cuenta el número de paquetes que puede llevar esa persona y todos los transportistas que tiene en su equipo. Lo malo es que los datos están almacenados de una forma un poco rara en un array:

// El array contiene otros arrays que contienen los datos de cada transportista
// transportista[0] -> Nombre/ID del Transportista
// transportista[1] -> Paquetes que gestiona en un día
// transportista[2] -> Array con sus subordinados

// Para que lo veamos en código, tanto el array, como la función de dos parámetros para conseguir el número deseado:

// ¡Ten cuidado! Como has visto en el segundo ejemplo, el organigrama puede tener diferentes niveles y además nos viene información que puede ser que no necesitemos. Debemos tener en cuenta el parámetro de carrierID para calcular bien el número y contar todo su equipo.

// export default function countPackages(carriers, carrierID) {
//   let total = 0
//   let carrierData = carriers.reduce((acc, curr, i, arr) => {
//     if(curr[0] === carrierID) {
//       total += curr[1]
//       if(!curr[2].length) return acc
//       acc = curr[2]
//     }
//     if( acc.includes( curr[0] ) ) {
//       total += curr[1]
//       if(curr[2].length) return [...acc, ...curr[2] ]
//     }
//     return acc
//   }, []) 
//   return total
// }

export default function countPackages(carriers, carrierID) {
  // 1) Creamos un Map: id → { paquetes, subordinados }
  const carrierMap = new Map(
    carriers.map(([id, paquetes, subs]) => [id, { paquetes, subs }])
  );
  console.log( carrierMap)

  let total = 0;
  const stack = [carrierID];

  // 2) Mientras queden IDs en la pila
  while (stack.length) {
    const id = stack.pop();
    const data = carrierMap.get(id);
    if (!data) continue;              // Por si viene un ID que no existe
    total += data.paquetes;          // Sumamos paquetes de este transportista
    stack.push(...data.subs);        // Añadimos sus subordinados a la pila
  }

  return total;
}




const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]


console.log(countPackages(carriers, 'dapelu') )// 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

console.log(countPackages(carriers2, 'camila')) // 15
// // 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15