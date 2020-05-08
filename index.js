let btn = document.getElementById("btn");
let para = document.querySelector(".display");
let num = 0;

function displayNum(optsSltd)
{
    for (let i = 0; i < optsSltd.options.length; i++)
    {
        if (optsSltd.options[i].selected)
        {
            num++
        }
    }
    return num
}

btn.onclick = function ()
{
    let newPara = document.createElement("p")
    newPara.textContent = displayNum(document.selectForms.musicTypes)
    para.appendChild(newPara)
    // alert(displayNum(document.selectForms.musicTypes))
};






