const words = [
    'javascript',
    'monster',
    'unbelievable',
    'holidays',
    'leopard',
]

let word = words[Math.floor(Math.random() * words.length)];
console.log(word);

let answers = [];
for (let i = 0 ; i < word.length ; i++){
    answers[i] = '_';
}

let leftLetters = word.length;

while (leftLetters > 0) {
    alert(answers.join(' '));
    let guess = prompt('Guess a letter  or click cancel to finish a game');
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert ('You can guess only one letter');
    } else {
        for (let j = 0 ; j < word.length ; j++) {
            if (word[j] === guess) {
                answers[j] = guess;
                leftLetters--;
            }
        }
    }
}
alert(answers.join(' '));
alert('Good job! The guessed world is ' + word);