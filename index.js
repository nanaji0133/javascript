// objects are simillar to array but uses properties instead of indexs

var profile = {
    "first name": "nanaji",
    "last name": "sanka",
    "age": 22,
    "education": ["Btech", "Masters"],
};
profile.age = 23  //updating property
delete profile["last name"]
var first = profile["first name"]
var myAge = profile.age

profile["education"].push("intermediate")

console.log(profile["education"], first, myAge)
console.log(profile.hasOwnProperty("last name"))
