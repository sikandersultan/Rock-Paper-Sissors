var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}
var compare=function(userChoice,computerChoice){
    if(userChoice===computerChoice){
      window.alert("It's a tie!")
        return "The result is a tie!";
        
    }
    else if(userChoice==="rock"){
        if(computerChoice==="scissors"){
          window.alert("Rock wins!")
            return "rock wins"
        }
        else if(userChoice==="paper"){
          window.alert("Paper wins!")
            return "paper wins";
        }
    }
    else if(userChoice==="paper"){
        if(computerChoice==="scissors"){
          window.alert("Sissors wins!")
            return "scissors win"
        }
        else if(computerChoice==="rock"){
          window.alert("Paper wins!!")
            return "paper wins";
        }
    }
    else if(userChoice==="scissors"){
        if(computerChoice==="paper"){
          window.alert("Sissors wins!")
            return "scissors win"
        }
        else if(computerChoice==="rock"){
          window.alert("Rock wins")
            return "rock wins";
        }
    }
    
}
console.log(compare(userChoice,computerChoice));