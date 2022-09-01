const firstSide = document.querySelector("#firstSide");
const secondSide = document.querySelector("#secondSide");
const thirdSide = document.querySelector("#thirdSide");

const checkButton = document.querySelector("#checkButton");

const answer = document.querySelector("#answer");

const checkButtonHandler = () => {
  if (
    firstSide.valueAsNumber > 0 &&
    secondSide.valueAsNumber > 0 &&
    thirdSide.valueAsNumber > 0
  ) {
    calculateArea(
      firstSide.valueAsNumber,
      secondSide.valueAsNumber,
      thirdSide.valueAsNumber
    );
  } else {
    answer.innerText = "Enter valid values";
  }
};
const calculateArea = (a, b, c) => {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  answer.innerText = `Area of Triangle is ${area}`;
};
checkButton.addEventListener("click", checkButtonHandler);
