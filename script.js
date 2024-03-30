const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const recitations = document.getElementById('recitations');

playBtn.addEventListener('click', () => {
  audio.play();
});

pauseBtn.addEventListener('click', () => {
  audio.pause();
});

stopBtn.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

recitations.addEventListener('change', () => {
  audio.src = recitations.value;
  audio.play();
});
fetch('https://api.quran.sutanlab.id/surah')
  .then(response => response.json())
  .then(data => {
    data.data.forEach(surah => {
      surah.ayahs.forEach(ayah => {
        if (!qarisSelect.querySelector(`[value="${ayah.audio.primary}"]`)) {
          const option = document.createElement('option');
          option.value = ayah.audio.primary;
          option.textContent = ayah.audio.name;
          qarisSelect.appendChild(option);
        }
      });
    });
  });