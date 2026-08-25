const add = require("./app");

console.log(add.add(5,3));
console.log(add.sub(5,3));
console.log(add.mul(5,3));
console.log(add.div(5,2));

console.log(add.sayHello('Biya'));
console.log(add.sayGoodbye('Kashaf'));
console.log(add.sayThanks('Boss'));


const fruits = ["Apply" , "Banana" , "Mango" , "Strawbery" , "Date"];

const addToArray = (fruits , item) => {
    fruits.push(item);
    return fruits;
}

console.log(addToArray(fruits , "Orange"));