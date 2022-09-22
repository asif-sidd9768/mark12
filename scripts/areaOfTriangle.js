const firstSide = document.querySelector("#firstSide");
const secondSide = document.querySelector("#secondSide");
const thirdSide = document.querySelector("#thirdSide");

const checkButton = document.querySelector("#checkButton");

const answer = document.querySelector("#answer");

const checkButtonHandler = () => {
  const first = firstSide.valueAsNumber
  const second = secondSide.valueAsNumber
  const third = thirdSide.valueAsNumber

  if (
    first + second > third &&
    second + third > first &&
    first + third >  second
  ) {
    calculateArea(
      first,
      second,
      third
    );
  } else {
    answer.innerText = "Enter valid values";
  }
};
const calculateArea = (a, b, c) => {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  answer.innerText = `Area of Triangle is ${area.toFixed(2)}`;
};
checkButton.addEventListener("click", checkButtonHandler);
