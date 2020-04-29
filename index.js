class SpaceShuttle
{
    constructor(planet)
    {
        this.planet = planet
    }
};

let zeus = new SpaceShuttle('jupiter');

console.log(zeus.planet);



function vegetable()
{
    class Veg
    {
        constructor(name)
        {
            this.name = name
        }
    }
    return Veg
};

let vegetablefn = vegetable();
let vegname = new vegetablefn('carrot');

console.log(vegname);


// using getter and setter

function makeclass()
{
    class Temperature
    {
        constructor(temp)
        {
            this._temp = 5 / 9 * (temp - 32)
        }
        get tempvalue()
        {
            return this._temp
        }
        set tempvalue(updatedtemp)
        {
            this._temp = 5 / 9 * (updatedtemp - 32)
        }
    }
    return Temperature
};

const thermostat = makeclass();
let thermovalue = new thermostat(76);
let tv = thermovalue.tempvalue;
console.log(tv);
thermovalue.tempvalue = 50;
tv = thermovalue.tempvalue;
console.log(tv)