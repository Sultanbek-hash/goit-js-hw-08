import Player from '@vimeo/player';
import throttle  from 'lodash.throttle';

const iframeVidoe = document.querySelector('iframe');
const play = new Player(iframeVidoe);
let throttle = require('lodash.throttle');

const setCurrentTimeUpdate = function (data){
    const currenTIme = data.seconds;
    localStorage.setItem('videoplayer-current-time', currenTIme);
}

play.on('timeupdate', throttle(setCurrentTimeUpdate, 1_000));

const getCurrentTimeUpdate = localStorage.getItem('videoplayer-current-time');

if (getCurrentTimeUpdate) {
    play.setCurrentTime(getCurrentTimeUpdate);
}