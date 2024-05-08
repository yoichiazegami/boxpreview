let img;
let input;
let angleX = 0;
let angleY = 0;
let cam;
let sliderBack;
let sliderLight;
let sliderAmb;
let light;
let autoCheck;
let autoSpeed;

let title;
let virsion;
let template;
let howto;

// let select;

var p = document.getElementById('title');
p.style.color = '#f00';


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  input = createFileInput(handleFile);
  input.position(9, 80);
  cam = createCamera();
  cam.setPosition(400, -250, -200);
  cam.lookAt(0, 0, 0);

  title = createP('Box Previewer for Typography Study [a]');
  virsion = createP('ver.0.2');
  //template = createA('BoxPreviewTemplate.zip', 'Template');
  howto = createA('help.html', 'How to Use</br>');

  label = createP('Rotation</br>Brightness</br>Shade</br>Background');
  label.id('label');

  // select = createElement('select');
  // select.innerHTML = 'テクスチャーを選択';
  // option = createElement('option');
  // option.innerHTML = 'テクスチャーを選択';


  sliderBack = createSlider(0, 255, 220);
  sliderBack.position(15, windowHeight-35);
  sliderLight = createSlider(0, 25, 15);
  sliderLight.position(15, windowHeight-60);
  sliderAmb = createSlider(0, 25, 20);
  sliderAmb.position(15, windowHeight-85);
  // autoCheck = createCheckbox();
  // autoCheck.position(15, windowHeight-107);
  autoSpeed = createSlider(-3, 3, 0);
  autoSpeed.position(15, windowHeight-110);
}

function draw() {
  orbitControl(3, 3, 0.03);
  background(sliderBack.value());
  let t = frameCount/100;

  noStroke();
  if (img) {
    texture(img);
  }
  boxWithTexture();
  textureMode(NORMAL);

  if (sliderBack.value() < 120) {
    title.class("white");
    virsion.class("white");
    //template.class("white");
    howto.class("white");
    input.class("white");
    label.class("white");
  } else {
    title.class("black");
    virsion.class("black");
    //template.class("black");
    howto.class("black");
    input.class("black");
    label.class("black");
  }

}


function boxWithTexture() {

  // if (autoCheck.checked()) {
  //   rotateY(frameCount*autoSpeed.value()*0.003);
  // } else {
  // }
  rotateY(frameCount*autoSpeed.value()*0.004);

  light = 25 - sliderLight.value();
  amb = 125 + sliderAmb.value();
  ambientLight(amb);

  directionalLight(152 - light*0, 152 - light*0, 152 - light*0, 0, 1, 0);//1
  directionalLight(152 - light*1.1, 152 - light*1.1, 152 - light*1.1, -1, 0, 0);//2
  directionalLight(152 - light*2, 152 - light*2, 152 - light*2, 0, 0, 1);//3
  directionalLight(152 - light*1.1, 152 - light*1.1, 152 - light*1.1, 1, 0, 0);//4
  directionalLight(152 - light*2, 152 - light*2, 152 - light*2, 0, 0, -1);//5
  directionalLight(152 - light*2, 152 - light*2, 152 - light*2, 0, -1, 0);//5

  scale(1.9);
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
  beginShape();
  vertex(0, 0, 0, 0.75, 0);
  vertex(-100, 0, 0, 1, 0);
  vertex(-100, 100, 0, 1, 0.382);
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
