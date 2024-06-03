let progressValue = document.querySelector(".progress-value");

function updateProgress(progress, progressBarId) {
    const progressBar = document.getElementById(progressBarId);
    progressBar.style.width = progress + '%';
}

function startProgressBar(progress, intervalTime, progressBarId, stopPoint) {
    let currentProgress = 0;
    const interval = setInterval(() => {
        currentProgress += progress;
        if (currentProgress >= stopPoint) {
            clearInterval(interval);
        }
        updateProgress(currentProgress, progressBarId);
    }, intervalTime);
}

function startProgressBar2(progress, intervalTime, progressBarId, stopPoint) {
    let currentProgress = 0;
    const interval = setInterval(() => {
        currentProgress += progress;
        if (currentProgress >= stopPoint) {
            clearInterval(interval);
        }
        updateProgress(currentProgress, progressBarId);
    }, intervalTime);
}

function startProgressBar3(progress, intervalTime, progressBarId, stopPoint) {
    let currentProgress = 0;
    const interval = setInterval(() => {
        currentProgress += progress;
        if (currentProgress >= stopPoint) {
            clearInterval(interval);
        }
        updateProgress(currentProgress, progressBarId);
    }, intervalTime);
}

function startProgressBar4(progress, intervalTime, progressBarId, stopPoint) {
    let currentProgress = 0;
    const interval = setInterval(() => {
        currentProgress += progress;
        if (currentProgress >= stopPoint) {
            clearInterval(interval);
        }
        updateProgress(currentProgress, progressBarId);
    }, intervalTime);
}

startProgressBar(1, 100, 'progress', 25);
startProgressBar2(1, 100, 'progress2', 50);
startProgressBar3(1, 100, 'progress3', 75);
startProgressBar4(1, 100, 'progress4', 100);




const liens = document.querySelectorAll('a');

window.addEventListener('load', () =>{

    const TL = gsap.timeline({paused: true});

    TL.staggerFrom(liens, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.5);

    TL.play();
})

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    function animateCards() {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, index * 700);
        });
    }

    animateCards();
});