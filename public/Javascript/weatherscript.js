const weatherInfo = document.getElementById('weather-data');

// Clasa pentru gestionarea datelor meteo
class WeatherApi {
    constructor() {
        this.baseUrl = 'https://api.open-meteo.com/v1/forecast';
        this.latitude = 45.658;
        this.longitude = 25.601;
    }

    getWeather() {
        return new Promise((resolve, reject) => {
            fetch(`${this.baseUrl}?latitude=${this.latitude}&longitude=${this.longitude}&current_weather=true`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    resolve(data.current_weather);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}

// Crearea instanței și utilizarea clasei
const weatherApi = new WeatherApi();

function displayWeather() {
    weatherInfo.textContent = 'Loading weather data...';

    weatherApi.getWeather()
        .then(weatherData => {
            weatherInfo.textContent = `The current temperature in Brasov is ${weatherData.temperature}°C.`;
        })
        .catch(error => {
            weatherInfo.textContent = 'Failed to load weather data. Please try again later.';
            console.error('Error:', error);
        });
}

// Inițializarea afișării vremii
displayWeather();