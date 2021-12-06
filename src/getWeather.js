const tempDisplay = document.getElementById("tempDisplay");
const cityName = document.getElementById("cityName");
const feelsLike = document.getElementById("feelsLike");
const mainDescription = document.getElementById("mainDescription");
const tempMin = document.getElementById("tempMin");
const tempMax = document.getElementById("tempMax");
const celcius = document.getElementById("changeCelcius");
const fahrenheit = document.getElementById("changeFahrenheit");
let tempSetting = "C";

async function getWeather(city){
    try{
        const getWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=82af43cca434fb2c7e0d2c0195f824fd`, {mode: "cors"});
        const weatherData = await getWeather.json();
        console.log(weatherData);
        console.log(`${city}'s Temperature: ` + conversion(weatherData.main.temp, tempSetting));
        cityName.textContent = city;
        tempDisplay.textContent = conversion(weatherData.main.temp, tempSetting) + `°${tempSetting}`;
        feelsLike.textContent = "Feels like: " + conversion(weatherData.main.feels_like, tempSetting) + `°${tempSetting}`;
        tempMin.textContent = "Minimum Temperature: " + conversion(weatherData.main.temp_min, tempSetting) + `°${tempSetting}`;
        tempMax.textContent = "Maximum Temperature: " + conversion(weatherData.main.temp_max, tempSetting) + `°${tempSetting}`;
        mainDescription.textContent = weatherData.weather[0].description;
    }
    catch{
        console.log("Error")
        tempDisplay.textContent = "Error";
    }
}

function conversion(temperature, tempSetting){
    if(tempSetting == "C"){
        return (temperature - 273).toFixed(0)
    }
    else if(tempSetting == "F"){
        return ((temperature -273.15) * (9/5) + 32).toFixed(0);
    }
}

document.querySelector('button[type="button"]').addEventListener("click", function(){
    const getCity = document.querySelector("input");
    getWeather(getCity.value);
})

celcius.addEventListener("click", function(){
    if(cityName.textContent != "" && cityName.textContent != "Error"){
        tempSetting = "C";
        getWeather(cityName.textContent);
    }
})

fahrenheit.addEventListener("click", function(){
    if(cityName.textContent != "" && cityName.textContent != "Error"){
        tempSetting = "F";
        getWeather(cityName.textContent);
    }
})

export default getWeather
