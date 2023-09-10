import { update as updateSnake, render as renderSnake, SNAKE_SPEED } from './snake';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

function main(currentTime){
  window.requestAnimationFrame(main);
  const secSinceLastRender = (currentTime - lastRenderTime ) / 1000;;
  if (secSinceLastRender < 1/SNAKE_SPEED) return;

  lastRenderTime = currentTime;
  update();
  render();
}

window.requestAnimationFrame(main);

function update(){
  updateSnake();
}

function render(){
  renderSnake(gameBoard);
}

