const body = document.body;

function display(text) {
  const div = document.createElement("div");
  div.textContent = text;
  body.appendChild(div);
}

const dateNow = new Date().getTime();

// eXercise 1

// let dateBelgium = new Intl.DateTimeFormat("fr-FR", {
//   timeZone: "Europe/Brussels",
//   dateStyle: "full",
//   timeStyle: "long",
// });

// let formatterAnchorage = new Intl.DateTimeFormat("fr-FR", {
//   timeZone: "America/Anchorage",
//   dateStyle: "full",
//   timeStyle: "long",
// });

// let formatterReykjavik = new Intl.DateTimeFormat("fr-Fr", {
//   timeZone: "Africa/Abidjan",
//   dateStyle: "full",
//   timeStyle: "long",
// });

// let formatterSintPetersburgh = new Intl.DateTimeFormat("fr-Fr", {
//   timeZone: "Africa/Nairobi",
//   dateStyle: "full",
//   timeStyle: "long",
// });
// display(dateBelgium.format(new Date()));
// display(formatterAnchorage.format(new Date()));
// display(formatterReykjavik.format(new Date()));
// display(formatterSintPetersburgh.format(new Date()));

// Exercise 2

// const dateBirth = new Date("1999-04-04").getTime();

// const timeOnEarth = Math.floor((dateNow - dateBirth) / 1000 / 60 / 60 / 24);

// console.log(`${timeOnEarth} days since my birth on earth. `);

// function daySince(oldDate) {
//   const dateNow = new Date().getTime();
//   const datePass = new Date(oldDate).getTime();

//   return `${Math.floor(
//     (dateNow - datePass) / 1000 / 60 / 60 / 24
//   )} days have been passed since your date. `;
// }
// display(daySince("1999-04-04"));

// Exercise 3

// const in80000Hours = dateNow + 80000 * 60 * 60 * 1000;
// const dateIn80000Hours = new Date(in80000Hours);

// display(`In 80.000 hours, the date will be ${dateIn80000Hours} `);

// const div = document.createElement("div");
// body.appendChild(div);
// function timeIn(time) {
//   const timeIn = dateNow + time * 60 * 60 * 1000;
//   const dateIn = new Date(timeIn);
//   div.textContent = dateIn;
// }

// const inputNumber = document.getElementById("hours");
// inputNumber.addEventListener("keyup", (e) => {
//   timeIn(inputNumber.value);
// });

// Exercise 4

const dayDiv = document.querySelector(".day");
const monthDiv = document.querySelector(".month");
const yearDiv = document.querySelector(".year");
const hoursDiv = document.querySelector(".hours");

function date() {
  let dateToday = new Date();
  // YEAR
  yearDiv.textContent = dateToday.getFullYear();

  //   MONTH AND NUMBER OF DAY
  switch (dateToday.getMonth()) {
    case 0:
      monthDiv.textContent = dateToday.getDate() + "\n Jan";
      break;
    case 1:
      monthDiv.textContent = dateToday.getDate() + "\n Feb";
      break;
    case 2:
      monthDiv.textContent = dateToday.getDate() + "\n Mar";
      break;
    case 3:
      monthDiv.textContent = dateToday.getDate() + "\n Apr";
      break;
    case 4:
      monthDiv.textContent = dateToday.getDate() + "\n Mai";
      break;
    case 5:
      monthDiv.textContent = dateToday.getDate() + "\n Jun";
      break;
    case 6:
      monthDiv.textContent = dateToday.getDate() + "\n Jul";
      break;
    case 7:
      monthDiv.textContent = dateToday.getDate() + "\n Aug";
      break;
    case 8:
      monthDiv.textContent = dateToday.getDate() + "\n Sep";
      break;
    case 9:
      monthDiv.textContent = dateToday.getDate() + "\n Oct";
      break;
    case 10:
      monthDiv.textContent = dateToday.getDate() + "\n Nov";
      break;
    case 11:
      monthDiv.textContent = dateToday.getDate() + "\n Dec";
      break;
  }

  //   NAME OF DAY
  switch (dateToday.getDay()) {
    case 1:
      dayDiv.textContent = "Mon";
      break;
    case 2:
      dayDiv.textContent = "Tue";
      break;
    case 3:
      dayDiv.textContent = "Wed";
      break;
    case 4:
      dayDiv.textContent = "Thu";
      break;
    case 5:
      dayDiv.textContent = "Fri";
      break;
    case 6:
      dayDiv.textContent = "Sat";
      break;
    case 7:
      dayDiv.textContent = "Sun";
      break;
  }

  //   HOURS

  const spanSeconds = document.createElement("span");
  spanSeconds.classList.add("seconds");
  spanSeconds.textContent =
    dateToday.getSeconds() < 10
      ? "0" + dateToday.getSeconds()
      : dateToday.getSeconds();
  hoursDiv.textContent =
    (dateToday.getHours() < 10
      ? "0" + dateToday.getHours()
      : dateToday.getHours()) +
    ":" +
    (dateToday.getMinutes() < 10
      ? "0" + dateToday.getMinutes()
      : dateToday.getMinutes()) +
    ":";
  hoursDiv.appendChild(spanSeconds);
}

setInterval(date, 1000);
