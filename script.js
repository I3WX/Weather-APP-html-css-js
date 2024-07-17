const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"
const apiKey = "5ddc22276efce3a6c42f48b2bda806d4"
const searchBar = document.getElementById("searchBar")
const searchBtn = document.getElementById("searchBtn")
const displayTemp = document.getElementById("temp")
const displayCity = document.getElementById("city")
const displayHumidity = document.getElementById("humidity")
const displayWind = document.getElementById("wind")

async function checkWeather(city){
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    let data = await response.json();
    
    return data
}
searchBtn.addEventListener("click", async ()=>{
    let city = searchBar.value;
    let weatherData = await checkWeather(city);
    let cityName = weatherData.name;
    console.log(cityName)
    console.log(weatherData)
    let temp = weatherData.main.temp ;
    let humidity = weatherData.main.humidity;
    let windSpeed = weatherData.wind.speed;
    displayTemp.innerText = `${temp}°C`
    displayCity.innerHTML = cityName
    displayHumidity.innerHTML = `${humidity}%`
    displayWind.innerHTML = `${windSpeed}km/hr`

})