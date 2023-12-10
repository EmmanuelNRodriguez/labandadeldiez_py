const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=balvanera&units=metric&appid=d5f977cde958c2fcdf7117922dfbe089";
const ResponseTemp = document.querySelector("#temp");
const ResponseHumi = document.querySelector("#humi");
const ResponseSens = document.querySelector("#sens");
const ResponsePres = document.querySelector("#pres");
const ResponseImag = document.querySelector("#imag");

/* <img src="" alt=""></img> */

fetch(API_URL)
    .then(res => res.json())
    .then(response => {
        ResponseTemp.innerHTML = `Temperatura: ${response.main.temp}°C`
        ResponseHumi.innerHTML = `Humedad: ${response.main.humidity}%`
        ResponseSens.innerHTML = `Sensación: ${response.main.feels_like}°C`
        ResponsePres.innerHTML = `Presion: ${response.main.pressure}hPa`
        ResponseImag.innerHTML = `<img id="img_cli" src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png"></img>`
        })