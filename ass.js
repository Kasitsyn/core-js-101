// function roundToPowerOfTen(num, pow) {
//   const a = num.toString().split('')
//   a.splice(a.length - 1, 0, '.')
//   let b = Number(a.join(''))
//   return Math.round(b).toFixed(1)
// }

// function roundToPowerOfTen(num, pow) {
//   const a = num.toString().split('')
//   a.splice(a.length - 1, 0, '.')
//   let b = Number(a.join(''))
//   return Math.round(b).toFixed(1)
// }

// function roundToPowerOfTen(num, pow) {
//   let a = num.toString()
//   let b  = a.replace()
// }

// console.log(roundToPowerOfTen(1234, 1))

// function toCsvText(arr) {
//   return arr.map((cur) => cur.join(',').toString() + '\n')
// }

// console.log(toCsvText([
//   [0, 1, 2, 3, 4],
//   [10, 11, 12, 13, 14],
//   [20, 21, 22, 23, 24],
//   [30, 31, 32, 33, 34]
// ])) 

function swapHeadAndTail(arr) {
  const mid = Math.floor(arr.length / 2);
  const array = [];

  if (arr.length % 2) {
    array.push(...arr.splice(mid + 1));
    array.push(mid + 1)
    array.push(...arr.splice(0, mid));
    return array;
  }
  array.push(...arr.splice(mid));
  return [...array, ...arr];
}

console.log(swapHeadAndTail([1, 2, 3, 4, 5, 6]))