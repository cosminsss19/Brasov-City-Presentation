const weatherInfo = document.getElementById('weather-data');

        async function fetchWeather() {
            try {
                const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=45.658&longitude=25.601&current_weather=true');
                const data = await response.json();

                const { temperature, weathercode } = data.current_weather;
                weatherInfo.textContent = `The current temperature in Brasov is ${temperature}°C.`;
            } catch (error) {
                weatherInfo.textContent = 'Failed to load weather data. Please try again later.';
            }
        }

        fetchWeather();