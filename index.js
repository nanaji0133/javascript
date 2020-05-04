let myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
let list = document.createElement("ol")


for (let i = 0; i < myArray.length; i++)
{
    let childList = document.createElement("li")
    childList.textContent = myArray[i]
    list.appendChild(childList)
}
const section = document.querySelector("section")
section.appendChild(list)