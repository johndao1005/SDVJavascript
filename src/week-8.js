// function arrayDataTypes(array) {
//     let result = []
//     array.forEach(i => result.push(typeof i))
//     return result
// }
// const hello = () => 'greeting'

// const arrayDataTypes = (array) => array.map(x => typeof x)

// console.log(arrayDataTypes([111, 'asdas', [], null, NaN, undefined]))

// function moveArrByOne(arr) {
//     let lastIndexValue = arr.pop()
//     arr.unshift(lastIndexValue)
//     return arr
// }
arr = ['19999', '98', '88', '9', '4', '10', '1', 1, 3]

const moveArrByOne = arr => [arr.unshift(), ...arr]
console.log(moveArrByOne(arr))
console.log(...arr)

// function NestedArray(arr) {
//     let result = [
//         [],
//         []
//     ]
//     arr.map(i => parseInt(i) % 2 == 0 ? result[0].push(parseInt(i)) : result[1].push(parseInt(i)))
//     return result
// }

// function NestedArray(arr) {
//     let even = arr.map(Number).filter(x => x % 2 === 0)
//     let odd = arr.map(Number).filter(x => x % 2 !== 0)
//     return [even, odd]
// }
const NestedArray = (arr) => arr.reduce((a, b) => (a[b % 2].push(+b), a), [
    [],
    []
])
console.log(NestedArray(arr))


const space = (string) => string.split('').join(' ')
console.log(space('hahahah'))