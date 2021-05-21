// Initial the page by selecting things from doc
function init() {
  var inputEl = document.getElementById("input-city");
  var searchEl = document.getElementById("button-search");
  var clearEl = document.getElementById("clear-history");
}

// Pasting API key here
var APIKey = "4d63f1f3bfd4180e83c77404a79e20da";

// Need to create cityName to reference later
function collectWeather(cityName) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    APIKey;
  axios.get(queryURL).then(function (data) {
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getYear();
    nameEl.innerHTML =
      response.data.name + " (" + month + "/" + day + "/" + year + ") ";
  });
}
