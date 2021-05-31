const concat = (...array) => array.reduce((a, b) => a.concat(b), [])
console.log(concat([1, 2], [2, 3, 4, 2], [4, 2, 1, 3, 5, 5]))

function firstFunction(...args) {
    let result = []; // make new empty array
    for (let i = 0; i < arguments.length; i++) { // using loop function to go through all the arguments
        result = result.concat(arguments[i]) // with each argument the result concat each arguments into result
    }
    return result // return the result of
}

function secondFunction(init, time) {
    let result = []
    for (let i = 1; i <= time; i++) {
        result.push(i * init)
    }
    return result
}

console.log(secondFunction(5, 10))
const second = (init, time) => {
    return [...Array(time).keys()].map((e) => (e + 1) * init) //checking Key method
}
console.log(second(4, 5))

// sorting an array with descending and ascending order

const es6 = (arr, str) => str === 'Asc' ? arr.sort((a, b) => a - b) : str === 'Des' ? arr.sort((a, b) => b - a) : arr

const checkTrueOrFalse = (...arr) => arr.every(Boolean)

console.log(checkTrueOrFalse(1, true, true))
    // trying in ES5
function checking(...arr) {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] !== true) {
            return false
        }
    }
    return true
}
console.log(checking(true, true, 1))

function createMatrix(a, b, c) {
    let result = []
    for (let i = 0; i < a; i++) {
        let rows = []
        for (let j = 0; j < b; j++) {
            rows.push(c)
        }
        result.push(rows)
    }
    return result
}
const subArray = (a, b, c) => Array(a).fill(Array(b).fill(c))
console.log(subArray(3, 2, 1))
console.log(createMatrix(4, 2, 4))

function nameChange(...array) {
    let result = []
    array.forEach(a => result.push(a[0].toUpperCase() + a.toLowerCase().substring(1)))
    return result
}
console.log(nameChange('Johh', 'JSODFASDF', 'kelvin'))

function removeDuplicates(string) {
    ES6
    return Array.from(string).filter((e, i, a) => e !== a[i + 1])
        // Array from an array `from` the string input to keep the input attached then filter the value in the new constructed 
        // array for all the value which sastified the conditions of current value e is different with the value of array a at index[i-1]

    let result = [] //inital a variable
    for (let i = 0; i < string.length; i++) { //using a for loop to go through the string
        if (string[i] !== string[i + 1]) { // checking if the value at i is unique
            result.push(string[i]) // push the unique value into result
        }
    }
    return result
}

console.log(removeDuplicates('ABBBCCCSSSDDFWWEWAAAAAEEEE'))

function comparing(check, target) {
    for (let i = 0; i < check.length; i++) {
        if (check[i] === target[i]) {
            return true
        }
        return false
    }
}
console.log(comparing([1, 2, 1], [6, 2, 3, 31, 2, 1, 1]));

function calculator(num1, operator, num2) {
    operation = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }
    return operation[operator](num1, num2)
}
console.log(calculator(100, '*', 5))

function sumArray(arr) {
    return arr.flat(Infinity).reduce((a, b) => a + b)
}
console.log(sumArray([1000000, 1, 2, [1234, [34234]]]))

function recursive(arr) {
    const result = []
    arr.forEach((element => {
        Array.isArray(element) ? result.push(...recursive(element)) : result.push(element)
    }))
    return result;
}
console.log(recursive(['aba', 1, 2, 3, { banana: 'yellow' }, function() { 'happy' },
    ['hahah']
]))
const getDepth = obj => {
    let level = 1
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
            const depth = getDepth(obj[key]) + 1
            level = Math.max(level, depth)
        }
    })
    return level;
}
console.log(getDepth([1, [2, [3, [4, [5]]]]]))

function createDepth(arr) {
    if (arr.length === 1) return arr
    return [arr[0], createDepth(arr.splice(1, 3))]
}
console.log(createDepth([1, 2, 3, 5, 9, 1, 3, 4, 5]));