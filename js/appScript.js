const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    getKeyFromFirstCity(e.target[0].value)
        .then((cityId) => {
            console.log(cityId);
            getDataByCityId(cityId);
        })
        .catch(onerror);
});
