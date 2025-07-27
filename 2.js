export default function listGifts(letter) {
  const giftsObj = {}
  letter.split(' ').filter( i => {
    if( !i.includes('_') ){
      if ( i in giftsObj ) giftsObj[i]++ 
      else giftsObj[i] = 1
      return true
    }
  }) 
  return giftsObj 
}
const carta = 'bici coche balon _playstation bici coche peluche'

console.log(listGifts(carta))
