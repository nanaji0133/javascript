const bi = (() =>
{
    return function add(a, b)
    {
        return a + b
    }
})();

console.log(bi(4, 5))

const values = {
    x: 4,
    y: 5,
    z: 6,
}

const avg = (() =>
{
    return function avg({ x, y })
    {
        return x + y
    }
    // return function avg(arr)
    // {
    //     return arr.x + arr.y
    // }
})()


console.log(avg(values))