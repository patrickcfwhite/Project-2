function getBirthdays(y,m,d) {
  const bdayArray = []
  let x = new Date(y, m - 1, d)
  while (x < Date.now()) {
    m < 10 ? bdayArray.push(`${y}-0${m}-${d}`) : bdayArray.push(`${y}-${m}-${d}`)
    y++
    x = new Date(y, m - 1, d)

  }
  return bdayArray
}


export default { getBirthdays }