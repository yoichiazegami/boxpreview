let img;
let input;
let angleX = 0;
let angleY = 0;
let cam;
let slider;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  input = createFileInput(handleFile);
  input.position(10, 10);
  cam = createCamera();
  slider = createSlider(0, 255, 40);
  slider.position(10, windowHeight-35);
}

function draw() {
  background(255-slider.value());
  noStroke();
  if (img) {
    texture(img);
    textureWidth = img.width;
    textureHeight = img.height;
  }
  boxWithTexture(200);
  textureMode(NORMAL);
}

function boxWithTexture(size) {
    orbitControl();
    //scale(2);
    translate(50, 20, 50);
  
    push();
    translate(-100, -100, 0);
    beginShape();
    rotateY(0);
    vertex(0, 0, 0, 0, 0.276);
    vertex(100, 0, 0, 0.25, 0.276);
    vertex(100, 161.8, 0, 0.25, 0.724);
    vertex(0, 161.8, 0, 0, 0.724);
    endShape();
    pop();
  
    push();
    translate(0, -100, 0);
    rotateY(PI / 2);
    beginShape();
    vertex(0, 0, 0, 0.25, 0.276);
    vertex(100, 0, 0, 0.5, 0.276);
    vertex(100, 161.8, 0, 0.5, 0.724);
    vertex(0, 161.8, 0, 0.25, 0.724);
    endShape();
    pop();
  
    push();
    translate(0, -100, -100);
    rotateY(PI * -1);
    beginShape();
    vertex(0, 0, 0, 0.5, 0.276);
    vertex(100, 0, 0, 0.75, 0.276);
    vertex(100, 161.8, 0, 0.75, 0.724);
    vertex(0, 161.8, 0, 0.5, 0.724);
    endShape();
    pop();
  
    push();
    translate(-100, -100, -100);
    rotateY(PI / 2 * -1);
    beginShape();
    vertex(0, 0, 0, 0.75, 0.276);
    vertex(100, 0, 0, 1, 0.276);
    vertex(100, 161.8, 0, 1, 0.724);
    vertex(0, 161.8, 0, 0.75, 0.724);
    endShape();
    pop();
  
    push();
    translate(-100, -100, 0);
    rotateX(PI / 2);
    rotateZ(PI / 2 * -1);
    beginShape();
    vertex(0, 0, 0, 0.25, 0);
    vertex(100, 0, 0, 0.5, 0);
    vertex(100, 100, 0, 0.5, 0.276);
    vertex(0, 100, 0, 0.25, 0.276);
    endShape();
    pop();
  
    push();
    translate(0, 61.8, -100);
    rotateX(PI / 2);
    rotateY(PI);
    beginShape();
    vertex(0, 0, 0, 0.5, 0.724);
    vertex(100, 0, 0, 0.75, 0.724);
    vertex(100, 100, 0, 0.75, 1);
    vertex(0, 100, 0, 0.5, 1);
    endShape();
    pop();
}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}

function mouseDragged() {
  let dx = mouseX - pmouseX;
  let dy = mouseY - pmouseY;
  angleX += dy * 0.01;
  angleY += dx * 0.01;
}
