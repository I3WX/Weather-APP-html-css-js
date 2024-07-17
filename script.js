const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"
const apiKey = "5ddc22276efce3a6c42f48b2bda806d4"
const searchBar = document.getElementById("searchBar")
const searchBtn = document.getElementById("searchBtn")
const displayTemp = document.getElementById("temp")
const displayCity = document.getElementById("city")
const displayHumidity = document.getElementById("humidity")
const displayWind = document.getElementById("wind")
const weatherIcon = document.getElementById("weatherIcon")

async function checkWeather(city){
    try{
        const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
        let data = await response.json();
        return data
    }
    catch(err){
        console.log(err)
    }
}
searchBtn.addEventListener("click", async ()=>{
    let city = searchBar.value;
    let weatherData = await checkWeather(city);
    let cityName = weatherData.name;
    let temp = weatherData.main.temp ;
    let humidity = weatherData.main.humidity;
    let windSpeed = weatherData.wind.speed;
    let weather = weatherData.weather[0].main
    changeData(cityName,temp,humidity,windSpeed);
    changeLogo(weather)
    console.log(weather)
    document.querySelector(".weather").style.display = "block"
})

function changeData(cityName,temp,humidity,windSpeed){
    displayTemp.innerText = `${Math.round(temp)}°C`
    displayCity.innerHTML = cityName
    displayHumidity.innerHTML = `${humidity}%`
    displayWind.innerHTML = `${windSpeed}km/hr`
}
function changeLogo(weather) {
    weather = weather.toLowerCase(); 

    if (weather == 'clouds') {
        weatherIcon.src = "images/clouds.png";
    }
    else if (weather == 'rain') {
        weatherIcon.src = "images/rain.png";
    }
    else if (weather == 'mist' || weather == "haze") {
        weatherIcon.src = "images/mist.png";
    }
    else if (weather == 'snow') {
        weatherIcon.src = "images/snow.png";
    }
    else if (weather == 'drizzle') {
        weatherIcon.src = "images/drizzle.png";
    }
    else if (weather == 'clear') {
        weatherIcon.src = "images/clear.png";
    }
}
