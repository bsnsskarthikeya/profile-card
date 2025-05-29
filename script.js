document.querySelector('.card').addEventListener('click', function() {
    this.classList.toggle('flipped');
});

// Create bubble effect
function createBubbles() {
    const bubbles = document.querySelector('.bubbles');
    for (let i = 0; i < 50; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.setProperty('--size', `${2 + Math.random() * 4}rem`);
        bubble.style.setProperty('--distance', `${6 + Math.random() * 4}rem`);
        bubble.style.setProperty('--position', `${-5 + Math.random() * 110}%`);
        bubble.style.setProperty('--time', `${2 + Math.random() * 2}s`);
        bubble.style.setProperty('--delay', `${-1 * (2 + Math.random() * 2)}s`);
        bubbles.appendChild(bubble);
    }
}

createBubbles();