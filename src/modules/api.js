export const fetchWeatherData = (location) => {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=BVWABLDXXELZ59QXQ4ZCXT99Q`;
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data && data.days) {
                return data;
            }
            throw new Error('No weather data found');
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
};
