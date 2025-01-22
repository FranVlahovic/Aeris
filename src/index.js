import './styles.css';
import { toggleSearchbar } from './modules/searchbar';
import { toggleInfoPopup, copyEmailListener } from './modules/developerInfo';
import {
    displayCurrentWeather,
    displayWeekWeather,
    displayHourlyWeather,
} from './modules/dom.js';
import { fetchWeatherData } from './modules/api.js';

export const fetchAndDisplayWeather = (location) => {
    fetchWeatherData(location).then((data) => {
        if (data && data.days) {
            const switchBtn = document.querySelector('.switch-button');
            const hourDiv = document.querySelector('.hour-div');
            const weekDiv = document.querySelector('.week-div');
            const todayWeather = data.days[0];

            displayCurrentWeather(data.resolvedAddress, todayWeather);
            displayWeekWeather(data.days);

            let isWeekDisplayed = true;

            switchBtn.addEventListener('click', () => {
                if (isWeekDisplayed) {
                    displayHourlyWeather(todayWeather);
                    weekDiv.classList.remove('toggle-div');
                    hourDiv.classList.add('toggle-div');
                } else {
                    displayWeekWeather(data.days);
                    hourDiv.classList.remove('toggle-div');
                    weekDiv.classList.add('toggle-div');
                }
                isWeekDisplayed = !isWeekDisplayed;
            });
        } else {
            console.error('No weather data available');
        }
    });
};

toggleSearchbar();
toggleInfoPopup();
copyEmailListener();
fetchAndDisplayWeather('Rijeka');
