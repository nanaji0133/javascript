// destruction

var sample = {
    x: 2,
    y: 3,
    z: {
        p: 4,
        q: 5
    },
};


function destructionfn()
{
    // var { z: a } = sample
    // var { p: u } = a
    // console.log(a)
    var { z: { q: u } } = sample
    return u
}


console.log(destructionfn())


const [x, , , , z] = [1, 2, 3, 4, 5, 6];
console.log(x, z);

let a = 4, b = 6;
// below function is a self-invoking function
// (function ()
// {
//     [a, b] = [b, a]
// })();
// or
(() =>
{
    [a, b] = [b, a]
})();
console.log(a, b);


const myArr = [1, 2, 3, 4, 5, 6];

function removeTwo()
{
    [, , ...arr] = myArr
    return arr
}

console.log(removeTwo())
