const base = document.querySelector("#base");
const height = document.querySelector("#height");
const checkButton = document.querySelector("#checkButton");
const answer = document.querySelector("#answer");

const checkButtonHandler = () => {
  let ans = 0;
  if (base.valueAsNumber > 0 && height.valueAsNumber > 0) {
    ans = Math.sqrt(base.valueAsNumber ** 2 + height.valueAsNumber ** 2);
    answer.innerText = `The length of hypotenuse is ${ans}`;
  } else {
    answer.innerText = "Enter valid values";
  }
};

checkButton.addEventListener("click", checkButtonHandler);
