async function getWeather(){
    const getWeather = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=82af43cca434fb2c7e0d2c0195f824fd", {mode: "cors"});
    const weatherData = await getWeather.json();
    console.log(weatherData);
    console.log((weatherData.main.temp - 273).toFixed(0));
}

export default getWeather
