import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

let food = getRandomFoodPosition();
const EXPAND_RATE = 3;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPAND_RATE);
    food = getRandomFoodPosition();
  }
}

export function render(gameBoard) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition(){
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)){
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}

