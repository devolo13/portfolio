let gameState = 'start';
let paddle_1 = document.querySelector('.bot');
let paddle_2 = document.querySelector('.player');
let board = document.querySelector('.playspace');
let initial_ball = document.querySelector('.ball');
let ball = document.querySelector('.ball');
let score_1 = document.querySelector('.bScore');
let score_2 = document.querySelector('.pScore');
let message = document.querySelector('.instructions');
let paddle_1_coord = paddle_1.getBoundingClientRect();
let paddle_2_coord = paddle_2.getBoundingClientRect();
let initial_ball_coord = ball.getBoundingClientRect();
let ball_coord = initial_ball_coord;
let board_coord = board.getBoundingClientRect();
let paddle_common = document.querySelector('.paddle').getBoundingClientRect();

let dx = Math.floor(Math.random() * 4) + 3;
let dy = Math.floor(Math.random() * 4) + 3;
let dxd = Math.floor(Math.random() * 2);
let dyd = Math.floor(Math.random() * 2);

let speed = 3;

document.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    gameState = gameState == 'start' ? 'play' : 'start';
    if (gameState == 'play') {
      message.innerHTML = 'Game Started';
      requestAnimationFrame(() => {
        dx = Math.floor(Math.random() * 4) + 3;
        dy = Math.floor(Math.random() * 4) + 3;
        dxd = Math.floor(Math.random() * 2);
        dyd = Math.floor(Math.random() * 2);
        moveBall(dx, dy, dxd, dyd);
      });
    }
  }
  if (gameState == 'play') {
    if (e.key == 'ArrowUp') {
      paddle_2.style.top =
        Math.max(
          board_coord.top,
          paddle_2_coord.top - window.innerHeight * 0.1
        ) + 'px';
      paddle_2_coord = paddle_2.getBoundingClientRect();
    }
    if (e.key == 'ArrowDown') {
      paddle_2.style.top =
        Math.min(
          board_coord.bottom - paddle_common.height,
          paddle_2_coord.top + window.innerHeight * 0.1
        ) + 'px';
      paddle_2_coord = paddle_2.getBoundingClientRect();
    }
    if (e.key == 'ArrowLeft' && speed > 1) {
      speed --;
      message.innerHTML = 'Game Started. Bot Speed = ' + speed;
    }
    if (e.key == 'ArrowRight' && speed < 10) {
      speed ++;
      message.innerHTML = 'Game Started. Bot Speed = ' + speed;
    }
  }
});

function moveBall(dx, dy, dxd, dyd) {
  if (ball_coord.top <= board_coord.top) {
    dyd = 1;
  }
  if (ball_coord.bottom >= board_coord.bottom) {
    dyd = 0;
  }
  if (
    ball_coord.left <= paddle_1_coord.right &&
    ball_coord.top >= paddle_1_coord.top &&
    ball_coord.bottom <= paddle_1_coord.bottom
  ) {
    dxd = 1;
    dx = Math.floor(Math.random() * 4) + 3;
    dy = Math.floor(Math.random() * 4) + 3;
  }
  if (
    ball_coord.right >= paddle_2_coord.left &&
    ball_coord.top >= paddle_2_coord.top &&
    ball_coord.bottom <= paddle_2_coord.bottom
  ) {
    dxd = 0;
    dx = Math.floor(Math.random() * 4) + 3;
    dy = Math.floor(Math.random() * 4) + 3;
  }
  // SCORING
  if (
    ball_coord.left <= board_coord.left ||
    ball_coord.right >= board_coord.right
  ) {
    if (ball_coord.left <= board_coord.left) {
      score_2.innerHTML = +score_2.innerHTML + 1;
    } else {
      score_1.innerHTML = +score_1.innerHTML + 1;
    }
    gameState = 'start';
    ball_coord = initial_ball_coord;
    ball.style = initial_ball.style;
    message.innerHTML = 'Press Enter to Play Pong';
    return;
  }
  ball.style.top = ball_coord.top + dy * (dyd == 0 ? -1 : 1) + 'px';
  ball.style.left = ball_coord.left + dx * (dxd == 0 ? -1 : 1) + 'px';
  ball_coord = ball.getBoundingClientRect();
  requestAnimationFrame(() => {
    moveBall(dx, dy, dxd, dyd);
  });
}

function botMovement() {
  // how often the bot moves in milliseconds
  setTimeout(botMovement, 1000/speed);
  if (ball_coord.bottom + 30 >= paddle_1_coord.bottom) {
    // if the ball is below the bot, move the bot down
    if (paddle_1_coord.top + paddle_common.height + 75 >= board_coord.bottom) {
      // don't let the bot go below the play area boarder
      paddle_1.style.top = board_coord.bottom - paddle_common.height + 'px';
      paddle_1_coord = paddle_1.getBoundingClientRect();
    } else {
      // move the bot down 75 pixels
      paddle_1.style.top = paddle_1_coord.top + 75 + 'px';
      paddle_1_coord = paddle_1.getBoundingClientRect();
    }
  } else if (ball_coord.top - 30 <= paddle_1_coord.top) {
    // if the ball is above the bot, move the bot up
    if (paddle_1_coord.top - 75 < board_coord.top) {
      // don't let the bot go above the play area border
      paddle_1.style.top = board_coord.top + 'px';
      paddle_1_coord = paddle_1.getBoundingClientRect();
    } else {
      // move the bot up 75 pixels
      paddle_1.style.top = paddle_1_coord.top - 75 + 'px';
      paddle_1_coord = paddle_1.getBoundingClientRect();
    }
  } else {
    return;
  }
}

botMovement();
