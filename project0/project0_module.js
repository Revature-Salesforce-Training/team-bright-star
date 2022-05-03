// api key 8006574cdaaa703c9c0460be05172c6e d38667b8d79fe76ac2fa9922f9774148
// geolocation api http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}
//  weather api https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


// weather stack key: 38d93e0f7356841b542bc93a03eaed71

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
fetch('http://api.weatherstack.com/current?access_key=38d93e0f7356841b542bc93a03eaed71&query=Baltimore')
    .then(res => res.json())
    .then(data => console.log("Success" + data)).catch(console.log("error"));

/* weather api
{
    "coord": {
        "lon":-76.6899,
        "lat":39.2856
    },
    "weather": [{
        "id":801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
    }
    ],
    "base": "stations",
    "main": {
        "temp":298.24,
        "feels_like":297.88,
        "temp_min":295.03,
        "temp_max":300.6,
        "pressure":1013,
        "humidity": 41
    },
    "visibility": 10000,
    "wind": {
        "speed":3.13,
        "deg":253,
        "gust":4.47
    },
    "clouds": {"all":20},
    "dt":1651526866,
    "sys": {
        "type":2,"id":2008241,"country":"US","sunrise":1651486013,"sunset":1651536025
    },
    "timezone": -14400,
    "id": 4351037,
    "name": "Charlestown",
    "cod": 200
}

*/
fetch('https://api.openweathermap.org/data/2.5/weather?lat=39.2856&lon=-76.6899&appid=8006574cdaaa703c9c0460be05172c6e')
    .then(res => res.json())
    .then(data => console.log("Success" + data)).catch(console.log("error"));

    /* geolocation api
        Json output:    
        {
            "zip":"21229",
            "name":"Baltimore",
            "lat":39.2856,
            "lon":-76.6899,
            "country":"US"
        }
    */
fetch('http://api.openweathermap.org/geo/1.0/zip?zip=21229,us&appid=8006574cdaaa703c9c0460be05172c6e')
    .then(res => res.json())
    .then(data => console.log("Success" + data)).catch(console.log("error"));

