function guessingGame() {
    const number = Math.random() * 100;
    let guesses = 0;

    return (function (num) {
        if (guesses === -1) {
            return (`The game is over, you already won!`);
        }

        guesses++;
        if (num > number) {
            return (`${num} is too high!`);
        }
        if (num < number) {
            return (`${num} is too low!`);
        }

        const message = `You win! You found ${number} in ${guesses} guesses.`;
        guesses = -1;
        return (message);
    });
}

module.exports = { guessingGame };
