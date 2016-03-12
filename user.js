
var gg = console.log("Welcome to a randomized game of rock paper and scissors.");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var userChoice = Math.random();
if (userChoice < 0.34) {
	userChoice = "rock";
} else if(userChoice <= 0.67) {
	userChoice = "paper";
} else {
	userChoice = "scissors";
} console.log("User: " + userChoice);

console.log("The game is over, press enter and double click the batch file again.")
