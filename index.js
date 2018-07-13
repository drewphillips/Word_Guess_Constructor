var Word = require("./word.js");
const inquirer = require("inquirer");


//var testWord = new Word("baseball");

Array testWord = new Word("baseball, football, basketball, socer, lacross, basketball")

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

playGame(testWord.Array[0]);

console.log(testWord)




