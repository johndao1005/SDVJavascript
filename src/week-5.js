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












//TODO
//ANCHOR declare an example board with a already input to work and show the result
let board = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 0, 0]
]

//changing 1 into x to not causing problem when increment
//ANCHOR First solution which suitable for beginner as it is easy to understand as it only using for loop but not other method for array such as forEach, map...
function addingX(board) {
    //find the location of 1 in the board then change it into x
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] == 1) { //not using strict equal in case the input board have '1' instead 1 which will cause wrong out put
                board[i][j] = 'x' //using the i and j position to change 1 into x
            }
        }
    }
    return board // return the modified board
}
//ANCHOR changing the number around the board
function addingNumber(para) {
    let newBoard = [...(addingX(para))] //copy board into to newBoard variable and using addingX function to change 1 into x
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) { //go through the board to find x     
            if (newBoard[i][j] === 'x') { // i and j is the co-ordinates
                //when find x loop through the area of 3x3 around x to add 1 while skip x
                for (let row = i - 1; row < i + 2; row++) {
                    for (let column = j - 1; column < j + 2; column++) {
                        if (row >= 0 && column >= 0 && row <= 3 && column <= 3 && newBoard[row][column] !== 'x') //apply the condition so it skip the x block and the value is inside the board
                            newBoard[row][column]++ //increment the block by 1
                    }
                }
            }
        }
    }
    return newBoard // return the new board after the function
}
const newBoard = addingNumber(board) //storage the new Board to the variable
console.log(newBoard) // demonstrate the result

//ANCHOR second and final solution, breaking the the last function into 2 smaller functions and create a bombList to store the location of the bombs on the map so we dont have to check it again.

const bombList = [] //saving all the bomb location in the format of (x,y) like mathemathic co-ordinates of a point

/*function addingX(board, rowLimit, columnLimit) { //adding row and column to allow the function more flexiable with the board size
    //find the location of 1 in the board then change it into x
    for (let i = 0; i < rowLimit; i++) {
        for (let j = 0; j < columnLimit; j++) {
            if (board[i][j] == 1) { //not using strict equal in case the input board have '1' instead 1 which will cause wrong out put
                board[i][j] = 'x' //using the i and j position to change 1 into x
                bombList.push([i, j]) //save the bomb location in a array so saving the work of loop through to find the bomb location
            }
        }
    }
    return board // return the modified board
}

function increment3x3(board, bombList, rowLimit, columnLimit) { // adding row and column limit so the area of application can change like increase the board area or reduce it
    bombList.forEach( // access the bomb list and for each bomb using the same 2 for loop as first solution to increment the block around the bomb
        bomb => {
            for (let row = bomb[0] - 1; row < bomb[0] + 2; row++) {
                for (let column = bomb[1] - 1; column < bomb[1] + 2; column++) {
                    if (row >= 0 && column >= 0 && row < rowLimit && column < columnLimit && board[row][column] !== 'x') //apply the condition so it skip the x block and the value is inside the board
                        board[row][column]++ //increment the block by 1
                }
            }
        }
    )
}

function mineSweeper(board, rowLimit = 4, columnLimit = 4) { //allow the code to be able to apply to different size of board with the default of 4x4
    let newBoard = [...addingX(board, rowLimit, columnLimit)] // using spread operator to copy the board which run though addingX function into newBoard
    increment3x3(newBoard, bombList, rowLimit, columnLimit) // call the increment3x3 function to add the number into the board
    return newBoard
}*/
console.log(addingNumber(board))