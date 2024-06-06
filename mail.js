const startBtn = document.getElementById('start');
const cardsE1 = document.querySelectorAll('.card');
const timeControlerE1 = document.querySelector('.time-list');
const modal = document.getElementById('modal');
const board = document.getElementById('board');
const timeEl = document.getElementById('time');
const scroEl = document.getElementById('score');


let selectedTime = null
let time = null
let idSetInterval = null

function handlerStarBtn (event) {
    event.preventDefault()
    cardsE1[0].classList.add('up')
}

startBtn.addEventListener('click', handlerStarBtn)

function handlerTimeControler (event) {
    if(event.target.classList.contains('time-list__item')) {
        // console.log('fgfg')
        cardsE1[1].classList.add('up')
        selectedTime = parseInt(event.target.dataset.time);
        time = selectedTime;
        console.log(time)
        startGame()
    }
}

// timeControlerE1.addEventListener('click', function (event) {
//    if(timeControlerE1.classList.contains('time-list__item')) {
//     console.log(event.target)
//    } else {
//     console.log('fgfg')
//    }
// })
    

timeControlerE1.addEventListener('click', handlerTimeControler)

function startGame () {
    setTime(time)
    idSetInterval = setInterval (decTime, 1000)
    console.log(idSetInterval);

}

// --time // valye - 1

function finishGame () {
    console.log('Game over');
    clearTimeout(idSetInterval)

}

function decTime() {
  
    if(time === 0) {
        finishGame()
    } else {
        let current = --time    // time - 1
        // current = current <10?'0'+current:' '+current
        if(current < 10) {
            current = `0${current}`
        }
        setTime(current)
        
    }
  

}

function setTime (timeGame) {
    timeEl.innerHTML = `00:${timeGame}`
}

setTimeout