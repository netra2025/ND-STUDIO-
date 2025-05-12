const video = document.getElementById('video');
const input = document.getElementById('videoInput');

input.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    video.src = url;
    video.load();
  }
});

function changeSpeed() {
  const speed = document.getElementById('speed').value;
  video.playbackRate = parseFloat(speed);
}
