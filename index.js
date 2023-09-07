// generate and show array
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

function arrayGenerator(element = 100) {
  let arr = [];

  for (i = 0; i < element; i++) {
    arr.push(getRandomInt(1, 50));
  }

  return arr;
}

const generateButton = document.querySelector("#generate-button");
const arrayContainer = document.querySelector("#container-array");
const listNumber = document.querySelector("#list-number");
const buttonGenerate = document.querySelector("#generate-button");
const playAgainButton = document.querySelector("#play-again-button");
const arrayNumber = arrayGenerator();

// for testing
// const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

generateButton.addEventListener("click", () => {
  for (let i = 0; i < 100; i++) {
    if (i % 15 == 0) {
      const boxArray = document.createElement("ul");
      boxArray.classList.add("box-array");
      arrayContainer.appendChild(boxArray);

      for (let j = i; j < i + 15; j++) {
        if (arrayNumber[j] === undefined) {
          continue;
        }
        const array = document.createElement("li");
        array.classList.add("array");
        array.innerText = arrayNumber[j];
        boxArray.appendChild(array);
      }
    }
  }

  buttonGenerate.style.display = "none";
  playAgainButton.style.display = "inline";
});

playAgainButton.addEventListener("click", () => {
  location.reload();
});
// generate and show array

// Array Split
const OddEvenDivision = (arr) => {
  let arrayOdd = [];
  let arrayEven = [];

  for (let i of arr) {
    if (i % 2 == 0) {
      arrayEven.push(i);
    } else {
      arrayOdd.push(i);
    }
  }

  return { arrayEven, arrayOdd };
};

