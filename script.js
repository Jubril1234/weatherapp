async function checker() {
    let city = document.getElementById("cityInput").value;
    if (city.trim() === "") {
        alert("Please enter a city name!");
        return;
    }

    let apiKey = "d4dd7b4f3b9e50a353ebafc58303799b";  // Replace with your OpenWeatherMap API key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        let data = await response.json();

        let weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        let weatherHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <img src="${weatherIcon}" class="weather-icon" alt="Weather Icon">
            <p class='text'>Temperature: <strong>${data.main.temp}°C</strong></p>
            <p class='text'>Humidity: <strong>${data.main.humidity}%</strong></p>
            <p class='text'>Weather: <strong>${data.weather[0].description}</strong></p>
        `;
        document.getElementById("weatherResult").innerHTML = weatherHTML;
    } catch (error) {
        alert("Error fetching weather data!");
    }
}