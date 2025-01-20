const currentWeatherContainer = document.querySelector('.current-container');
const highlightCardContainer = document.querySelector('highlight-cards');
const weeklyCardsContainer = document.querySelector('cards-container');

export const displayCurrentWeather = (resolvedAddress, weather) => {
    currentWeatherContainer.innerHTML = `
        <div class="curr-date-city">
            <div class="curr-weather">
                <h2>${resolvedAddress}</h2>
            </div>
            <div class="curr-city">
                <h3>${weather.conditions}</h3>
                <div class="curr-city-temp">
                    <h2>${weather.temp}°C</h2>
                </div>
            </div>
            <div class="curr-date">
                <p>Weather Forecast on ${new Date(weather.datetime).toLocaleDateString()} </p>
            </div>
            
        </div>

        <img src="assets/icons/weather-icons/${weather.icon}.svg" alt="Weather Icon">
    `;
};

const displayWeekWeather = (days) => {};
