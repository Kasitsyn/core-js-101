function roundToPowerOfTen(num, pow) {
  const a = num.toString().split('')
  a.splice(a.length - 1, 0, '.')
  let b = Number(a.join(''))
  return Math.round(b).toFixed(1)
}

console.log(roundToPowerOfTen(1234, 1))