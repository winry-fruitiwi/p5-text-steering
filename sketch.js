/*
version comments
. program shell: basic setup, draw. css styling
. load a font, use text
. font.textToPoints » display all points
. vehicle with: pos, vel, acc, r, maxspeed, maxforce, target
. vehicle.show, .update,
  vehicle.applyForce
  vehicle.seek, flee » behaviors
  vehicle.arrive
  textpoints afraid of mouse
  play with optional parameters to textToPoints
*/


let font
let vehicles

function preload() {
  font = loadFont('fonts/Meiryo-01.ttf');
}

function setup() {
  createCanvas(600, 300);
  colorMode(HSB, 360, 100, 100, 100);

  textFont(font);
  textSize(32);
  fill(0, 50, 100);
  stroke(0, 50, 100);
  strokeWeight(5)

  vehicles = []

  let points = font.textToPoints("Trainbow", 10, height/2, 80)

  for (let i = 0; i < points.length; i++) {
    let pt = points[i]
    vehicles.push(new Vehicle(pt.x, pt.y))
  }
}

function draw() {
  background(0, 0, 50);
  let gravity = new p5.Vector(0, 0.1)

  for (let i = 0; i < vehicles.length; i++) {
    let v = vehicles[i]
    v.update()
    v.show()
    v.applyForce(gravity)
  }
}