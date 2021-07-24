const apiKey = "xcgqyKOELLfF34Bu5gCCAsPomLCBiLnR";
const cityURI =
    "http://dataservice.accuweather.com/locations/v1/cities/search?";
const weatherURI =
    "http://dataservice.accuweather.com/currentconditions/v1/";

console.log(process.env.TEST);
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

const getKeyFromFirstCity = (city) =>
    new Promise((resolve, reject) => {
        const url =
            cityURI +
            `apikey=${apiKey}&q=${city.trim().replace(" ", "%20")}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                resolve(data[0].Key);
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
            .then((data) => {
                console.log(data[0]);
                resolve(data[0]);
            })
            .catch((error) => {
                reject(error);
            });
    });
