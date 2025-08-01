// Con motivo de las fechas más bonitas del año, en Platzi han lanzado una promoción muy especial porque la educación es un regalo 🎁 para siempre.

// En Platzi tienen más de 800 cursos 📚 pero, claro, nuestro tiempo es limitado. Así que vamos a optimizar nuestro tiempo disponible para completar dos cursos usando el máximo número de horas disponible.

// Tenemos que crear una función que recibe dos parámetros. El primero es el número de horas que tenemos disponible ⏳ y el segundo es un array donde cada índice es un curso y el valor el tiempo que se tarda en completar.

// Tenemos claro que queremos hacer dos cursos así que la función debe devolver un array con el índice de los dos cursos que vamos a poder completar con el tiempo disponible proporcionado y usando el máximo tiempo disponible. Si no nos da tiempo, devolvemos null

export default function learn(time, courses) {
  // if all numbers are greater or equals than time return null
  if(courses.every( n => n >= time)) return null
  
  let isIndex = courses.findIndex( cour => (cour > (time / 2) && cour !== time ))
  if( isIndex === -1 ) {
    isIndex = courses.reduce( (acc, curr, i) => {
      if( curr > acc && curr !== acc ) acc = i
      return acc
    }, -1 )
  }
  const subtract = courses[isIndex] ? time - courses[isIndex] : false;
  let bestValue = 0
  let index = 0
  if( subtract ) {
    courses.forEach((c, i) => {
      if(c > bestValue && c <= subtract && i !== isIndex) {
        bestValue = c
        index = i 
      }
    } )
  }
  return index > isIndex ? [isIndex, index] : [index, isIndex]
}

// export default function learn(time, courses) {
//   let maxSum = -1
//   let result = null

//   for (let i = 0; i < courses.length; i++) {
//     for (let j = i + 1; j < courses.length; j++) {
//       const sum = courses[i] + courses[j]
//       if (sum <= time && sum > maxSum) {
//         maxSum = sum
//         result = [i, j]
//       }
//     }
//   }

//   return result
// }

// Vamos a ver unos ejemplos:


console.log(learn(10, [2, 3, 8, 1, 4])) // [0, 2]
console.log(learn(15, [2, 10, 4, 1])) // [1, 2]
console.log(learn(25, [10, 15, 20, 5])) // [0, 1]
console.log(learn(8, [8, 2, 1])) // [1, 2]
console.log(learn(8, [8, 2, 1, 4, 3])) // [3, 4]
console.log(learn(4, [10, 14, 20])) // null
console.log(learn(5, [5, 5, 5])) // null


// learn(10, [2, 3, 8, 1, 4]) // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.

// learn(15, [2, 10, 4, 1]) // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.

// learn(25, [10, 15, 20, 5]) // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos

// learn(8, [8, 2, 1]) // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.

// learn(8, [8, 2, 1, 4, 3]) // [3, 4] -> usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.

// learn(4, [10, 14, 20]) // null -> no nos da tiempo a hacer dos cursos

// learn(5, [5, 5, 5]) // null -> no nos da tiempo a hacer dos cursos


// Mirando todo el tema de Platzi, además nos hemos dado cuenta que tienen un descuento especial para Navidad. ¿No sabes qué regalar? Regala conocimiento 🎓.