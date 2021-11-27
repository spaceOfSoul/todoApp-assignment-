
const API_KEY = "df270533e09aad28e5ebe593912a705a";

function geoSucces(position){
    const lat = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main}/${data.main.temp}/`;
    });
}

function onGeoErr(){
     alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(geoSucces,onGeoErr);