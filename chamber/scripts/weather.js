const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=38.44839018545127&lon=-105.23220502161476&units=imperial&appid=67a41587c37908bf3abddffc574a3967';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=38.44839018545127&lon=-105.23220502161476&cnt=3&units=imperial&appid=67a41587c37908bf3abddffc574a3967';

async function weatherApiFetch(url, forecastUrl) {
    try {
        const response = await fetch(url);
        const forecastResponse = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            if (forecastResponse.ok) {
                const forecastData = await forecastResponse.json();
                console.log(forecastData);
                displayResults(data, forecastData);
            } else {
                // throw Error(await forecastResponse.text());
            }
            displayResults(data, null);
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
} 

weatherApiFetch(url, forecastUrl);

function displayResults(data, forecastData) {
    currentTemp.innerHTML = `<strong>${data.main.temp}&deg;F</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `icon of ${desc}`);
    captionDesc.textContent = `${desc}`;
}

