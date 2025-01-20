import './styles.css';
import { toggleSearchbar } from './modules/searchbar';
import { toggleInfoPopup, copyEmailListener } from './modules/developerInfo';
import { displayCurrentWeather } from './modules/dom.js';
import { fetchWeatherData } from './modules/api.js';

export const fetchAndDisplayWeather = (location) => {
    fetchWeatherData(location).then((data) => {
        if (data && data.days && data.days.length > 0) {
            const todayWeather = data.days[0];
            displayCurrentWeather(data.resolvedAddress, todayWeather);
        } else {
            console.error('No weather data available');
        }
    });
};

toggleSearchbar();
toggleInfoPopup();
copyEmailListener();
fetchAndDisplayWeather('rijeka');
