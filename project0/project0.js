// import fetch from 'node-fetch';
// fetch = require('node-fetch');

const KEY = '38d93e0f7356841b542bc93a03eaed71';
let url = 'http://api.weatherstack.com/current?access_key=38d93e0f7356841b542bc93a03eaed71&query=${city}';

// my way
function getCityName() {
    document.querySelector('#submit').addEventListener('click', () => {
        let city = document.querySelector('#user-city').value;
        console.log(city);
  
        fetch(`http://api.weatherstack.com/current?access_key=${KEY}&query=${city}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
        })
        .catch(error => console.log(error));
    });
}

// ethan method
document.querySelector('#submit').addEventListener('click', getCity);

async function getCity() {
    let city = document.querySelector('#user-city').value;

    fetch(`http://api.weatherstack.com/current?access_key=${KEY}&query=${city}`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        let weatherInfo = new Array();
        let city = data.location.name;
        let region = data.location.region;
        let localtime = data.location.localtime;
        let temp = data.current.temp;
        let precip = data.current.precip;
        let humidity = data.current.humidity;
        let weather = data.current.weather_descriptions;

        console.log(data);
    })
    .catch(error => console.log(error));
}


/*
{
    "request": {
        "type":"City",
        "query":"Baltimore, United States of America",
        "language":"en",
        "unit":"m"
    }, 
    "location": {
        "name":"Baltimore",
        "country":"United States of America",
        "region":"Maryland",
        "lat":"39.290",
        "lon":"-76.613",
        "timezone_id":"America\/New_York",
        "localtime":"2022-05-02 17:33",
        "localtime_epoch":1651512780,
        "utc_offset":"-4.0"
    },
    "current": {
        "observation_time":"09:33 PM",
        "temperature":22,
        "weather_code":113,
        "weather_icons":["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0001_sunny.png"],
        "weather_descriptions":["Sunny"],
        "wind_speed":13,
        "wind_degree":130,
        "wind_dir":"SE",
        "pressure":1016,
        "precip":0,
        "humidity":57,
        "cloudcover":0,
        "feelslike":24,
        "uv_index":6,
        "visibility":16,
        "is_day":"yes"
    }
}
*/