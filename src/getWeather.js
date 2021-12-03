async function getWeather(city){
    try{
        const getWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=82af43cca434fb2c7e0d2c0195f824fd`, {mode: "cors"});
        const weatherData = await getWeather.json();
        console.log(weatherData);
        console.log(`${city}'s Temperature: ` + (weatherData.main.temp - 273).toFixed(0));
        document.querySelector("h2").textContent = (weatherData.main.temp - 273).toFixed(0);
    }
    catch{
        console.log("Error")
        document.querySelector("h2").textContent = "Error";
    }
}

document.querySelector('button[type="button"]').addEventListener("click", function(){
    const getCity = document.querySelector("input");
    getWeather(getCity.value);
})

export default getWeather
