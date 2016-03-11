# Learning-JS
Just learning java script and putting stuff I've learned on here.
// Feel free to give feedback //
// Rock Paper Scissors //

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(userChoice, computerChoice){
    if(choice1 === choice2){
        return("The result is a tie!");
        }
    else if(choice1 === "rock") {
            
        if(choice2 === "scissors"){
            return("rock wins");
        }
        else {
            return("paper wins");
        }
    }
    
    else if(choice1 === "paper") {
            
        if(choice2 === "rock"){
            return("paper wins");
        }
        else {
            return("scissors wins");
        }
    }
    
     else if(choice1 === "scissors") {
            
        if(choice2 === "rock"){
            return("rock wins");
        }
        else {
            return("scissors wins");
        }
    }
    
    if(choice1 === "dog"){
        return("That wasn't one of the options.")
    }
}
