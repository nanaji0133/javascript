var myArray = [];

var i = 10;
while (i < 5) {
    myArray.push(i)
    i++;
}

console.log(myArray)

// do...while loop

do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(myArray)

for (var j = 0; j < 100; j += 10) {
    myArray.push(j)
}

console.log(myArray)

// for loop inside a for loop

function forInsidefor(arr) {
    var p = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            p *= arr[i][j]
        }
    }

    return p
}

myArray1 = [[1, 2], [3, 4]]

console.log(forInsidefor(myArray1))