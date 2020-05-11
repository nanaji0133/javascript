class Person
{
  constructor(name, born_year)
  {
    this.name = name
    this.born_year = born_year
  }

  get age()
  {
    return this.callAge()
  }

  callAge()
  {
    return new Date().getFullYear() - this.born_year
  }
}

class Juggler extends Person
{
  get age()
  {
    super.callAge()
  }
}


let nanaji = new Person("nanaji", 1997)
let sanka = new Juggler("sanka", 1995)

console.log(nanaji.name + " age is " + nanaji.age)
console.log(Juggler.name + " age is " + Juggler.age)

