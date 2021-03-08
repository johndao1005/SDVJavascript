//OOP contructor function
//TODO having problem with printing
function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.leg = 4;
}
let puppy = Dog("king", "black")
let ownProps = [];
for (let property in puppy) {
    if (puppy.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
console.log(ownProps);