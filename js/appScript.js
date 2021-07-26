const form = document.querySelector("form");

//Create weather cards with current conditions
const createWeatherTemplate = (city, weather) => {
    //Div Card
    const answerSection = document.createElement("div");
    answerSection.classList.add("answerSection");
    answerSection.classList.add("card");
    answerSection.classList.add("col-11");
    answerSection.classList.add("col-md-5");
    answerSection.innerHTML = "";

    //Image background
    let imgBackgroundUrl = weather.IsDayTime
        ? "./img/day.svg"
        : "./img/night.svg";
    const weatherImgBackground = document.createElement("img");
    weatherImgBackground.setAttribute("src", imgBackgroundUrl);
    weatherImgBackground.classList.add("card-img");

    //Icon selection
    const weatherImg = document.createElement("img");
    let iconUrl = `./img/icons/${weather.WeatherIcon}-s.png`;
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

    //Erase every content in the div wrapper where will be the weather info
    const wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = "";

    //Adding all elements to the document
    wrapper.appendChild(answerSection);
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
        createWeatherTemplate(firstCity, weatherDetails);
    } catch (e) {
        console.log(e);
    }
});
