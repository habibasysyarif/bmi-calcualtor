const formSection = document.getElementById("form-section");
const resultSection = document.getElementById("result-section");

const weightInput = document.getElementById("weight-input");
const heightInput = document.getElementById("height-input");
const ageInput = document.getElementById("age-input");
const maleOption = document.getElementById("male");
const femaleOption = document.getElementById("female");

const result = document.getElementById("result");
const underweight = document.querySelectorAll(".underweight");
const normal = document.querySelectorAll(".normal");
const overweight = document.querySelectorAll(".overweight");
const obese = document.querySelectorAll(".obese");

const countBtn = document.getElementById("count-btn");
const resetBtn = document.getElementById("reset-btn");
const backBtn = document.getElementById("back-btn");

// -- IF COUNT BUTTON CLICKED

function countFnc() {
  // -- CATCH THE VALUE

  let weight = Number(weightInput.value);
  let height = Number(heightInput.value);

  // -- COUNT

  const bmi = parseFloat(weight / (((height / 100) * height) / 100)).toFixed(2);

  // -- CHANGE THE SECTION

  formSection.style.display = "none";
  resultSection.style.display = "block";

  // -- DISPLAY THE RESULT

  result.innerText = bmi;

  // -- CONDITIONING

  if (bmi < 18.5) {
    underweight[0].style.display = "block";
    underweight[1].style.display = "block";
    normal[0].style.display = "none";
    normal[1].style.display = "none";
    overweight[0].style.display = "none";
    overweight[1].style.display = "none";
    obese[0].style.display = "none";
    obese[1].style.display = "none";
  } else if (bmi >= 18.5 && bmi < 25) {
    underweight[0].style.display = "none";
    underweight[1].style.display = "none";
    normal[0].style.display = "block";
    normal[1].style.display = "block";
    overweight[0].style.display = "none";
    overweight[1].style.display = "none";
    obese[0].style.display = "none";
    obese[1].style.display = "none";
  } else if (bmi >= 25 && bmi < 30) {
    underweight[0].style.display = "none";
    underweight[1].style.display = "none";
    normal[0].style.display = "none";
    normal[1].style.display = "none";
    overweight[0].style.display = "block";
    overweight[1].style.display = "block";
    obese[0].style.display = "none";
    obese[1].style.display = "none";
  } else if (bmi >= 30) {
    underweight[0].style.display = "none";
    underweight[1].style.display = "none";
    normal[0].style.display = "none";
    normal[1].style.display = "none";
    overweight[0].style.display = "none";
    overweight[1].style.display = "none";
    obese[0].style.display = "block";
    obese[1].style.display = "block";
  }

  // -- EMPTY FIELDS

  if (weightInput.value == "" || heightInput.value == "" || ageInput.value == "") {
    formSection.style.display = "block";
    resultSection.style.display = "none";
    alert("ALL DATA REQUIRED!");
  }
}

// -- IF RESET BUTTON CLICKED

function resetFnc() {
  maleOption.checked = "";
  femaleOption.checked = "";
  weightInput.value = "";
  heightInput.value = "";
  ageInput.value = "";
}

// -- IF BACK BUTTON CLICKED

function backFnc() {
  formSection.style.display = "block";
  resultSection.style.display = "none";
  resetFnc();
}

countBtn.addEventListener("click", countFnc);
resetBtn.addEventListener("click", resetFnc);
backBtn.addEventListener("click", backFnc);
