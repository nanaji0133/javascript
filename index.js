let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
console.log(names.length)
let para = document.createElement('p');
// let randNum = Math.floor(Math.random() * names.length)
// console.log(randNum)

function random(min, max)
{
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num
}

function chooseName()
{
    // return names[randNum]
    return names[random(0, names.length)]


}

para.textContent = chooseName()

const section = document.querySelector('section');

section.appendChild(para);

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let x = 50;
let y = 60;
let width = 100;
let heigth = 75;
let color = "blue";

function drawRect(x, y, width, heigth, color)
{
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, heigth)
}

drawRect(x, y, width, heigth, color)