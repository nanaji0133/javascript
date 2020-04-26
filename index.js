myArray = [
    {
        "name": "nanaji",
        "surname": "sanka",
        "age": 22
    },

    {
        "name": "shree",
        "surname": "ranga",
        "age": 31
    },
];


function propValue(fname, prop) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i]["name"] === fname) {
            if (myArray[i][prop]) {
                return myArray[i][prop]
            } else {
                return "no such prop existing"
            }
        }
    }
    return "no fname"
}

console.log(propValue("nanajioo", "age1"))