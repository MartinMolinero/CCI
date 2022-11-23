const print = console.log
const square = (x) => x * x;

print(square(5))
print(square(10))



/**
 * Scope
 */
let x = 10
var z = 30;
const myFunc = () => {
    let y = 20;
    console.log(y + z);
}
var z = 20;
console.log(x+z)

const recipe = () => {
    const ingredient = (name, unit, amount) => {
        console.log(`${amount} ${unit}s of ${name}`);
    }
    ingredient('croissants', 'piece', 2)
    ingredient('ham', 'slice', 2)
    ingredient('mayo', 'table spoon', 2)
    ingredient('mustard', 'table spoon', 2)
}

recipe()

/**
 * Recursion
 */

const fibonacciLimit = (limit) => {
    if (limit <= 1){
        return 1;
    }
    return fibonacciLimit(limit - 1) + fibonacciLimit(limit - 2);
}

console.log(fibonacciLimit(5));


const flattenArray = (array, index, accum) => {
    const value = array[index];

    if (index >= array.length){
        return;
    }

    // if its an array, loop through it
    if (Array.isArray(value)) {
        flattenArray(value, 0, accum)
    } else {
        //if its not an array push
        accum.push(value)
    }
    // traverse to next index
    flattenArray(array, index + 1, accum)
}

const arr = () => {
    let output = [];
    flattenArray([ [ 1, 2 ], 3, 4, [ 4, [ 5 ] ], 6 ], 0, output);
    console.log('OUT', output)
}

arr();

/**
 * Closures:
 * Ability to reference an specific instance of local binding
 * in an enclosing scope is called a closure.
 */

const multiplier = (factor) => {
    return arg => arg * factor
}

const twice = multiplier(2);
console.log(twice(5));

const countChar = (char) => {
    return word => word.split(char).length -1
}

const countB = countChar('b');
print(countB('Alibaba'))

