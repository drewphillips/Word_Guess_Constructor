var Word = require("./word.js");
const inquirer = require("inquirer");


var testWord = new Word("baseball");

// testWord.createLetters();
// testWord.displayWord();

// testWord.checkUserGuess("b");
// testWord.checkUserGuess("r");

function playGame(word) {
    word.createLetters();
    word.displayWord();

   

    function askForLetters() {


        inquirer.prompt({
            type: "input",
            message: "Please guess a letter",
            name: "userGuess",

        }).then(response => {
            word.checkUserGuess(response.userGuess);

            if(word.continueGame()){
                
                askForLetters();
            }
        })
    }

    askForLetters();
}

playGame(testWord);




