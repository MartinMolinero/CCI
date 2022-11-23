/**
 * HOF: functions that operate on other functions,
 * by taking them as arguments or by returning them.
 * Allows to abstract over actions, not just values
 */

function greaterThan (n){
    return m => m > n;
}

let greaterThan10 = greaterThan(10);

console.log(greaterThan10(11))

const noisy = (func) => {
    return (...args) => {
        console.log(func,'CALLED WITH', ...args)
        let result = func(...args)
        console.log('RESULT', result)
        return result
    }
}

console.log(noisy(Math.max)(3,2,1))