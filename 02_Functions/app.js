const startGameBtn = document.getElementById('start-game-btn');

// Las cuatro formas hacen lo mismo
function startGame() {
  console.log('Game starting...');
}

const start = function () {
  console.log('Game starging...');
};

const startGM = () => {
  console.log('Game starging...');
};

startGameBtn.addEventListener('click', startGame);
startGameBtn.addEventListener('click', start);
startGameBtn.addEventListener('click', startGM);
startGameBtn.addEventListener('click', function strGame() {
  console.log('Game starging...');
});

// ----------------------------------------------------------------------------------------------------------------
// ---------------------------------------------ROCK, PAPER, SCISSORS----------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}`,
    ''
  ).toUpperCase();
  if ((selection !== ROCK) & (selection !== PAPER) & (selection !== SCISSORS)) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// Arrow function:  - Podemos evitar usar el return si solo tenemos una linea
//                  - Si solo tenemos un parametro no hace falta los parentesis
const add = (a, b) => a + b;
const add2 = function (a, b) {
  return a + b;
};

// Podemos asignar un default value a un parametro si no se pasa
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

/*
const getWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};
*/
startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game starging...');
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  let winner;
  if (playerSelection) {
    winner = getWinner(computerSelection, playerSelection);
  } else {
    winner = getWinner(computerSelection, playerSelection); //
  }
  let message = `You picked ${
    playerSelection || DEFAULT_USER_CHOICE
  }, computer picked ${computerSelection}, therefore you`;
  if (winner === RESULT_DRAW) {
    message += ' had a draw';
  } else if (winner === RESULT_PLAYER_WINS) {
    message += ' won';
  } else {
    message += ' lost';
  }
  alert(message);
  gameIsRunning = false;
});

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

// Queremos crear una funcion con parametros infinitos

/*
 * Podemos usar un array pero no siempre nos conviene

const sumUp = (numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum
}
*/

const sumUp = (...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};

console.log(sumUp(1, 5, 10, -3, 6, 10));
console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));

// Podemos crear funciones dentro de otras funciones

const subtractUp = (...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sub = 0;
  for (const num of numbers) {
    sub += validateNumber(num);
  }
  return sub;
};

console.log(subtractUp(6, 5, 10, -3, 6, 10));

// Callback function

const combine = (resultHandler, operation, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += num;
    } else {
      sum -= num;
    }
  }
  return resultHandler(sum);
};
/*
const subtractUp2 = (resultHandler, ...numbers) => {
  let sub = 0;
  for (const num of numbers) {
    sub -= num;
  }
  resultHandler(sub);
};
*/
const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
};

combine(
  showResult.bind(this, 'The result after adding all numbers is:'), // Preconfigura la funcion en sitios donde necesitamos pasar un valor pero no queremos ejecutar la funcion directamente
  'ADD',
  1,
  5,
  10,
  -3,
  6,
  10,
  25,
  88
);
combine(
  showResult.bind(this, 'The result after subtracting all numbers is:'),
  'SUBTRACT',
  1,
  10,
  15,
  20
);

// subtractUp2(showResult, 1, 10, 15, 20);
