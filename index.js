var global = 10; //without var its a global variable

function sample() {
    var global1 = 1;
    global2 = 2; //without var its a global variable
    console.log("hello world")
}

sample()

function operations(a, b) {
    console.log(a + b - global)
}

operations(100, 30)

var language = "python";

function programming() {
    // local variable with same name as global can override it and local var scope is only inside fn
    var language = "js";
    console.log(language)
}

programming()
console.log(language)

function retfn(num) {
    return num * 5
}

console.log(retfn(5))

function noRe() {
    global += 5
    return global
    // without return it is undefined variable
}

console.log(noRe())

// queue

function queue(arr, item) {
    arr.push(item)
    return arr.unshift()
}

var myArr = [1, 2, 3, 4]
console.log(queue(myArr, 5))


function trueOrfalse(num) {
    if (num % 2 == 0) {
        return "true"
    }
    return "false"
}

console.log(trueOrfalse(10))

// 3 === 3 ans: true 
// 3 === '3' ans: false, it also check the type

function trueOrfalse(num) {
    // !== checks for type also
    if (num !== 1) {
        return "true"
    }
    return "false"
}

console.log(trueOrfalse('1'))

// logic operators and --> && and or --> ||


function numbering(varn) {
    if (varn < 5) {
        return "less then 5"
    } else if (varn < 10) {
        return "between 5 and 10"
    } else {
        return "greater than 10"
    }
}

console.log(numbering(11))

