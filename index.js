function Person(first, last, age, gender, interest)
{
    this.name = {
        first: first,
        last: last,
    }
    this.age = age;
    this.gender = gender;
    this.interest = interest;
    let bioStr = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ';
    for (let i = 0; i < this.interest.length; i++)
    {
        if (i === this.interest.length - 1)
        {
            bioStr += " and " + this.interest[i] + "."
        } else
        {
            bioStr += this.interest[i] + ", "
        }

    }
    if (this.gender === "female")
    {
        bioStr = bioStr.replace("He", "She")
    }
    this.bio = function ()
    {
        alert(bioStr);
    };
    this.greeting = function ()
    {
        alert("my name is " + this.name.first + ".")
    }
}

