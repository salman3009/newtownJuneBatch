const request = require('request')

const url = 'https://api.darksky.net/forecast/bcb8a78600d13415a708157073c24dc4/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently);
})
