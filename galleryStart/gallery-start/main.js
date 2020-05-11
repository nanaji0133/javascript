const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i <= 5; i++)
{
    const newImage = document.createElement('img');
    let xxx = `images/pic${i}.jpg`;
    newImage.setAttribute('src', xxx);
    newImage.onclick = function ()
    {
        displayedImage.setAttribute("src", xxx)
    }
    thumbBar.appendChild(newImage);
}


btn.onclick = function ()
{
    if (btn.textContent === "Darken")
    {
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else
    {
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)"
    }
}
