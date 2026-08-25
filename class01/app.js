const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const mul = (a, b) => {
    return a * b;
}

const div = (a, b) => {

    if (b === 0) {
        throw new Error("can't divided by zero");
    }
    return a / b;
}

const sayHello = (name) => {
    return `Hello , ${name}!`;
}
const sayGoodbye = (name) => {
    return `GoodBye , ${name}!`;
}
const sayThanks = (name) => {
    return `Thank You, ${name}!`;
}


//Export all functions
module.exports = {
    add,
    sub,
    mul,
    div,
    sayHello,
    sayGoodbye,
    sayThanks
}