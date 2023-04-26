function checkValidValue(guess) {
    const number = +guess

    if (invalidGuess(number)) {
        if (guess.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="play-again" class="btn-play">Jogar Novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {

            elementGuess.innerHTML += '<div>Valor Inválido</div>';
            return
        }
        
    }

    if (numberNotAllowed(number)) {
        elementGuess.innerHTML += `<div>Número inválido: Fale um número entre ${lowerNumber} e ${higherNumber}</div>`
        return
    }

    if (number === secretNumber) {
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era: ${secretNumber}</h3>

            <button id="play-again" class="btn-play">Jogar Novamente</button>
        `
    } else if (number > secretNumber) {
        elementGuess.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `} else {
        elementGuess.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `}
}

function invalidGuess(number) {
    return Number.isNaN(number)
}

function numberNotAllowed(number) {
    return number > higherNumber || number < lowerNumber
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'play-again') {
        window.location.reload()
    }
})