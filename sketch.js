let font;

function preload() {
  font = loadFont('fonts/Meiryo-01.ttf');
}

function setup() {
  createCanvas(600, 300);
  colorMode(HSB, 360, 100, 100, 100);

  textFont(font);
  textSize(32);
  fill(0, 0, 100);
  noStroke();
}

function draw() {
  background(0, 0, 50);

  for(let i=0; i<100; i++) {
    ellipse(random(mouseX), random(mouseY), random(50), random(50));
  }
  text('[Winry Fruitiwi] Lv.73 DRK', 100, 200);
}