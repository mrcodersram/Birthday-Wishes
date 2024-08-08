document.getElementById('celebrate-btn').addEventListener('click', function () {
    launchConfetti();
    displayWishMessage();
});

function launchConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiContainer.appendChild(confetti);
    }
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}

function displayWishMessage() {
    const wishText = document.getElementById('wish-text');
    wishText.textContent = 'Hope your birthday is as amazing as you are!';
}

// CSS for confetti effect
const confettiStyle = document.createElement('style');
confettiStyle.innerHTML = `
.confetti {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: hsl(${Math.random() * 360}, 100%, 50%);
    animation: confetti-fall linear infinite;
}

@keyframes confetti-fall {
    from {
        transform: translateY(-100vh) rotate(0deg);
    }
    to {
        transform: translateY(100vh) rotate(720deg);
    }
}`;
document.head.appendChild(confettiStyle);
