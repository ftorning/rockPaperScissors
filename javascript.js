 var playerScore = 0;
    var compScore = 0;
    var tie = 0;
    // var addPlayerScore = document.getElementById("player1score");
    // var addCompScore = document.getElementById("player2score");
    var compPlayer = ['r', 'p', 's'];
    var playerChoice;
    document.onkeyup = function(event) {
       playerChoice = event.key;
    var compChoice = compPlayer[Math.floor(Math.random() * compPlayer.length)];
      
    var html = 
      "<p> You chose: " + playerChoice + "</p>" +
      "<p> The Computer chose: " + compChoice + "</p>" +
      "<p>Wins: " + playerScore + "</p>" +
      "<p>Losses: " + compScore + "</p>" +
      "<p>Ties: " + tie + "</p>"
    if (playerChoice === 'r' || playerChoice === 'p' || playerChoice === 's') {
        if (playerChoice === 'r' && compChoice === 's') {
            
            playerScore++;
        } else if (playerChoice === 's' && compChoice === 'p'){
            playerScore++;
        } else if (playerChoice === 'p' && compChoice === 'r') {
            playerScore++;
        } else if (compChoice === 'r' && playerChoice === 's') {
            
            compScore ++;
        } else if (compScore === 'p' && playerChoice === 'r') {

            compScore++;
        } else if (compChoice === 's' && playerChoice === 'p') {

            compScore++;
        } else {
            tie++;
        }
  }
  var formated = document.querySelector('#game');
  formated.innerHTML = html;
  
    // addPlayerScore.textContent = playerScore;
    // addCompScore.textContent = compScore;
    };
