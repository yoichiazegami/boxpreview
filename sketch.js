let img;
let input;
let angleX = 0;
let angleY = 0;
let cam;
let sliderBack;
let sliderLight;
let sliderAmb;
let light;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  input = createFileInput(handleFile);
  input.position(10, 10);
  cam = createCamera();
  sliderBack = createSlider(0, 255, 220);
  sliderBack.position(15, windowHeight-35);
  sliderLight = createSlider(0, 25, 15);
  sliderLight.position(15, windowHeight-60);
  sliderAmb = createSlider(0, 25, 20);
  sliderAmb.position(15, windowHeight-85);
}

function draw() {
  background(sliderBack.value());
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

  light = 25 - sliderLight.value();
  amb = 125 + sliderAmb.value();
  ambientLight(amb);

  directionalLight(152 - light*0, 152 - light*0, 152 - light*0, 0, 1, 0);//1
  directionalLight(152 - light*1, 152 - light*1, 152 - light*1, -1, 0, 0);//2
  directionalLight(152 - light*2, 152 - light*2, 152 - light*2, 0, 0, 1);//3
  directionalLight(152 - light*1, 152 - light*1, 152 - light*1, 1, 0, 0);//4
  directionalLight(152 - light*2, 152 - light*2, 152 - light*2, 0, 0, -1);//5
  directionalLight(152 - light*4, 140 - light*4, 152 - light*4, 0, -1, 0);//6


  translate(50, 20, 50);

  push();
  translate(-100, -100, 0);
  beginShape();
  rotateY(0);
  vertex(0, 0, 0, 0, 0.382);
  vertex(100, 0, 0, 0.25, 0.382);
  vertex(100, 161.8, 0, 0.25, 1);
  vertex(0, 161.8, 0, 0, 1);
  endShape();
  pop();

  push();
  translate(0, -100, 0);
  rotateY(PI / 2);
  beginShape();
  vertex(0, 0, 0, 0.25, 0.382);
  vertex(100, 0, 0, 0.5, 0.382);
  vertex(100, 161.8, 0, 0.5, 1);
  vertex(0, 161.8, 0, 0.25, 1);
  endShape();
  pop();

  push();
  translate(0, -100, -100);
  rotateY(PI * -1);
  beginShape();
  vertex(0, 0, 0, 0.5, 0.382);
  vertex(100, 0, 0, 0.75, 0.382);
  vertex(100, 161.8, 0, 0.75, 1);
  vertex(0, 161.8, 0, 0.5, 1);
  endShape();
  pop();

  push();
  translate(-100, -100, -100);
  rotateY(PI / 2 * -1);
  beginShape();
  vertex(0, 0, 0, 0.75, 0.382);
  vertex(100, 0, 0, 1, 0.382);
  vertex(100, 161.8, 0, 1, 1);
  vertex(0, 161.8, 0, 0.75, 1);
  endShape();
  pop();

  push();
  translate(-100, -100, 0);
  rotateX(PI / 2);
  rotateZ(PI / 2 * -1);
  beginShape();
  vertex(0, 0, 0, 0.25, 0);
  vertex(100, 0, 0, 0.5, 0);
  vertex(100, 100, 0, 0.5, 0.382);
  vertex(0, 100, 0, 0.25, 0.382);
  endShape();
  pop();

  push();
  translate(0, 61.8, -100);
  rotateX(PI / 2);
  rotateY(PI);
  beginShape();
  vertex(0, 0, 0, 0.75, 0);
  vertex(100, 0, 0, 1, 0);
  vertex(100, 100, 0, 1, 0.382);
  vertex(0, 100, 0, 0.75, 0.382);
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
