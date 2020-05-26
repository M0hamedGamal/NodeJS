const geoCode = require('./utils/geoCode')    // Connect with geoCode file 
const openWeather = require('./utils/openWeather')    // Connect with openWeather file 

// First Challenge
// Call the function from utils folder openWeather.js file
// try to change CityID to 771401 or 771158
openWeather('18918', (error, data) => { // Params are --> ID & Callback
    if (error)
        console.log('Error: ', error)
    else
        console.log('OpenWeather Data: ', data)
})

/* 
// Second Challenge
// Call the function from utils folder geoCode.js file
// try to change Country to Los Angeles
geoCode('New York', (error, data) => {   // Params are --> country & Callback
    if (error)
        console.log('Error: ', error)
    else
        console.log('GeoCode Data: ', data)
})
 */