import windstatusIcon from '../assets/icons/highlight-icons/windsock.svg';
import uvindexIcon from '../assets/icons/highlight-icons/white-balance-sunny.svg';
import humidIcon from '../assets/icons/highlight-icons/water-outline.svg';
import visibilityIcon from '../assets/icons/highlight-icons/eye-outline.svg';
import feelslikeIcon from '../assets/icons/highlight-icons/thermometer.svg';

const currentWeatherContainer = document.querySelector('.current-container');
const highlightCardContainer = document.querySelector('.highlight-cards');
const weeklyCardsContainer = document.querySelector('.cards-container');

const iconsContext = require.context(
    '../assets/icons/weather-icons',
    false,
    /\.svg$/,
);
const icons = iconsContext.keys().reduce((acc, path) => {
    const iconName = path.replace('./', '').replace('.svg', ''); // Extract icon name
    acc[iconName] = iconsContext(path); // Map icon name to the imported file
    return acc;
}, {});

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
                <p>${new Date().toLocaleString('en-GB', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                })}</p>
            </div>
            
        </div>

        <img src="${icons[weather.icon]}" alt="Weather Icon">
    `;

    highlightCardContainer.innerHTML = `
        <div class="wind-status">
            <img src="${windstatusIcon}" alt="">
            <div class="heading-value">
                <h3>Wind Status</h3>
                <p>${weather.windspeed} km/h</p>
            </div>
        </div>

        <div class="uv-index">
            <img src="${uvindexIcon}" alt="">
            <div class="heading-value">
                <h3>UV Index</h3>
                <p>${weather.uvindex}</p>
            </div>
        </div>

        <div class="humid">
            <img src="${humidIcon}" alt="">
            <div class="heading-value">
                <h3>Humidity</h3>
                <p>${weather.humidity}%</p>
            </div>
        </div>

        <div class="visibility">
            <img src="${visibilityIcon}" alt="">
            <div class="heading-value">
                <h3>Visibility</h3>
                <p>${weather.visibility} km</p>
            </div>
        </div>

        <div class="feels-like">
            <img src="${feelslikeIcon}" alt="">
            <div class="icon-and-heading">
                <h3>Feels Like</h3>
                <p>${weather.feelslike}°C</p>
            </div>
        </div>
    `;
};

export const displayWeekWeather = (days) => {
    weeklyCardsContainer.innerHTML = '';

    const weekDays = days.slice(0, 7);

    weekDays.forEach((day) => {
        weeklyCardsContainer.innerHTML += `
            
            <div class="week-card">
                <div class="day-week">
                    <h3>${new Date(day.datetime).toLocaleDateString('en-GB', {
                        weekday: 'long',
                    })}</h3>
                </div>

                <img src="${icons[day.icon]}" alt="Weather Icon">
                
                <div class="temp-min-max">
                    <p class="max-temp">${day.tempmax}°C</p>
                    <p class="min-temp">${day.tempmin}°C</p>
                </div>
            </div>
        `;
    });
};

export const displayHourlyWeather = (weather) => {
    weeklyCardsContainer.innerHTML = '';

    const desiredHours = [
        '06:00:00',
        '09:00:00',
        '12:00:00',
        '15:00:00',
        '18:00:00',
        '21:00:00',
    ];
    const hourlyData = weather.hours;

    desiredHours.forEach((time) => {
        const hourData = hourlyData.find((hour) => hour.datetime === time);

        weeklyCardsContainer.innerHTML += `
            <div class="hour-card">
                <div class="day-hour">
                    <h3>${time.substring(0, 5)}</h3>
                </div>

                <img src="${icons[hourData.icon]}" alt="Weather Icon">
                
                <div class="temp-min-max">
                    <p class="max-temp">${hourData.temp}°C</p>
                    <p class="hour-wind">${hourData.windspeed}km/h</p>
                </div>
            </div>
        `;
    });
};
