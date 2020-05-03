const weather = document.querySelector("select");
const para = document.querySelector("p");

weather.addEventListener("change", myFn)

function myFn()
{
    const forecast = weather.value;

    switch (forecast)
    {
        case "sunny":
            para.textContent = "its hot";
            break;
        case "windy":
            para.textContent = "its windy";
            break;
        case "rainy":
            para.textContent = "its raining outside";
            break;
        default:
            para.textContent = "nothing";
    }
}