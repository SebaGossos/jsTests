const textoValido1 = "bici coche (balón) bici coche peluche";
const textoValido2 = "(muñeca) consola bici";

const textoInvalido1 = "bici coche (balón bici coche"; // paréntesis sin cerrar
const textoInvalido2 = "peluche (bici [coche) bici coche balón"; // paréntesis con símbolos inválidos adentro
const textoInvalido3 = "(peluche {) bici"; // símbolos especiales dentro
const textoInvalido4 = "() bici"; // vacío
const textoInvalido5 = "(a() bici (a)"; // vacío
// const textoInvalido6 = "(a) (b) (c)"; // vacío

export default function isValid(letter) {
  let validRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/;
  let open = false;
  let close = false;
  let isValid = false;

  for (const word of letter) {
    if (word === ")" && !open && !isValid) return false;
    if (word === "(" && !open) {
      open = true;
      continue;
    }
    if(word === '(' && open ) return false

    //TODO:
    if (open && !close && validRegex.test(word)) {
      isValid = true;
    }
    if (word === ")") {
      close = true;
      continue;
    }

  }
  const isValidInParentheses = letter.split('(')[1].split(')')[0]
  isValid = validRegex.test(isValidInParentheses)
  // console.log(letter, opens, closes)
  // if( opens > 1 && (opens === closes) ) return true

  return open && close && isValid;
}

console.log(isValid(textoValido1))
console.log(isValid(textoValido2))

console.log(isValid(textoInvalido1))
console.log(isValid(textoInvalido2))
console.log(isValid(textoInvalido3))
console.log(isValid(textoInvalido4))
console.log(isValid(textoInvalido5))
console.log(isValid(textoInvalido6))
