const weatherIcons = {
    "Clear": "fas fa-sun",          
    "Sunny": "fas fa-sun",
    "Partly cloudy": "fas fa-cloud-sun",
    "Cloudy": "fas fa-cloud",
    "Overcast": "fas fa-smog",
    "Mist": "fas fa-smog",
    "Patchy rain possible": "fas fa-cloud-showers-heavy",
    "Rain": "fas fa-cloud-rain",
    "Snow": "fas fa-snowflake",
    "Thunderstorm": "fas fa-bolt"
};

function fetchWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '50e77fe325a8492790d50746253001';
    
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            const condition = data.current.condition.text;
            const iconClass = weatherIcons[condition] || "fas fa-question-circle"; // Default icon if not found
            
            weatherInfo.innerHTML = `
                <h3>${data.location.name}, ${data.location.country}</h3>
                <p>${data.current.temp_c}°C</p>
                <p>${data.current.condition.text}</p>
                <i class="${iconClass} fa-3x"></i>
            `;
        })
        .catch(error => console.log('Error:', error));
}
