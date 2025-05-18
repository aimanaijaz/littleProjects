const choiceArea = document.querySelector(".choiceArea");
const choiceTags = document.querySelector(".choiceTags");

let choicesArray = [];

choiceArea.addEventListener("input", () => {
  const input = choiceArea.value;
  const segments = input.split(',');

  while (segments.length > choicesArray.length + 1) {
    const newChoice = segments[choicesArray.length].trim();
    if (newChoice && !choicesArray.includes(newChoice)) {
      choicesArray.push(newChoice);
      addTag(newChoice);
    }
  }
});

choiceArea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();

    const lastChoice = choiceArea.value.split(',').at(-1).trim();
    if (lastChoice && !choicesArray.includes(lastChoice)) {
      choicesArray.push(lastChoice);
      addTag(lastChoice);
    }

    if (choicesArray.length > 0) {
      startRandomizer();
    }
  }
});

function addTag(choice) {
  const tag = document.createElement("button");
  tag.classList.add("tags");
  tag.innerText = choice;
  choiceTags.appendChild(tag);
}

function startRandomizer() {
  const tags = document.querySelectorAll(".tags");
  let index = 0;
  let lastIndex = 0;
  let elapsed = 0;

  const interval = setInterval(() => {
    tags[lastIndex].classList.remove("active");
    tags[index].classList.add("active");
    lastIndex = index;
    index = (index + 1) % tags.length;
    elapsed += 200;

    if (elapsed > 5000) {
      clearInterval(interval);
    }
  }, 200);
}
