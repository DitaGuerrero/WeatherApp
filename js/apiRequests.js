// const apiKey = "xcgqyKOELLfF34Bu5gCCAsPomLCBiLnR";
const apiKey = "davq7QGzhSJO9muojHI3lDwMODeqEAFA"; //Edu apikey
const cityURI =
    "http://dataservice.accuweather.com/locations/v1/cities/search?";
const weatherURI =
    "http://dataservice.accuweather.com/currentconditions/v1/";

//A different version using async - await
// const getKeyFromFirstCity = (city) =>
//     new Promise(async (resolve, reject) => {
//         try {
//             const url =
//                 cityURI +
//               `apikey=${apiKey}&q=${city.trim().replace(" ", "%20")}`;
//
//             const jsonData = await fetch(url);
//             const data = await jsonData.json();
//             resolve(data[0].Key);
//         } catch (error) {
//             reject(error);
//         }
//     });

const getKeyFromFirstCity = (cityString) =>
    new Promise((resolve, reject) => {
        const url =
            cityURI +
            `apikey=${apiKey}&q=${cityString
                .trim()
                .replace(" ", "%20")}`;
        fetch(url)
            .then((response) => response.json())
            .then((cits) => {
                console.log(cits[0]);
                resolve(cits[0]);
            })
            .catch((error) => {
                reject(error);
            });
    });

const getDataByCityId = (cityId) =>
    new Promise((resolve, reject) => {
        const url = weatherURI + `${cityId}?apikey=${apiKey}`;
        fetch(url)
            .then((response) => response.json())
            .then((weatherDetails) => {
                console.log(weatherDetails[0]);
                resolve(weatherDetails[0]);
            })
            .catch((error) => {
                reject(error);
            });
    });
