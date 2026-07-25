const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forcastDiv = document.querySelector('.forecast');
const today = new Date();
const url = 'https://api.weatherapi.com/v1/forecast.json?key=e80bfbced5324aa384b200346262507&q=81212&days=4&dt=' + today;

async function weatherApiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
}




weatherApiFetch(url);

function displayResults(data) {
    currentTemp.innerHTML = `<strong>${data.current.temp_f}&deg;F</strong>`;
    const iconsrc = `https:${data.current.condition.icon}`;
    let desc = data.current.condition.text;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `icon of ${desc}`);
    captionDesc.textContent = `${desc}`;
    const days = (data.forecast.forecastday).splice(1, 3);
    console.log(days);
    days.forEach((day) => {
        let date = document.createElement('p');
        date.textContent = day.date;
        let temp = document.createElement('p');
        temp.innerHTML = `<strong>${day.day.avgtemp_f}&deg;F</strong>`;
        let fig = document.createElement('figure');
        let forecastIcon = document.createElement('img');
        let figCap = document.createElement('figcaption');
        const forecastDesc = day.day.condition.text;
        const forecastIconSrc = `https:${day.day.condition.icon}`;
        forecastIcon.setAttribute('src', forecastIconSrc);
        forecastIcon.setAttribute('alt', forecastDesc);
        figCap.innerHTML = forecastDesc;
        fig.appendChild(forecastIcon);
        fig.appendChild(figCap);
        forcastDiv.appendChild(date);
        forcastDiv.appendChild(temp);
        forcastDiv.appendChild(fig);
    })

}

