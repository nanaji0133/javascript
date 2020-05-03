const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array)
{
    const random = Math.floor(Math.random() * array.length);
    return array[random]
}

let storyText = "It was 94 fahrenheit outside, so :xitem went for a walk. When they got to :yitem, they stared in horror for a few moments, then :zitem. Bob saw the whole thing, but was not surprised — :xitem weighs 300 pounds, and it was a hot day.";
let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener("click", result)



function result()
{
    let xItem = randomValueFromArray(insertX)
    let yItem = randomValueFromArray(insertY)
    let zItem = randomValueFromArray(insertZ)

    let newStory = storyText
    newStory = newStory.replace(/:xitem/g, xItem)
    newStory = newStory.replace(":yitem", yItem)
    newStory = newStory.replace(":zitem", zItem)

    if (customName.value !== "")
    {
        let name = customName.value;
        newStory = newStory.replace("Bob", name)
    }

    if (document.getElementById("uk").checked)
    {
        let weight = Math.round(400);
        let stone = weight + " stone"
        newStory = newStory.replace("300 pounds", stone)
        let temperature = Math.round((5 / 9) * (94 - 32));
        let fahrenheit = temperature + " fahrenheit"
        newStory = newStory.replace("94 fahrenheit", fahrenheit)
    }

    story.textContent = newStory;
    story.style.visibility = "visible";

}