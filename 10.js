// Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.
// La dificultad del reto está en saber utilizar correctamente una estructura que te permita conocer las monedas que tienes disponible para crear el array con la devolución, ya que debes usar siempre el menor número de monedas posible. ¡Suerte 👩‍💻👨‍💻!.
export default function getCoins(change) {
  // Paso 1: definimos las denominaciones
  const valoresDesc = [50, 20, 10, 5, 2, 1];
  // Aquí guardaremos cuántas monedas de cada valor usamos
  const contador = {
    1: 0,
    2: 0,
    5: 0,
    10: 0,
    20: 0,
    50: 0
  };

  
  let resto = change;
  for (let valor of valoresDesc) {
    const cantidad = Math.floor(resto / valor);
    // console.log(resto / valor, cantidad)
    // console.log( resto )
    contador[valor] = cantidad;
    resto -= cantidad * valor;
    console.log( resto )
  }

  // Paso 3: devolvemos el array en orden ascendente [1,2,5,10,20,50]
  return [1, 2, 5, 10, 20, 50].map(v => contador[v]);
}
console.log(getCoins(16))
// getCoins(51); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
// getCoins(3); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
// getCoins(5); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
// getCoins(16); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
// getCoins(100); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
