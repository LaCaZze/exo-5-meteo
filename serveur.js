const express = require('express')
const app = express()
var request = require('request');



// Route qui pointe vers l'index
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

// Route qui pointe vers la recuperation des données JSON
// app.get('/meteo', function (req, res) {
//     // response.send('http://api.openweathermap.org/data/2.5/weather?q=paris&appid=5b845a23575745f32f6044910b548fa7');

//     request('http://api.openweathermap.org/data/2.5/weather?q=paris&appid=5b845a23575745f32f6044910b548fa7', function (error, response, body) {
//         console.log('error:', error); // Print the error if one occurred
//         console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//         console.log('body:', body); // Print the HTML for the Google homepage.

//         res.json(JSON.parse(body));

app.get('/meteo/reunion', function (req, res) {

    let request = require('request');

    let apiKey = '5b845a23575745f32f6044910b548fa7'
    let city = 'reunion';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
        } else {
            console.log('body:', body);
        }
        res.send(response)
    });


});










app.listen(3093)


