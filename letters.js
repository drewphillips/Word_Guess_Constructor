var Letter = function (letter) {

    this.letter = letter;

    this.letterGuessed = false;

    this.display = function () {
        if (this.letterGuessed) {
            return this.letter;
        } else {
            return "*";
        }


    }

}

module.exports = Letter;

