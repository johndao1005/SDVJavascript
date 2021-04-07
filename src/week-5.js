// let twoArugs = (a, b) => [a, b]
// console.log(twoArugs(1, 5))
// twoArugs = (a, b, d) => a + b + d
// console.log(typeof twoArugs(1, 2, 3))

// function countOddEven(a) {
//     let even = 0;
//     let odd = 0
//     a.forEach(i => i % 2 === 0 ? even++ : typeof i === "number" ? odd++ : 'not a number')
//     return [even, odd]
// }


// console.log(countOddEven([1, 2, 3, 11, 1, 2, 2, 11, 1, 1, 1, 2, 2, 2, ]))

// // one line function
// const oddOrEven = (a) => a.reduce((a, b) => a + b) 

// console.log(oddOrEven([1,2,3,1]))
// let arr =['Hi','My','name','is','John']
// let string ='hahahahhaha'
// console.log(string.split(''))
// console.log(arr.join(' '))

// function convert(a){
//     let arr=[]
//     for(let i =0; i<a.length;i++){
//         arr.push(Number(a[i]))
//     }
//     return arr
// // }
// const convert = (a) => a.map(x => Number(x))

// console.log(convert(['1', '2', '5']))

const work = (arr) => arr.reduce((a, b) => a + b)

console.log(work(['a', 'b', 1, 2, 4, 1, 2]))

// convert object to array
// function objToArray(obj) {
//     let arr = [];
//     for (let i in obj) { arr.push(i, obj[i]) }
//     return arr
// }
const objToArray = (obj) => Object.entries(obj)

console.log(objToArray({ oj: 'a', banana: 'yellow' }))

// function reverse(str) {
//     let arr = str.split('')
//     let reverseArr = arr.reverse()
//     return reverseArr.join('')
// }
// function reversed(str) {
//     if (str === '') { return "" } else {
//         return reversed(str.substr(1)) + str.charAt(0)
//     }
// }
const revStr = (str) => str.length < 2 ? str : revStr(str.slice(1, str.length)) + str[0]
console.log(revStr('hahahha yahoo'))
    //homework object.entries and keys