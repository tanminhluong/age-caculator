const inputDay = document.querySelector("input[name='day']");
const inputMonth = document.querySelector("input[name='month']");
const inputYear = document.querySelector("input[name='year']");

const dayTxt = document.getElementById("day-txt");
const monthTxt = document.getElementById("month-txt");
const yearTxt = document.getElementById("year-txt");
const error = document.querySelector(".error");
const label = document.querySelectorAll("label");
const submitBtn = document.querySelector(".btn");
const form = document.querySelector("form");

function setError(element, message) {
  const parent = element.parentNode;
  const errorEle = parent.querySelector(".error");

  errorEle.innerHTML = message;
  parent.classList.add("error");
}

function setSuccess(element) {
  const parent = element.parentNode;
  const errorEle = parent.querySelector(".error");

  parent.classList.remove("error");
  errorEle.innerHTML = "";
}

function validator() {
  let dateValue = inputDay.value;
  let monthValue = inputMonth.value;
  let yearValue = inputYear.value;
  const now = new Date();
  const curYear = now.getFullYear();
  let ok = true;
  if (!dateValue) {
    setError(inputDay, "This field is required");
    ok = false;
  } else if (dateValue < 1 || dateValue > 31) {
    setError(inputDay, "Must be a valid day");
    ok = false;
  } else {
    setSuccess(inputDay);
  }

  if (!monthValue) {
    setError(inputMonth, "This field is required");
    ok = false;
  } else if (monthValue < 1 || monthValue > 12) {
    setError(inputMonth, "Must be a valid month");
    ok = false;
  } else {
    setSuccess(inputMonth);
  }

  if (!yearValue) {
    setError(inputYear, "This field is required");
    ok = false;
  } else if (yearValue > curYear) {
    setError(inputYear, "Must be in the past");
    ok = false;
  } else {
    setSuccess(inputYear);
  }

  switch (monthValue) {
    case "04":
    case "06":
    case "09":
    case "11":
      if (dateValue > 30) {
        setError(inputDay, "Must be a valid day");
        ok = false;
      }
      break;
    case "02":
      if (dateValue > 29) {
        setError(inputDay, "Must be a valid day");
        ok = false;
      }
      break;
  }

  return ok;
}

const handleSubmit = (e) => {
  e.preventDefault();
  const isValid = validator();
  if (isValid) {
    caculate();
  }
};

const caculate = () => {
  let dob = new Date(
    `${inputYear.value}/${inputMonth.value}/${inputDay.value}`
  );

  let dobYear = dob.getFullYear();
  let dobMonth = dob.getMonth();
  let dobDate = dob.getDate();

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDate = now.getDate();

  let monthAge, dateAge;
  let yearAge = currentYear - dobYear;
  if (currentMonth >= dobMonth) {
    monthAge = currentMonth - dobMonth;
  } else {
    monthAge = 12 - dobMonth + currentMonth;
    yearAge--;
  }

  if (currentDate >= dobDate)
    //get days when the current date is greater
    dateAge = currentDate - dobDate;
  else {
    monthAge--;
    dateAge = 31 + currentDate - dobDate;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  yearTxt.innerHTML = yearAge;
  monthTxt.innerHTML = monthAge;
  dayTxt.innerHTML = dateAge;
};

form.addEventListener("submit", handleSubmit);
