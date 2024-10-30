const phrases = ["Frontend Developer", "Web designer", "Problem Solver"];
let phraseIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenPhrases = 2000;

const typedTextElement = document.getElementById("typed-text");

function type() {
    if (charIndex < phrases[phraseIndex].length) {
        typedTextElement.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenPhrases);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextElement.textContent = phrases[phraseIndex].substring(
            0,
            charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, delayBetweenPhrases);
});
