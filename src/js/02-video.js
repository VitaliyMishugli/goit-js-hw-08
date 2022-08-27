import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

// Метод on() та подія timeupdate 



const onTimeupdate = function (data) {
  
  // {
  //   duration: 61.857;
  //   percent: 0.049;
  // }
  console.log(duration, percent);
  // localStorage.set('videoplayer-current-time', );
};

player.on('timeupdate', onTimeupdate);
