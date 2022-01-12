const keys = [...document.querySelectorAll('.single-key')];

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.single-key[data-key="${e.key}"]`);
    if (!audio) return;
    audio.currentTime = 0; // rewind to the start of audio
    audio.play();
    key.classList.add('playing')
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);