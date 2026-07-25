const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forcastDiv = document.querySelector('.forecast');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=38.44839018545127&lon=-105.23220502161476&units=imperial&appid=67a41587c37908bf3abddffc574a3967';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=38.44839018545127&lon=-105.23220502161476&units=imperial&appid=67a41587c37908bf3abddffc574a3967';

async function weatherApiFetch(url, forecastUrl) {
    try {
        const response = await fetch(url);
        const forecastResponse = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            if (forecastResponse.ok) {
                const forecastData = await forecastResponse.json();
                console.log(forecastData);
                displayForecast(forecastData);
            } else {
                throw Error(await forecastResponse.text());
            }
            displayResults(currentTemp, data);
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
}

function getForecastByDate(forecastData, date) {
    forecastData.list.forEach((day) => {
        console.log(day.dt);
        console.log(date);
        if (day.dt == date) {
            console.log(day);
            return day;
        }
    })

}

function displayForecast(forecastData) {
    let forecastDate = new Date();
    forecastDate.setHours(12, 0, 0, 0);
    let count = 0;
    while (count < 3) {
        forecastDate.setDate(forecastDate.getDate() + 1);
        console.log(forecastDate);
        const epochSeconds = Math.floor(forecastDate.getTime() / 1000);
        let dayData = getForecastByDate(forecastData, epochSeconds)
        createFig(dayData);
        count++;
    }
    
}

function createFig(data) {
    console.log(data);
    const dateElement = document.createElement('p');
    const date = new Date(data.dt * 1000).toLocaleDateString();
    dateElement.innerHTML = `${date}`
    console.log(date);

}

weatherApiFetch(url, forecastUrl);

function displayResults(id, data) {
    id.innerHTML = `<strong>${data.main.temp}&deg;F</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `icon of ${desc}`);
    captionDesc.textContent = `${desc}`;
}

