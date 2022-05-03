// import fetch from 'node-fetch';
// fetch = require('node-fetch');

const key = '38d93e0f7356841b542bc93a03eaed71';
const url = 'http://api.weatherstack.com/current?access_key=38d93e0f7356841b542bc93a03eaed71&query=${city}';
let city;

async function getCityName() {
    let submit = document.querySelector('#submit');
    submit.addEventListener('click', () => {
        let city = document.querySelector('#user-city').value;
        console.log(city);
        return city;
    });
}

async function getWeather(city) {
    /* 
        let city = data.location.name;
        let region = data.location.region;
        let localtime = data.location.localtime;
        let temp = data.current.temp;
        let precip = data.current.precip;
        let humidity = data.current.humidity;
        let weather = data.current.weather_descriptions;
    */

    await fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

    // try {
    //     let res = await fetch('http://api.weatherstack.com/current?access_key=${key}&query=${city}');
    //     let data = await res.json();
    //     console.log(data);
    // } catch (error) {
    //     console.log(error);
    // }
}

getWeather(getCityName());





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