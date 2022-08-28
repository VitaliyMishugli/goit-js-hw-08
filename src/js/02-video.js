import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(playerBackTime, 1000));

function playerBackTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

const savedData = localStorage.getItem('videoplayer-current-time');

if (savedData) {
  player
    .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
      console.log(seconds);
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}

