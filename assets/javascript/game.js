let targetScore = 0
let currentScore = 0
let stoneScores = [0, 0, 0, 0]
let wins = 0
let losses = 0

const setupGame = _ => {
    targetScore = Math.floor(Math.random() * 101) + 19
    stoneScores.forEach((element, i, arr) => arr[i] = Math.floor(Math.random() * 11) + 1)
    console.log(stoneScores)
    currentScore = 0
    updateDocument()
}

const updateDocument = _ => {
    // document.getElementById('target-score').textContent = targetScore
    $('#target-score').text(targetScore)
    // document.getElementById('wins').textContent = wins
    $('#wins').text(wins)
    // document.getElementById('losses').textContent = losses
    $('#losses').text(losses)
    // document.getElementById('current-score').textContent = currentScore
    $('#current-score').text(currentScore)
}

const win = _ => {
    wins++
    swal({
        title: 'CONGRADULATIONS',
        text: 'You won the game!',
        icon: 'success'
    })
    setupGame()
}

const lose = _ => {
    losses++
    swal({
        title: 'YOU LOST',
        text: `Better luck next time.`,
        icon: 'error'
    })
    setupGame()
}

const checkScore = _ => {
    updateDocument()
    if (currentScore === targetScore) {
        win()
    } else if(currentScore > targetScore) {
        lose()
    }
}

setupGame()


document.getElementById('blue-stone').onclick = event => {
    console.log('Clicked blue stone.')
    currentScore += stoneScores[0]
    checkScore()
}

document.getElementById('green-stone').onclick = event => {
    console.log('Clicked green stone.')
    currentScore += stoneScores[1]
    checkScore()
}

document.getElementById('purple-stone').onclick = event => {
    console.log('Clicked purple stone.')
    currentScore += stoneScores[2]
    checkScore()
}

document.getElementById('yellow-stone').onclick = event => {
    console.log('Clicked yellow stone.')
    currentScore += stoneScores[3]
    checkScore()
}