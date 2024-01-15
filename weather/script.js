// script.js

async function showWeather() {
    const placeNameElement = document.getElementById("placeName");
    const cityNameElement = document.getElementById("cityName");
    const tempElement = document.getElementById("temp");
    const humElement = document.getElementById("hum");
    const feelsElement = document.getElementById("feels");
    const textElement = document.getElementById("text");
    const iconElement = document.getElementById("weatherIcon"); // Update the ID here

    const placeName = placeNameElement.value;
    placeNameElement.value = "";

    const apiKey = '7e11c8cfad984b70bed31451241101';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${placeName}`;

    try {
        const response = await fetch(url);
        const result = await response.json();

        console.log(result);

        cityNameElement.innerHTML = result.location.name;
        tempElement.innerHTML = "Temperature: " + result.current.temp_c + "°C";
        humElement.innerHTML = "Humidity: " + result.current.humidity + "%";
        feelsElement.innerHTML = "Feels Like: " + result.current.feelslike_c + "°C";
        textElement.innerHTML =  "Condition: " + result.current.condition.text;
        
        const iconUrl = `https:${result.current.condition.icon}`;
        iconElement.src = iconUrl;
    } catch (error) {
        console.error(error);
        // Display an error message to the user if needed
    }
}
