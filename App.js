
    var scores, roundScores, activePlayer, gamePlaying;
    var winningScore;
    function init()
    {
        scores = [0,0];
        roundScore =0;
        activePlayer =0;

        gamePlaying = true;
        
        document.getElementById('dice1').style.display = 'none';
        document.getElementById('dice2').style.display = 'none';


        document.getElementById('score-0').textContent = "0";
        document.getElementById('score-1').textContent = "0";
        document.getElementById('current-0').textContent = "0";
        document.getElementById('current-1').textContent = "0";

         document.getElementById('name-0').textContent = 'Player 1';
         document.getElementById('name-1').textContent = 'Player 2';

         document.querySelector('.player-0-panel').classList.remove('winner');
         document.querySelector('.player-1-panel').classList.remove('winner');

        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');

    }

    init();//function call

    document.querySelector('.dice').style.display = 'none';

var lastDice;
    document.querySelector('.btn-roll').addEventListener('click',function() {
        // do something  
        if(gamePlaying)
            {
                 ///1. random number
      var dice1 = Math.floor(Math.random() * 6) +1;
      var dice2 = Math.floor(Math.random() * 6) +1;

        //2. Display the Result
        //var diceDOM =  document.querySelector('.dice');
        document.getElementById('dice1').style.display = 'block';
        document.getElementById('dice2').style.display = 'block';

        document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice2').src = 'dice-' + dice2 + '.png';


        //3. Update the round score if that rolled number is not 1
            
                if(dice1 !== 1 && dice2 !==1)  // < 
                {
                    // Add Score

                    roundScore += dice1 + dice2;

         document.querySelector('#current-' + activePlayer).textContent = roundScore;

                }
            else{
            //Next Player
                   nextPlayer();


               // activePlayer ===1 ? active = 0: activePlayer =1;
                }
                 
            }


    });

    document.querySelector('.btn-hold').addEventListener('click',function() {

        if(gamePlaying)
            {
                // Add Current score to the players Global Score;
            scores[activePlayer] += roundScore;

        //Update to UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //Check if the Player won the Game
                    var input = document.querySelector('.final-score').value;
                
                   
                
                if(input)
                    {
                        winningScore = input;
                    }
                else{
                    winningScore =100;
                }
                
        if(scores[activePlayer] >= winningScore)
            {


                document.querySelector("#name-" + activePlayer).textContent = "WINNER!!";
document.getElementById('dice1').style.display = 'none';
        document.getElementById('dice2').style.display = 'none';

                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                 document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

                    gamePlaying = false;

            }
        else{

            //Next Player
        nextPlayer();
        }          

            }

    });

    //DRY Principle  == Dont Repeat Yourself
    function nextPlayer()
    {
        activePlayer === 0 ? activePlayer = 1: activePlayer =0; 
                roundScore =0;

                document.getElementById('current-0').textContent = '0';
                document.getElementById('current-1').textContent = '0';

                document.querySelector('.player-0-panel').classList.toggle('active');
                document.querySelector('.player-1-panel').classList.toggle('active');

               document.getElementById('dice1').style.display = 'none';
        document.getElementById('dice2').style.display = 'none';


    }

    document.querySelector('.btn-new').addEventListener('click',init);

