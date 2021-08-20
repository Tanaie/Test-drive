// PART 1 Current Temp

function showTemp(response) {
  console.log(response);
  let mainTempy = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#tempy");
  tempElement.innerHTML = `${mainTempy}°C`;
}

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=5f472b7acba333cd8a035ea85a0d4d4c";
axios.get(apiUrl).then(showTemp);

// PART 2 City Search

function city(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#city-input");
  let cityName = document.querySelector(".city");
  let tempElement = document.querySelector("#tempy");
  if (citySearch.value) {
    cityName.innerHTML = `${citySearch.value}`;
    function showTemp(response) {
      console.log(response);
      let mainTempy = Math.round(response.data.main.temp);
      tempElement.innerHTML = `${mainTempy}°C`;
    }
    let place = `${citySearch.value}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=5f472b7acba333cd8a035ea85a0d4d4c`;
    axios.get(apiUrl).then(showTemp);
  }
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", city);

// PART 3: Time & Date

let now = new Date();

let currentTime = document.querySelector("#time");

let hours = [
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];
let hour = hours[now.getHours()];
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

currentTime.innerHTML = `${day} ${hour}:${minutes}`;

// PART 4a: Fahrenheight

function fahrenClick(event) {
  event.preventDefault();

  function showTemp(response) {
    let mainTempy = Math.round(response.data.main.temp);
    let tempChange = document.querySelector("#tempy");
    let tempFahren = Math.round((mainTempy * 9) / 5 + 32);
    tempChange.innerHTML = `${tempFahren}°F`;
  }

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=5f472b7acba333cd8a035ea85a0d4d4c";
  axios.get(apiUrl).then(showTemp);
}

// PART 4b: Celcius

function celciusClick(event) {
  event.preventDefault();

  function showTemp(response) {
    let mainTempy = Math.round(response.data.main.temp);
    let tempChange = document.querySelector("#tempy");
    tempChange.innerHTML = `${mainTempy}°C`;
  }

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=5f472b7acba333cd8a035ea85a0d4d4c";
  axios.get(apiUrl).then(showTemp);
}

let fahrenheit = document.querySelector("#f-class");
let celcius = document.querySelector("#c-class");

fahrenheit.addEventListener("click", fahrenClick);
celcius.addEventListener("click", celciusClick);
