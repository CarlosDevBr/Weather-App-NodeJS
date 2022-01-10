const request = require('request')
const chalk = require('chalk')

// const url = 'http://api.weatherstack.com/current?access_key=7b9504fbd97294097995148c63564f89&query=37.8267,-122.4233&units=f'

// request({ url: url , json: true }, (error, response) => {   
//     if (error){
//         console.log('Unable to connect to weather service!')
//     } else if(response.body.error){
//         console.log('Unable to find location')
//     } else {
//         const weather = response.body.current
//         console.log(chalk.blue('It is currently '+ weather.temperature + ' degress out. It feel like '+ weather.feelslike +' degress out'))
//     }
// })

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/n%C3%A3oexite.json?access_token=pk.eyJ1IjoiY2FybG9zZGV2YXBpIiwiYSI6ImNreTRpbDdoMjBjYnkybnBrZTAzemtyamEifQ.blSMwRif0FRhNT8YzX5W5g&limit=1'

request({ url: geocodeURL, json:true}, (error, response) => {
    if (error){
        console.log('Unable to connect to location service!')
    } else if(response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } 
    else {
        const geoLocation = response.body.features[0].center
        console.log(geoLocation[0],geoLocation[1])
    } 
})