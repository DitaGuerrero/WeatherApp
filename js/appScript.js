const form = document.querySelector("form");
const answerSection = document.querySelector("div.answerSection");

//Create weather cards with current conditions
const createWeatherTemplate = (city, weather, answerSection) => {
    answerSection.innerHTML = "";

    //Image background
    let imgBackgroundUrl = weather.IsDayTime
        ? "./img/day.svg"
        : "./img/night.svg";
    const weatherImgBackground = document.createElement("img");
    weatherImgBackground.setAttribute("src", imgBackgroundUrl);
    weatherImgBackground.classList.add("weatherImgBackground");

    //Icon selection
    const weatherImg = document.createElement("img");
    let iconUrl = `./img/icons/${weather.WeatherIcon}.svg`;
    weatherImg.setAttribute("src", iconUrl);
    weatherImg.classList.add("weatherImg");

    //City Name
    const cityName = document.createElement("h1");
    cityName.innerHTML = `${city.EnglishName} ${city.Country.EnglishName}`;

    //Weather Text
    const weatherText = document.createElement("h2");
    weatherText.innerHTML = `${weather.WeatherText}`;

    //Temperature
    const temperature = document.createElement("h2");
    temperature.innerHTML = `${weather.Temperature.Metric.Value} &deg C`;

    answerSection.appendChild(weatherImgBackground);
    answerSection.appendChild(weatherImg);
    answerSection.appendChild(cityName);
    answerSection.appendChild(weatherText);
    answerSection.appendChild(temperature);
};

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let firstCity;
    let weatherDetails;
    try {
        firstCity = await getKeyFromFirstCity(e.target[0].value);
        weatherDetails = await getDataByCityId(firstCity.Key);
        createWeatherTemplate(
            firstCity,
            weatherDetails,
            answerSection
        );
    } catch (e) {
        console.log(e);
    }
});
