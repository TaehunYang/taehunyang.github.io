const API_KEY = "74c2d472ccd88002a2029e94a4c7fe0c";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const container1 = document.querySelector("#wearther span:first-child");
      const container2 = document.querySelector("#wearther span:last-child");
      const name = data.name;
      const weather = `${data.weather[0].main} / ${data.main.temp}`;
      container1.innerText = name;
      container2.innerText = weather;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
