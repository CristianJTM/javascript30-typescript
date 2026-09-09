function removeTransition(e: Event) {
    if ((e as TransitionEvent).propertyName !== 'transform') return;
    (e.target as HTMLElement).classList.remove('playing');
}

function playSound(e: KeyboardEvent) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) as HTMLAudioElement;
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) as HTMLDivElement;
    if(!audio) return; 

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function trySound(e: KeyboardEvent) {
    console.log(e);
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);