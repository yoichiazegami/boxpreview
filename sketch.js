var tex;
function preload() {
  tex = loadImage('texture.jpg');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
}



function draw() {
  background(220);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(tex);
  box(100, 100, 161.4);
}
