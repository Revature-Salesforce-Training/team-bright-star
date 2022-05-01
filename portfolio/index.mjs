import { fetch } from 'node-fetch';
fetch('https://api.chucknorris.io/jokes/random?category={explicit}').then(res =>  
    res.json()).then(data => 
    console.log(data.value));