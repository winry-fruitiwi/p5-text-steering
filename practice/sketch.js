/*
version comments
. program shell: basic setup, draw. css styling
. load a font, use text
. font.textToPoints » display all points
. vehicle with: pos, vel, acc, r, maxspeed, maxforce, target
. vehicle.show, .update,
. vehicle.applyForce
. vehicle.seek, flee » behaviors
. vehicle.arrive
. textpoints afraid of mouse
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
  stroke(220, 80, 100);
  strokeWeight(5)

  vehicles = []

  let points = font.textToPoints("Train", 10, 2*height/3, 200,
      {
        sampleFactor: 0.2,
        simplifyThreshold: 0
      })

  for (let i = 0; i < points.length; i++) {
    let pt = points[i]
    let vehicleHue = int(map(i, 0, points.length - 1,
                            0, 360))

    let vehicleColor = color([vehicleHue, 80, 80])

    vehicles.push(new Vehicle(pt.x, pt.y, vehicleColor))
  }
}

function draw() {
  background(0, 0, 30);
  let gravity = new p5.Vector(0, 0.1)

  for (let i = 0; i < vehicles.length; i++) {
    let v = vehicles[i]
    v.update()
    v.show()
    noStroke()
    // circle(mouseX, mouseY, 80)
    stroke(220, 80, 100);
    strokeWeight(5)
    v.behaviors()
  }
}