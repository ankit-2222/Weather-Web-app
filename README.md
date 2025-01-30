# Weather App

This is a simple and responsive Weather App that fetches real-time weather data using the WeatherAPI and displays beautiful weather icons from Icons8.

## Features
- Get real-time weather information.
- Displays temperature, weather condition, and location.
- Uses Icons8 weather icons for better UI.
- Responsive design for desktop and mobile views.
- Uses HTML, CSS, and JavaScript (Fetch API).

## Technologies Used
- **HTML**: Structure of the app.
- **CSS**: Styling and responsive design.
- **JavaScript (Fetch API)**: Fetches weather data from the WeatherAPI.
- **Fontawesome**: External weather icons.

## API Used
- **WeatherAPI** ([WeatherAPI.com](https://www.weatherapi.com/))
- API Endpoint: `http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=City&aqi=yes`

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/weather-app.git
   cd weather-app
   ```
2. Replace `YOUR_API_KEY` with your API key from WeatherAPI.
3. Open `index.html` in a browser.

## File Structure
```
weather-app/
│── index.html      # Main HTML file
│── styles.css      # Styling
│── script.js       # JavaScript for fetching weather data
```

## How It Works
1. Enter the city name in the input box.
2. Click the "Get Weather" button.
3. The app fetches weather data and displays:
   - City & Country
   - Temperature (°C)
   - Weather condition
   - Fontawesome weather icon

## Example API Response (JSON)
```json
{
  "location": {
    "name": "London",
    "country": "United Kingdom"
  },
  "current": {
    "temp_c": 15,
    "condition": {
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png"
    }
  }
}
```

## Credits
- [WeatherAPI](https://www.weatherapi.com/)
- [Fontawesome](https://fontawesome.com/)

## License
This project is open-source under the MIT License.

