const form = document.querySelector("#questionForm");
const quizButton = document.querySelector(".quizButton");
const answer = document.querySelector(".answer");

const answers = ["B", "C"];

const formSubmitHandler = (e) => {
  e.preventDefault();
  const data = new FormData(form);
  let entries = [];
  for (let entry of data.entries()) {
    entries.push(entry[1]);
  }
  calculateScore(entries);
};

const calculateScore = (index) => {
  let score = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == index[i]) {
      score += 1;
      // console.log(answers[1]);
    }
  }

  // console.log(score);
  answer.innerHTML = `Score: ${score}/2`;
};

form.addEventListener("submit", formSubmitHandler);
