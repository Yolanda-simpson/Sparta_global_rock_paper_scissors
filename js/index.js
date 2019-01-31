var myChoice = prompt("Do you choose rock, paper or scissors?");
// math.random generates random numbers - for rock if its less than a certain
//number it will generate rock, if its less than or equal to a certain number it
// be paper else scissors
var compChoice = Math.random();
  if (compChoice < 0.35) {
	alert(compChoice = "the computer chose rock");
} else if(compChoice <= 0.68) {
	alert(compChoice = "the computer chose paper");
  } else {
	alert(compChoice = "the computer chose scissors");
  }
// comparing the results to see who wins
var compare = function(choice1,choice2) {

    if (choice1 === choice2) {

        alert("The result is a tie!");
    }
//if the 1st choice is rock and the 2nd choice is scissors, rock wins
    else if (choice1 === "rock") {

        if (choice2 === "scissors") {
          alert ("rock wins,You win");
        }
        //if choice 2 isnt scissors then its paper
        else {
            alert( "paper wins,You lost");
        }
    }
// if 1st choice is paper and 2nd choice is rock, paper wins, if not scissors
//wins
    else if (choice1 === "paper") {

        if (choice2 === "rock") {
            alert("paper wins,You win!");
        }
        else {
            alert("scissors wins,You lost");
        }

    }

    else if (choice1 === "scissors") {

        if (choice2 === "rock") {
            alert("rock wins, You win");
        }
        else {
            alert("scissors win,You lost");
        }
    }


    }


   alert("Computer chose: " + compChoice);
   //alert(compare(myChoice,compChoice));
