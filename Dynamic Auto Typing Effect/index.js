const containerEl = document.querySelector(".container");

const careers = ["Front-end Developer", "Web Developer", "UI Developer"];

let careerIndex = 0;

let characterIndex = 0;

upudateText();

function upudateText() {
  characterIndex++;
  containerEl.innerHTML = `
  <h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>
  `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(upudateText,400);
}
