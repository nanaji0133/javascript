var str = "double quotation has to be written like this\" like this";
var name = "nanaji\"";
console.log(str)

var length;

length = name.length;
console.log(length)

var a = "myself";
var len;
len = a.length;
console.log(len)

var b;
b = a[0 + 1];
console.log(b)

// strings are immutable

// arrays

var myArray = ["nanaji", 1.2, true, ["nanaji sanka", 22]];
var data = myArray[0];
myArray[1] = 22.0;
myArray.push(["sanka", 15])
data = myArray.pop()
data = myArray.shift() 
myArray.unshift("nanajisanka")

console.log(myArray)
console.log(data)
