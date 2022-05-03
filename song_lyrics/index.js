/*
    Author: Noah Johnson
    Last Updated: 3 May 2022 09:32 EST
    description: Javascript for Project 0
*/

document.querySelector('#submit').addEventListener('click', getLyrics);
document.querySelector('#click').addEventListener('click', getEvents);

async function getLyrics() {
    try {
        let artist = document.querySelector('#artist').value;
        let song = document.querySelector('#song').value;

        fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            let lyricString = decodeURI(data.lyrics);
            lyricString = lyricString.replace(/(?:\r\n|\r|\n)/g, '<br>');
            document.querySelector('#lyrics').innerHTML = lyricString;
            artist = artist.charAt(0).toUpperCase() + artist.slice(1);
            song = song.charAt(0).toUpperCase() + song.slice(1);
            document.querySelector('#title').innerHTML = artist + ": " + song + " (Lyrics) ";
        }).catch(() => {
            document.querySelector('#lyrics').innerHTML = "Lyrics not found. Sorry! Try again";
        })
    } catch (error) {
        console.log(error);
    }
   
}

// async function getEvents() {
//     let artist = document.querySelector('#artist').value;
//     console.log(artist);
//     fetch(`https://bandsintown.com/artists/${artist}/events/?app_id=6244bb7b-e10a-4b56-bfb5-89d5ddae25ab`)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         let url = data.url.value;
//         console.log(url);
//         // document.querySelector('#click').setAttribute('href', "`" + url + "`");
//     })
// }