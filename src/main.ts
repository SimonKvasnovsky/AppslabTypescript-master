
console.log("Welcome to Rock, Paper, Scissors!");

while(true) {


    let myMove = String;
        let rand = Math.floor(Math.random()*3);
        if(myMove.valueOf()==("quit")) {
            break;
        }

        let opponentMove = String("");
        if(rand == 0) {
            opponentMove = "rock";
        } else if(rand == 1) {
            opponentMove = "paper";
        } else {
            opponentMove = "scissors";
        }
        console.log("Opponent's move: " + opponentMove);

        if(myMove.valueOf()==(opponentMove)) {
            console.log("It's a tie!");
        } else if((myMove.valueOf()==("rock") && opponentMove.valueOf()==("scissors")) || (myMove.valueOf()==("scissors") && opponentMove.valueOf()==("paper")) || (myMove.valueOf()==("paper") && opponentMove.valueOf()==("rock"))) {
            console.log("You won!");
        } else {
            console.log("You lost!");
        }

    }
