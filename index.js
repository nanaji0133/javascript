function displayMsg(msgText, msgType)
{
    let html = document.querySelector("html");
    let pannel = document.createElement("div");
    html.appendChild(pannel)
    let msg = document.createElement("p");
    msg.textContent = msgText;
    pannel.appendChild(msg)
    let msgBtn = document.createElement("button")
    msgBtn.textContent = "X"
    pannel.appendChild(msgBtn)

    if (msgType === "warning")
    {
        msg.style.backgroundImage = "url(img/warning.png)";
        pannel.style.backgroundColor = "red";
    } else if (msgType === "chat")
    {
        msg.style.backgroundImage = "url(img/chat.png)";

    }

    msgBtn.onclick = function ()
    {
        pannel.parentNode.removeChild(pannel)
    }
}

let button = document.querySelector("button");

button.onclick = function ()
{
    displayMsg("this is msg", "chat")
}

