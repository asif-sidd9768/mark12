const angleOne = document.querySelector("#angleOne");
const angleTwo = document.querySelector("#angleTwo");
const angleThree = document.querySelector("#angleThree");
const answer = document.querySelector("#answer");
const checkButton = document.querySelector("#checkButton");

const checkButtonHandler = () => {
  const sum =
    angleOne.valueAsNumber + angleTwo.valueAsNumber + angleThree.valueAsNumber;
  console.log(sum);
  if (
    angleOne.valueAsNumber <= 0 ||
    angleTwo.valueAsNumber <= 0 ||
    angleThree.valueAsNumber <= 0
  ) {
    answer.innerText = "Not a Valid Angle";
  } else {
    if (sum === 180) {
      answer.innerText = "It is a Triangle";
    } else {
      answer.innerText = "Not a Triangle";
    }
  }
};

checkButton.addEventListener("click", checkButtonHandler);
