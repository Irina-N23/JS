"use strict"

const fetch = require("node-fetch");
const REQUESTED_URL = "http://www.groupkt.com/country/get/all";

function printIsoCodesOfCountry(url, chosenCountry) {
    fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(json => {
        json.RestResponse.result.forEach(country => {
            if (country.name === chosenCountry) {
                console.log(`\nISO codes of ${chosenCountry}: ${country.alpha2_code} and ${country.alpha3_code}.\n`);
            }
        });
    })
    .catch(error => console.error(`\n(!) Network request for ${REQUESTED_URL} failed with error:\n ${error}.\n`));
}

printIsoCodesOfCountry(REQUESTED_URL, "Norway");