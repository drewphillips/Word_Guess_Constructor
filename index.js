var Word = require("./word.js");
const inquirer = require("inquirer");


var testWord = new Word("baseball");
// this worked for only having one word each time but Im trying to get an array of words.

//testWord.array = new Word("baseball, football, basketball, socer, lacross, basketball")

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

            if (word.continueGame()) {

                askForLetters();
            }
        })
    }

    askForLetters();
}

playGame(testWord);

//console.log(new word)
