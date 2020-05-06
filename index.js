const btn = document.querySelector("button")

btn.addEventListener("click", btnMsg)


function btnMsg(e)
{
    if (e.target.textContent === "machine is off")
    {
        e.target.textContent = "machine is on"
    } else
    {
        e.target.textContent = "machine is off"
    }
};

