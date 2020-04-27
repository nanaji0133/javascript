"use strict";


// arrow function or annonumous function

// cont varfn = function () {
//     return "arow function"
// }


const varfn = () => "arrow function";

const varfn1 = (num1, num2) => num1+num2;


console.log(varfn)
console.log(varfn1(3,5))


const myArr = [1, 2, -3, -4, 5];

const squareList = (arr) => {
    const squared = arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x)
    return squared
}

const squareOutput = squareList(myArr)
console.log(squareOutput)


const increment = (function() {
    return function increment (num, value=1) {
        return num + value
    };
})();

console.log(increment(5,2))
console.log(increment(5))