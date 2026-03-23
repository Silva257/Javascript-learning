let autoPlayGameInterval = null;

       function autoPlayGame(){

            if (!autoPlayGameInterval){

            autoPlayGameInterval = setInterval(() => {

            let move = getRandom();
            playGame(move);
            autoPlay.innerHTML = 'Stop Auto-Play'
            autoPlay.style.color = 'blue';

            }, 1000)}else{

                clearInterval(autoPlayGameInterval);
                autoPlayGameInterval = null;
                autoPlay.innerHTML = 'Auto-Play';

                resultParagraph.innerHTML = '';
                playersParagraph.innerHTML = '';
                scoreParagraph.innerHTML = '';
                autoPlay.style.color = 'black';
            }       
       }