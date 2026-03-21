     
     // declaring the variables  
       
       const rockPlayer = document.querySelector('.rock');
        const paperPlayer = document.querySelector('.paper');
        const scissorsPlayer = document.querySelector('.scissors');

        const scoreParagraph = document.querySelector('.scoreParagraph');

        const resultParagraph = document.querySelector('.resultParagraph');

        const pickParagraph = document.querySelector('.pickParagraph');

        const resetButton = document.querySelector('.resetButton');

        const autoPlayButton = document.querySelector('.autoPlayButton');

        //setting the scrore object

        const score = JSON.parse(localStorage.getItem('score')) || {
            wins : 0,
            Losses : 0,
            Draw : 0,
        }

        // function random Pick

        function randomPick(){
             //generating the randomNumber

            const randomNumber = Math.random();
            // let myMove = '';

            let computerMove = '';

            // deciding the pick

            if (randomNumber < 1/3){
                computerMove = 'rock'
            } else if (randomNumber < 2/3){
                computerMove = 'paper'
            } else {
                computerMove = 'scissors'
            };

            return computerMove;

        }

        // function pickMove

        function pickMove(myMove){

            const computerMove = randomPick();
            let result = '';

           
            // set logic
            if (myMove === computerMove){
                result = 'Tie';
                score.Draw++;
            } else if (myMove === 'rock' && computerMove === 'scissors' || myMove === 'paper' && computerMove === 'rock' || myMove === 'scissors' && computerMove === 'paper'){
                result = 'Win';
                score.wins++;
            } else {
                result = 'Loss';
                score.Losses++;
            }
            // Storing the score
            localStorage.setItem('score', JSON.stringify(score));

            // updating the score the pick ; result and score paragraph

            resultParagraph.innerHTML = `${result}`;

            pickParagraph.innerHTML = `You  <img src="images/images/${myMove}-emoji.png"  class="${myMove} Icon"> 
            
            <img src="images/images/${computerMove}-emoji.png"  class="${computerMove} Icon"> Computer`;

            scoreParagraph.innerHTML = `Wins : ${score.wins}; Draws : ${score.Draw}; Losses : ${score.Losses}`

            // CONSOLE and ALERT

            console.log(`You picked ${myMove}; Computer chose ${computerMove} \n result : ${result} \n 
Wins : ${score.wins} Losses : ${score.Losses} Draws : ${score.Draw}`);

            /*alert(`You picked ${myMove} -- Computer chose ${computerMove} \n  result : ${result} \n 
Wins : ${score.wins} Losses : ${score.Losses} Draws : ${score.Draw}`);*/

        }  // end of the function pickMove().

        // playing and attaching MYMOVE..

        rockPlayer.addEventListener('click', () => {
            pickMove('rock')
        });
        paperPlayer.addEventListener('click', ()=>{
            pickMove('paper');
        });
        scissorsPlayer.addEventListener('click', ()=> {
             pickMove('scissors');
        });

        // reseting the score //


        resetButton.addEventListener('click', ()=>{
            score.Draw = 0;
            score.wins = 0;
            score.Losses = 0;

            resultParagraph.innerHTML = '';

            pickParagraph.innerHTML = '';

            scoreParagraph.innerHTML = `Wins : ${score.wins}; Draws : ${score.Draw}; Losses : ${score.Losses}`

            localStorage.setItem('score', JSON.stringify(score));

       
        });

              // AUTO-PLAY ...

       /*function autoPlay(){
            setInterval(() => {
                const move = randomPick();
                pickMove(move);
            }, 1000);}*/
        
           

            /*function autoPlay(){

                if (autoPlayInterval) return;

                autoPlayInterval = setInterval(() => {
                    const move = randomPick();
                    pickMove(move);
                }, 2000);
            };*/

            let autoPlayInterval = false;

            function autoPlay(){

                if (!autoPlayInterval){
                   autoPlayInterval = setInterval(() => {
                    const move = randomPick();
                    pickMove(move);
                    //autoPlayInterval = true;
                }, 1000);
                }else{
                    clearInterval(autoPlayInterval);
                    autoPlayInterval = false;

                    resultParagraph.innerHTML = '';

                    pickParagraph.innerHTML = '';

                    scoreParagraph.innerHTML = `Wins : ${score.wins}; Draws : ${score.Draw}; Losses : ${score.Losses}`
                }
            }
          
        

       

        autoPlayButton.addEventListener('click', ()=>{
          autoPlay()
        });