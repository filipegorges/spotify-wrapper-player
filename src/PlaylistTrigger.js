const albumTracks = document.getElementById('album-tracks');
let audioObject = null;

export default function PlaylistTrigger() {
  albumTracks.addEventListener('click', (e) => {
    const target = e.target.parentNode;

    if (audioObject) {
      audioObject.pause();
    }

    audioObject = new Audio(target.getAttribute('data-track-preview'));
    audioObject.play();
    target.classList.add('active');

    audioObject.addEventListener('pause', () => {
      audioObject.pause();
      target.classList.remove('active');
    });
  });
}
