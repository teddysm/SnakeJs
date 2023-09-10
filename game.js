let lastRenderTime = 0;
const SNAKE_SPEED = 2;

function main(currentTime){
  window.requestAnimationFrame(main);
  const secSinceLastRender = (currentTime - lastRenderTime ) / 1000;;
  if (secSinceLastRender < 1/SNAKE_SPEED) return;

  lastRenderTime = currentTime;
  console.log(lastRenderTime);

  update();
  render();
}

function update(){

}

function render(){

}

window.requestAnimationFrame(main);