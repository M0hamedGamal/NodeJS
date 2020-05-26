/* To use NPM package make these steps
    1. Make sure you are into the project folder
    2. Open terminal
    3. Type --> npm init -y               // -y --> yes uses the default
    4. Type --> npm i request@2.88.0     // request@version  install request lib for HTTP request to allow us to import it          
*/
const request = require('request')

// First Challenge
// this url from https://openweathermap.org/current   down to: 'By city ID:' & copy link
const openWeather = (CityID, callback) => {
    // encodeURIComponent --> Save URL from crashing If the user entered special chars like this '?' .
    const firstUrl = 'http://api.openweathermap.org/data/2.5/weather?id=' + encodeURIComponent(CityID) + '&appid=5016069146a7b714c35e811c564862a3'   // Store url into variable 

    // request HTTP take two params 1st --> {url & allow json data}  2nd --> callback (error & response)
    request({ url: firstUrl, json: true }, (error, response) => {

        if (error) {
            callback('Cannot fetch the response!')  // send msg into 1st param & if there's no param 2nd that will make it undefined by default
        } else {
            // Hint: Check structure of response before checking the code.
            callback(undefined, {
                Latitude: response.body.coord.lat,
                Longitude: response.body.coord.lon,
                Location: response.body.name
            })   //  .. check url link
        }
    })
}

module.exports = openWeather