//first line
console.log("hello")
let random_array = [12, 131, 14144234, 123124, 5999, 9995, 66];
let random_info = { name: "john", age: 12, work: "student", randomNumber: [12, 12, 313, 141, 414] };
let new_info = []
    //second line
const double = (number = 3) => number * 2;
console.log(double());
// calculate sum of all the number in array
const sum = (...args) => args.reduce((a, b) => a + b, 0);
//third line
console.log(sum(...random_array));
let copy_array = [...random_array]
    //fourth line
console.log(copy_array)
    //get the certain information in array
const [a, b, , c] = random_array;
//fifth line
console.log(a, b, c);
//change the information around
let ab = 90,
    bc = 70,
    cd = 1;
[ab, bc, cd] = [bc, cd, ab]
//sixth line
console.log(ab, bc, cd);
// remove 2 first item from array
function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...arr] = list; // Change this line
    // Only change code above this line
    return arr;
}
//seventh line
const arr = removeFirstTwo(random_array);
console.log(arr)
    // push item in array base on other array
function makeList(arr) {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        arr1.push(`we have ${i+1} in our list is ${arr[i]} `)
    }
    return arr1
}
let list = makeList(random_info.randomNumber)
console.log(list)

const person = {
        name: "john",
        sayHello() {
            return `Hello! My name is ${this.name}`
        },
        class: ["math", "chem"],
        addClass(subject) {
            this.class.push(subject);
        }
    }
    //8th line,  create object and add function to 
person.addClass("IT")
console.log(person.class)
    //9th line, class used to create multiple objetc
class Language {
    constructor(name, purpose) {
        this.name = name;
        this.purpose = purpose;
    }
};
const C = new Language('C', 'help web performance')
const java = new Language('Java', 'create app')
console.log(java.name, java.purpose)
console.log(C.name, C.purpose)

console.log("good life")

//OOP contructor function
//TODO having problem with printing
function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.leg = 4
}
let puppy = Dog("king", "black")
let ownProps = [1];
for (let property in puppy) {
    if (puppy.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
console.log(ownProps);