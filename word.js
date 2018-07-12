var Letter = require("./letters.js");


var Word = function (word) {
    this.word = word;
    this.letters = [];
    this.displayArray = [];
    this.gameArray = this.word.split("");
    this.remainingGuesses = 7;

    this.createLetters = function () {
        for (let i = 0; i < this.gameArray.length; i++) {
            this.letters.push(new Letter(this.gameArray[i]))
        }
    };

    this.displayWord = function () {

        for (let i = 0; i < this.gameArray.length; i++) {

            this.displayArray.push(this.letters[i].display());
        }


        console.log("Remaining Guesses: " + this.remainingGuesses);
        console.log(this.displayArray.join(" "));
    }

    this.checkUserGuess = function (userGuess) {
        this.displayArray = [];
        if (this.gameArray.includes(userGuess)) {
            for (let i = 0; i < this.gameArray.length; i++) {
                if (userGuess === this.gameArray[i]) {
                    this.letters[i].letterGuessed = true;
                }
            }
        } else {
            console.log("Sorry, " + userGuess + " was not in the word");

            this.remainingGuesses--;
        }


        this.displayWord();
    }


    this.continueGame = function () {
        let letterCount = 0;

        if (this.remainingGuesses > 0) {
            for (let i = 0; i < this.gameArray.length; i++) {
                if (this.letters[i].letterGuessed) {
                    letterCount++
                }
            }

            if (letterCount === this.gameArray.length) {
                console.log("You won!");
                return false;
            } else {
                return true;
            }
        }else {

            console.log("Sorry you lost");
            return false;
        }


    }



}

// var strArray = word.split();
// for (var i = 0; i< strArray.lenmgth; i++)
// {
//     this.letters.push( new Letter(stringArray[i]) );

// }


module.exports = Word;
