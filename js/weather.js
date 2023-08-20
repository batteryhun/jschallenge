const API_KEY = "9a3f59e4b5f7d476c6952cc90279475d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.main.temp} C`;
    });
}
function onGeoError() {}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const weatherBtn = document.querySelector(".icon-link__weather");
const weatherBox = document.querySelector("#weather-box");
weatherBtn.addEventListener("click", () => {
  weatherBox.classList.toggle("hidden");
});
