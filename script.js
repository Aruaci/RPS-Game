let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

let text = document.getElementById('text');
let scoreCount = document.getElementById('score');

let startBtn = document.getElementById('startBtn');

rock.style.visibility = 'hidden';
paper.style.visibility = 'hidden';
scissors.style.visibility = 'hidden';

function restartBtn() {
    startBtn.innerText = 'Restart';
    startBtn.style.visibility = 'visible';
    rock.style.visibility = 'hidden';
    paper.style.visibility = 'hidden';
    scissors.style.visibility = 'hidden';
}

let score = 0;

function startGame() {
    startBtn.style.visibility = 'hidden';

    rock.style.visibility = 'visible';
    paper.style.visibility = 'visible';
    scissors.style.visibility = 'visible';

    let computerChoice = Math.floor(Math.random() * 3);

    text.innerHTML = 'Make your choice:';
    
    let userChoice = '';

    rock.addEventListener('click', function() {
        userChoice = 1;
        console.log('You chose rock');

        if (computerChoice === 3 ) {
            text.innerHTML = 'Congratulations, you win';
            score++;
            console.log('win');
        } else if (computerChoice === 2) {
            text.innerHTML = 'You lost...';
            console.log('loss');     
        } else {
            text.innerHTML = 'Oh! A draw...'
            console.log('draw');
        }
        restartBtn();
    })

    paper.addEventListener('click', function() {
        userChoice = 2;
        console.log('You chose paper');

        if (computerChoice === 1 ) {
            text.innerHTML = 'Congratulations, you win';
            score++;
            console.log('win');
        } else if (computerChoice === 3) {
            text.innerHTML = 'You lost...';
            console.log('loss');    
        } else {
            text.innerHTML = 'Oh! A draw...'
            console.log('draw');
        }
        restartBtn();
    })

    scissors.addEventListener('click', function() {
        userChoice = 3;
        console.log('You chose scissors');

        if (computerChoice === 2 ) {
            text.innerHTML = 'Congratulations, you win';
            score++;
            console.log('win');
        } else if (computerChoice === 1) {
            text.innerHTML = 'You lost...';
            console.log('loss');   
        } else {
            text.innerHTML = 'Oh! A draw...'
            console.log('draw');
        }
        
        restartBtn();
    })
    
    console.log(score);
/*
    if (userChoice === 1 && computerChoice === 2 || userChoice === 2 && computerChoice === 3 || userChoice === 3 && computerChoice === 1) {
        text.innerHTML = 'You lost';
    }
*/
}
