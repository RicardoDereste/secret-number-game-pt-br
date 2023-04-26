const elementGuess = document.getElementById('guess')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    guess = e.results[0][0].transcript
    showGuessNumber(guess)
    checkValidValue(guess)
}

function showGuessNumber(guess) {
    elementGuess.innerHTML = `
        <div>Você disse</div>
        <span class="box">${guess}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())

