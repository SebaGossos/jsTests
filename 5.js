export default function daysToXmas(date) {
  const chirsmasDate = new Date('Dec 25, 2021')

  const daysToFinish = Math.ceil((chirsmasDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

  return daysToFinish
}
const date1 = new Date('Dec 1, 2021')
console.log(daysToXmas(date1)) // 24
const date2 = new Date('Dec 24, 2021 00:00:01')
console.log(daysToXmas(date2))  // 1
const date3 = new Date('Dec 24, 2021 23:59:59')
console.log(daysToXmas(date3)) // 1
const date4 = new Date("December 20, 2021 03:24:00")
console.log(daysToXmas(date4)) // 5
const date5 = new Date("December 27, 2021 03:24:00")
console.log(daysToXmas(date5)) // 5