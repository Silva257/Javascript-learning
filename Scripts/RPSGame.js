// calling button variables

     const rockBtn = document.querySelector('.rockBtn');
     const paperBtn = document.querySelector('.paperBtn');
     const scisorsBtn = document.querySelector('.ScisorsBtn');
     const resetBtn = document.querySelector('.resetBtn');
     const resultParagraph = document.querySelector('.currentResultParagraph');
     const picksParagraph = document.querySelector('.picksParagraph');

     const subscribeBtn = document.querySelector('.subscribe');

     // score paragraph

     const scoreParagraph = document.querySelector('.scoreParagraph');

      // setting the score

     let score = JSON.parse(localStorage.getItem('score')) || {
        wins : 0,
        losses : 0,
        ties : 0,
     }


     // localStorage of the score

     localStorage.setItem('score', JSON.stringify(score));
     

     // random computer pick

     // FUNCTION myPick()

     let computerMove = '';
     let myPick = '';
     let result = '';

     
     function picker(myPick){

        const randomNumber = Math.random();

        if ( randomNumber < 1/3) {
            computerMove = 'rock';
        } else if (randomNumber < 2/3) {
            computerMove = 'paper';
        } else {
            computerMove = 'scisors';
        };

        // determining the results

        if (myPick === computerMove) {
            result = 'Tie';
        } else if ( myPick === 'rock' && computerMove === 'paper' || myPick === 'paper' && computerMove === 'scisors' || myPick === 'scisors' && computerMove === 'rock') {
            result = 'Win';
        } else {
            result = 'Loss';
        }

        // alert and console

         //alert(`You chose ${myPick}, computer chose ${computerMove} : ${result} \n Wins : ${score.wins} - Ties : ${score.ties} - Losses : ${score.losses}`);

        console.log(`You chose ${myPick}, computer chose ${computerMove} : ${result}`);


     // updating the score

     if ( result === 'Win'){
        score.wins += 1;
     } else if ( result === 'Tie'){
        score.ties += 1;
     } else {
        score.losses +=1;
     };

      // displaying and updating the score

     scoreParagraph.textContent = `Wins : ${score.wins} - Ties : ${score.ties} - Losses : ${score.losses}`;

     localStorage.setItem('score', JSON.stringify(score));

     //updating the ties

     picksParagraph.innerHTML = ` You <img src="images/${myPick}-emoji.png" alt="${myPick}" class="playIcon"> - vs - <img src="images/${computerMove}-emoji.png" alt="${computerMove}" class="playIcon"> Computer`;

     picksParagraph.style.display = 'block';

     resultParagraph.innerHTML = `${result}`;
     resultParagraph.style.display = 'block';
        
     }

     // calling the function on click event

     rockBtn.addEventListener('click', ()=>{
        picker('rock');
     });
     paperBtn.addEventListener('click', ()=>{
        picker('paper');
     });
     scisorsBtn.addEventListener('click', ()=>{
        picker('scisors');
     });


     // reseting the score

     resetBtn.addEventListener('click', ()=>{
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        console.log('score reset successifully');
        localStorage.setItem('score', JSON.stringify(score));
        scoreParagraph.textContent = `Wins : ${score.wins} - Ties : ${score.ties} - Losses : ${score.losses}`;

        // removing the results paragraphs from the page

       picksParagraph.style.display = 'none';
       resultParagraph.style.display = 'none';

     })

     // score paragraph on the first load

     scoreParagraph.textContent = `Wins : ${score.wins} - Ties : ${score.ties} - Losses : ${score.losses}`;

     //updating ties 

     picksParagraph.innerHTML = ` ${myPick} - vs - ${computerMove}`;

     // YOUTUBE Subscribe

     function Subscribe(){
        if (subscribeBtn.innerHTML === 'Subscribe'){
            subscribeBtn.textContent = 'Subscribed'
        } else {
            subscribeBtn.innerHTML = 'Subscribe'
        }
     }

     subscribeBtn.addEventListener('click', Subscribe);

     // THIS ALSO WORKS


    /* subscribeBtn.addEventListener('click', ()=>{
         if (subscribeBtn.innerHTML === 'Subscribe'){
            subscribeBtn.innerHTML = 'Subscribed'
        } else {
            subscribeBtn.innerHTML = 'Subscribe'
        }
     });*/

     // THIS ALSO WORKS
     
    /* subscribeBtn.addEventListener('click', ()=>{
        subscribeBtn.innerHTML = subscribeBtn.innerHTML === 'Subscribe' ?  'Subscribed' : 'Subscribe'
     });*/

      document.title = "my Game";

      // form scripting

      const inputCost = document.getElementById('cost');
      const calculateShippingFee = document.querySelector('.calculateShippingFee'); 

      const costOutput = document.querySelector('.costOutput');

      

      calculateShippingFee.addEventListener('click', ()=>{
        let userFee = Number(inputCost.value);

        if (userFee < 40) {
            userFee += 10
        } /*else {
            userFee = userFee;
        }*/
      //shippingFee();

        costOutput.innerHTML = `You pay : $${userFee} for the Shipping.`;
        
      });
      inputCost.addEventListener('keyDown', ()=>{
        console.log(event.key)
      })