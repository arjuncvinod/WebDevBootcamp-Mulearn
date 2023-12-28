const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText =
  "It was 94 fahrenheit outside, so insertX went for a walk. When they got to insertY, they stared in horror for a few moments, then insertZ. Bob saw the whole thing, but was not surprised — insertX weighs 300 pounds, and it was a hot day.";

insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

insertY = ["the soup kitchen", "Disneyland", "the White House"];

insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

randomize.addEventListener("click", result);

function result() {
  let newstory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newstory = newstory.replaceAll("insertX", xItem);

  newstory = newstory.replaceAll("insertY", yItem);

  newstory = newstory.replaceAll("insertZ", zItem);

  if (customName.value !== " ") {
    const name = customName.value;
    newstory = newstory.replaceAll("Bob", name);
  }
  if (document.getElementById("uk").checked) {
    weight = `${Math.round(300 * 0.0714286)} stone`;
    temperature = `${Math.round(((94 - 32) * 5) / 9)} centigrade`;
    newstory = newstory.replaceAll("94 fahrenheit", temperature);
    newstory = newstory.replaceAll("300", weight);
  }

  story.textContent = newstory;
  story.style.visibility = "visible";
}
