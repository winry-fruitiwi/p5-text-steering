/*
version comments
  program shell: basic setup, draw. css styling
  load a font, use text
  font.textToPoints » display all points
  vehicle with: pos, vel, acc, r, maxspeed, maxforce, target
  vehicle.show, .update,
  vehicle.applyforce
  vehicle.seek, flee » behaviors
  vehicle.arrive
  textpoints afraid of mouse
  play with optional parameters to textToPoints
*/


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