// Array Operation Check
function minCheck(arr) {
  let min = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

// max
function maxCheck(arr) {
  let max = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// min
function sumArray(arr) {
  let sum = 0;

  for (let i of arr) {
    sum += i;
  }

  return sum;
}

// average
function averageCheck(arr) {
  return sumArray(arr) / arr.length;
}

const buttonCheck = document.querySelector("#button-check-answer");

const minimumOddWrong = document.querySelector("#minimum-odd-wrong");
const minimumEvenWrong = document.querySelector("#minimum-even-wrong");

const maximumOddWrong = document.querySelector("#maximum-odd-wrong");
const maximumEvenWrong = document.querySelector("#maximum-even-wrong");

const sumOddWrong = document.querySelector("#sum-odd-wrong");
const sumEvenWrong = document.querySelector("#sum-even-wrong");

const averageOddWrong = document.querySelector("#average-odd-wrong");
const averageEvenWrong = document.querySelector("#average-even-wrong");

const radioMinimumEvenWrong = document.querySelector(
  "#radio-minimum-even-wrong"
);
const radioMinimumOddWrong = document.querySelector("#radio-minimum-odd-wrong");

const radioMaximumEvenWrong = document.querySelector(
  "#radio-maximum-even-wrong"
);
const radioMaximumOddWrong = document.querySelector("#radio-maximum-odd-wrong");

const radioSumSameWrong = document.querySelector("#radio-sum-same-wrong");
const radioSumDifferentWrong = document.querySelector(
  "#radio-sum-different-wrong"
);

const radioAverageEvenWrong = document.querySelector(
  "#radio-average-even-wrong"
);
const radioAverageOddWrong = document.querySelector("#radio-average-odd-wrong");

const { arrayEven, arrayOdd } = OddEvenDivision(arrayNumber);

// get minimum input value
// minimum check function
const minimumCheckForm = (arr, minimumForm, element) => {
  const min = minCheck(arr);

  if (min != minimumForm) {
    element.classList.add("text-danger");
    element.innerText = `Wrong, minimum number in odd array is ${min}`;
    element.style.display = "inline";
  } else {
    element.classList.add("text-success");
    element.innerText = `Correct, minimum number in odd array is ${min}`;
    element.style.display = "inline";
  }
};

// maximum check function
const maximumCheckForm = (arr, maximumForm, element) => {
  const max = maxCheck(arr);

  if (max != maximumForm) {
    element.classList.add("text-danger");
    element.innerText = `Wrong, maximum number in odd array is ${max}`;
    element.style.display = "inline";
  } else {
    element.classList.add("text-success");
    element.innerText = `Correct, maximum number in even array is ${max}`;
    element.style.display = "inline";
  }
};

// sum check function
const sumCheckForm = (arr, sumForm, element) => {
  const sum = sumArray(arr);

  if (sum != sumForm) {
    element.classList.add("text-danger");
    element.innerText = `Wrong, sum number in odd array is ${sum}`;
    element.style.display = "inline";
  } else {
    element.classList.add("text-success");
    element.innerText = `Correct, sum number in odd array is ${sum}`;
    element.style.display = "inline";
  }
};

// averafe check function
const averageCheckForm = (arr, averageForm, element) => {
  const average = averageCheck(arr).toFixed(2);

  if (average != averageForm) {
    element.classList.add("text-danger");
    element.innerText = `Wrong, average number in odd array is ${average}`;
    element.style.display = "inline";
  } else {
    element.classList.add("text-success");
    element.innerText = `Correct, average number in odd array is ${average}`;
    element.style.display = "inline";
  }
};

function getRadioValue(element) {
  let selected = "";

  for (i = 0; i < element.length; i++) {
    if (element[i].checked) selected += element[i].value;
  }

  return selected;
}

function minimumRadioCheckValue(
  valueForm,
  minOdd = minCheck(arrayOdd),
  minEven = minCheck(arrayEven)
) {
  // value form = Even Array Minimum Number is Bigger
  if (valueForm == "Even Array Minimum Number is bigger" && minEven > minOdd) {
    radioMinimumOddWrong.style.display = "inline";
    radioMinimumOddWrong.innerText = "Wrong";
    radioMinimumOddWrong.classList.add("text-danger");

    radioMinimumEvenWrong.style.display = "inline";
    radioMinimumEvenWrong.innerText = "Correct";
    radioMinimumEvenWrong.classList.add("text-success");
  } else if (
    valueForm == "Even Array Minimum Number is bigger" &&
    minEven < minOdd
  ) {
    radioMinimumOddWrong.style.display = "inline";
    radioMinimumOddWrong.innerText = "Correct";
    radioMinimumOddWrong.classList.add("text-success");

    radioMinimumEvenWrong.style.display = "inline";
    radioMinimumEvenWrong.innerText = "Wrong";
    radioMinimumEvenWrong.classList.add("text-danger");
  }

  // value form = Odd Array Minimum Number is Bigger
  if (valueForm == "Odd Array Minimum Number is bigger" && minEven < minOdd) {
    radioMinimumOddWrong.style.display = "inline";
    radioMinimumOddWrong.innerText = "Correct";
    radioMinimumOddWrong.classList.add("text-success");

    radioMinimumEvenWrong.style.display = "inline";
    radioMinimumEvenWrong.innerText = "Wrong";
    radioMinimumEvenWrong.classList.add("text-danger");
  } else if (
    valueForm == "Odd Array Minimum Number is bigger" &&
    minEven > minOdd
  ) {
    radioMinimumOddWrong.style.display = "inline";
    radioMinimumOddWrong.innerText = "Wrong";
    radioMinimumOddWrong.classList.add("text-danger");

    radioMinimumEvenWrong.style.display = "inline";
    radioMinimumEvenWrong.innerText = "Correct";
    radioMinimumEvenWrong.classList.add("text-success");
  }
}

function maximumRadioCheckValue(
  valueForm,
  maxOdd = maxCheck(arrayOdd),
  maxEven = maxCheck(arrayEven)
) {
  // value form = Even Array Maxmum Number is Bigger
  if (valueForm == "Even Array Maximum Number is bigger" && maxEven > maxOdd) {
    radioMaximumOddWrong.style.display = "inline";
    radioMaximumOddWrong.innerText = "Wrong";
    radioMaximumOddWrong.classList.add("text-danger");

    radioMaximumEvenWrong.style.display = "inline";
    radioMaximumEvenWrong.innerText = "Correct";
    radioMaximumEvenWrong.classList.add("text-success");
  } else if (
    valueForm == "Even Array Maximum Number is bigger" &&
    maxEven < maxOdd
  ) {
    radioMaximumOddWrong.style.display = "inline";
    radioMaximumOddWrong.innerText = "Correct";
    radioMaximumOddWrong.classList.add("text-success");

    radioMaximumEvenWrong.style.display = "inline";
    radioMaximumEvenWrong.innerText = "Wrong";
    radioMaximumEvenWrong.classList.add("text-danger");
  }

  // value form = Odd Array Maximum Number is Bigger
  if (valueForm == "Odd Array Maximum Number is bigger" && maxEven < maxOdd) {
    radioMaximumOddWrong.style.display = "inline";
    radioMaximumOddWrong.innerText = "Correct";
    radioMaximumOddWrong.classList.add("text-success");

    radioMaximumEvenWrong.style.display = "inline";
    radioMaximumEvenWrong.innerText = "Wrong";
    radioMaximumEvenWrong.classList.add("text-danger");
  } else if (
    valueForm == "Odd Array Maximum Number is bigger" &&
    maxEven > maxOdd
  ) {
    radioMaximumOddWrong.style.display = "inline";
    radioMaximumOddWrong.innerText = "Wrong";
    radioMaximumOddWrong.classList.add("text-danger");

    radioMaximumEvenWrong.style.display = "inline";
    radioMaximumEvenWrong.innerText = "Correct";
    radioMaximumEvenWrong.classList.add("text-success");
  }
}

function sumRadioCheckValue(
  valueForm,
  sumOdd = sumArray(arrayOdd),
  sumEven = sumArray(arrayEven)
) {
  // value form = Odd and Even Array Sum is same
  if (valueForm == "Odd and Even Array Sum is same" && sumEven == sumOdd) {
    radioSumSameWrong.style.display = "inline";
    radioSumSameWrong.innerText = "Wrong";
    radioSumSameWrong.classList.add("text-danger");

    radioSumDifferentWrong.style.display = "inline";
    radioSumDifferentWrong.innerText = "Correct";
    radioSumDifferentWrong.classList.add("text-success");
  } else if (
    valueForm == "Odd and Even Array Sum is same" &&
    sumEven != sumOdd
  ) {
    radioSumDifferentWrong.style.display = "inline";
    radioSumDifferentWrong.innerText = "Correct";
    radioSumDifferentWrong.classList.add("text-success");

    radioSumSameWrong.style.display = "inline";
    radioSumSameWrong.innerText = "Wrong";
    radioSumSameWrong.classList.add("text-danger");
  }

  // value form = Odd and Even Array Sum is Different
  if (valueForm == "Odd and Even Array Sum is Different" && sumEven == sumOdd) {
    radioSumDifferentWrong.style.display = "inline";
    radioSumDifferentWrong.innerText = "Correct";
    radioSumDifferentWrong.classList.add("text-success");

    radioSumSameWrong.style.display = "inline";
    radioSumSameWrong.innerText = "Wrong";
    radioSumSameWrong.classList.add("text-danger");
  } else if (
    valueForm == "Odd and Even Array Sum is Different" &&
    sumEven != sumOdd
  ) {
    radioSumSameWrong.style.display = "inline";
    radioSumSameWrong.innerText = "Wrong";
    radioSumSameWrong.classList.add("text-danger");

    radioSumDifferentWrong.style.display = "inline";
    radioSumDifferentWrong.innerText = "Correct";
    radioSumDifferentWrong.classList.add("text-success");
  }
}

function averageRadioCheckValue(
  valueForm,
  averageOdd = averageCheck(arrayOdd),
  averageEven = averageCheck(arrayEven)
) {
  // value form = Odd Array Average Number is bigger
  if (
    valueForm == "Odd Array Average Number is bigger" &&
    averageEven < averageOdd
  ) {
    radioAverageOddWrong.style.display = "inline";
    radioAverageOddWrong.innerText = "Correct";
    radioAverageOddWrong.classList.add("text-success");

    radioAverageEvenWrong.style.display = "inline";
    radioAverageEvenWrong.innerText = "Wrong";
    radioAverageEvenWrong.classList.add("text-danger");
  } else if (
    valueForm == "Odd Array Average Number is bigger" &&
    averageEven > averageOdd
  ) {
    radioAverageOddWrong.style.display = "inline";
    radioAverageOddWrong.innerText = "Wrong";
    radioAverageOddWrong.classList.add("text-danger");

    radioAverageEvenWrong.style.display = "inline";
    radioAverageEvenWrong.innerText = "Correct";
    radioAverageEvenWrong.classList.add("text-success");
  }

  // value form = Even Array Average Number is bigger
  if (
    valueForm == "Even Array Average Number is bigger" &&
    averageEven > averageOdd
  ) {
    radioAverageOddWrong.style.display = "inline";
    radioAverageOddWrong.innerText = "Wrong";
    radioAverageOddWrong.classList.add("text-danger");

    radioAverageEvenWrong.style.display = "inline";
    radioAverageEvenWrong.innerText = "Correct";
    radioAverageEvenWrong.classList.add("text-success");
  } else if (
    valueForm == "Even Array Average Number is bigger" &&
    averageEven > averageOdd
  ) {
    radioAverageOddWrong.style.display = "inline";
    radioAverageOddWrong.innerText = "Correct";
    radioAverageOddWrong.classList.add("text-success");

    radioAverageEvenWrong.style.display = "inline";
    radioAverageEvenWrong.innerText = "Wrong";
    radioAverageEvenWrong.classList.add("text-danger");
  }
}

buttonCheck.addEventListener("click", () => {
  const minimumOddArrayVal = document.querySelector("#minimum-odd-array").value;
  const minimumEvenArrayVal = document.querySelector(
    "#minimum-even-array"
  ).value;
  const minimumRadioVal = getRadioValue(document.getElementsByName("minimum"));

  const maximumOddArrayVal = document.querySelector("#maximum-odd-array").value;
  const maximumEvenArrayVal = document.querySelector(
    "#maximum-even-array"
  ).value;
  const maximumRadioVal = getRadioValue(document.getElementsByName("maximum"));

  const sumOddArrayVal = document.querySelector("#sum-odd-array").value;
  const sumEvenArrayVal = document.querySelector("#sum-even-array").value;
  const sumRadioVal = getRadioValue(document.getElementsByName("sum"));

  const averageOddArrayVal = document.querySelector("#average-odd-array").value;
  const averageEvenArrayVal = document.querySelector(
    "#average-even-array"
  ).value;
  const averageRadioVal = getRadioValue(document.getElementsByName("average"));

  if (
    minimumOddArrayVal == "" ||
    minimumEvenArrayVal == "" ||
    minimumRadioVal == "" ||
    maximumEvenArrayVal == "" ||
    maximumOddArrayVal == "" ||
    maximumRadioVal == "" ||
    sumOddArrayVal == "" ||
    sumEvenArrayVal == "" ||
    sumRadioVal == "" ||
    averageOddArrayVal == "" ||
    averageEvenArrayVal == ""
  ) {
    alert("Oops, you miss something!!");
  } else {
    minimumRadioCheckValue(minimumRadioVal);
    maximumRadioCheckValue(maximumRadioVal);
    sumRadioCheckValue(sumRadioVal);
    averageRadioCheckValue(averageRadioVal);

    minimumCheckForm(arrayOdd, minimumOddArrayVal, minimumOddWrong);
    minimumCheckForm(arrayEven, minimumEvenArrayVal, minimumEvenWrong);

    maximumCheckForm(arrayOdd, maximumOddArrayVal, maximumOddWrong);
    maximumCheckForm(arrayEven, maximumEvenArrayVal, maximumEvenWrong);

    sumCheckForm(arrayOdd, sumOddArrayVal, sumOddWrong);
    sumCheckForm(arrayEven, sumEvenArrayVal, sumEvenWrong);

    averageCheckForm(arrayOdd, averageOddArrayVal, averageOddWrong);
    averageCheckForm(arrayEven, averageEvenArrayVal, averageEvenWrong);
  }
});
// form check
