async function getWeather(){
    const getWeather = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=a839eac88ef44503d5c7cd2bba976d76", {mode: "cors"});
    const weatherData = await getWeather.json();
    console.log(weatherData);
    console.log((weatherData.main.temp - 273).toFixed(0));
}

export default getWeather