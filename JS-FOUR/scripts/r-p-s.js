// declaring variables

const rockPlayer = document.querySelector('.rock');
const paperPlayer = document.querySelector('.paper');
const scissorsPlayer = document.querySelector('.scissors');

// SCORE && RESULT && PLAYERS PARAGRAPHS
// check in pick function

const scoreParag = document.querySelector('.scoreParagraph');
const resultParag = document.querySelector('.resultParagraph');
const playersParag = document.querySelector('.playersParagraph');

// function randomPick()

let computerMove = '';
let playerMove = '';
let result = '';

// setting the score

const score = JSON.parse(localStorage.getItem('score')) ||{
    Wins : 0,
    Losses : 0,
    Ties : 0
}

// FUNCTION RANDOM PICK 

function randomPick(){

    let randomNumber = Math.random();

    // choose computerMove

    if(randomNumber < 1/3){
        computerMove = 'rock'
    } else if(randomNumber < 2/3){
        computerMove = 'paper'
    } else {
        computerMove = 'scissors'
    }

    return computerMove;
}

// function pick()

function pick(playerMove){

    // in this function : we set the RESULT, and SCORE

    if (playerMove === computerMove){
        result = 'Tie.';
        score.Ties ++;
    } else if(playerMove === 'rock' && computerMove === 'paper' || playerMove === 'paper' && computerMove === 'scissors' || playerMove === 'scissors' && computerMove === 'rock'){
        result = 'Loss';
        score.Losses ++;
    } else {
        result = 'Win';
        score.Wins ++;
    }

    // SCORE && RESULT && PLAYERS PARAGRAPHS
 
    const playersParag = document.querySelector('.playersParagraph');

    playersParag.innerHTML = `${playerMove} VS ${computerMove}`;

    const resultParag = document.querySelector('.resultParagraph');

    resultParag.innerHTML = `Result : ${result}`;

    const scoreParag = document.querySelector('.scoreParagraph');

    scoreParag.innerHTML = `Wins : ${score.Wins} - Ties : ${score.Ties} - Losses : ${score.Losses}`;

    // LOCAL STORAGE

    localStorage.setItem('score', JSON.stringify(score));
    
}

// click EVENT LISTENER

rockPlayer.addEventListener('click', ()=>{
    randomPick();
    pick('rock');
})
paperPlayer.addEventListener('click', ()=>{
    randomPick();
    pick('paper');
})
scissorsPlayer.addEventListener('click', ()=>{
    randomPick();
    pick('scissors');
});

// RESET SCORE 

document.querySelector('.reset').addEventListener('click', ()=>{

    //score reset
    score.Wins = 0;
    score.Ties = 0;
    score.Losses = 0;

    // clear paragraphs
    playersParag.innerHTML = '';
    resultParag.innerHTML = '';
    scoreParag.innerHTML = '';

     // LOCAL STORAGE

    localStorage.setItem('score', JSON.stringify(score));
});

 // AUTO-PLAY FUNCTIONNALITY //

    const autoPlay = document.querySelector('.auto-play');

    let autoPlayingInterval = null;

    function autoPlaying(){
    
    if (!autoPlayingInterval){
        autoPlayingInterval = setInterval(()=>{
        const Move = randomPick();
        randomPick();
        pick(Move);
    }, 1000)
    } else {
        clearInterval(autoPlayingInterval);
        autoPlayingInterval = null;
    }
     // LOCAL STORAGE

    localStorage.setItem('score', JSON.stringify(score));
    }

    autoPlay.addEventListener('click', ()=>{
    autoPlaying();
    });












