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
