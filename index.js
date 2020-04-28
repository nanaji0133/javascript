var profile = {
    "name": "nanaji sanka",
    "age": 22,
    "education": ["masters", "Btech"]
};

const op = (() =>
{
    return `my name is ${profile.name} and age is ${profile.age}.
        my educations are ${profile.education}`
})

console.log(op());

const person = (name, age, gender) => ({ name, age, gender })

console.log(person("nanaji", "23", "male"))