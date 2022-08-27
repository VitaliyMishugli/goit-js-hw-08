import Player from '@vimeo/player';

 const options = {
   id: 59777392,
   width: 640,
   loop: true,
 };

 const player = new Player('handstick', {
   id: 19231868,
   width: 640,
 });

 player.on('play', function () {
   console.log('played the video!');
 });


// ============
// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
