// const audio = document.getElementById('audio');
// const playBtn = document.getElementById('play');
// const pauseBtn = document.getElementById('pause');
// const stopBtn = document.getElementById('stop');
// const recitations = document.getElementById('recitations');

// playBtn.addEventListener('click', () => {
//   audio.play();
// });

// pauseBtn.addEventListener('click', () => {
//   audio.pause();
// });

// stopBtn.addEventListener('click', () => {
//   audio.pause();
//   audio.currentTime = 0;
// });

// recitations.addEventListener('change', () => {
//   audio.src = recitations.value;
//   audio.play();
// });
// fetch('https://api.quran.sutanlab.id/surah')
//   .then(response => response.json())
//   .then(data => {
//     data.data.forEach(surah => {
//       surah.ayahs.forEach(ayah => {
//         if (!qarisSelect.querySelector(`[value="${ayah.audio.primary}"]`)) {
//           const option = document.createElement('option');
//           option.value = ayah.audio.primary;
//           option.textContent = ayah.audio.name;
//           qarisSelect.appendChild(option);
//         }
//       });
//     });
//   });




let audio = document.getElementById('audiosource');
let audioplayer = document.getElementById('audio');
let recitations = document.getElementById('recitations');
let qaris = document.getElementById('qaris');
let fontchanger = document.getElementById('fontchanger')
let H1 = document.getElementById('H1')







recitations.addEventListener('change', ()=>{
  audio.src = recitations.value;
  audioplayer.load()
});

qaris.addEventListener('change', ()=>{
  let qariArray = recitations.value.split('/');
  qariArray[4] = qaris.value;
  let stringqariarray = qariArray.toString()
  let fixedstringqariarray = stringqariarray.replaceAll(",", "/")
  audio.src = fixedstringqariarray
  audioplayer.load();
});

fontchanger.addEventListener('change', ()=>{
  H1.style.fontFamily = fontchanger.value;
});




