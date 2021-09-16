/*
version comments
. program shell: basic setup, draw. css styling
. load a font, use text
. font.textToPoints » display all points
. vehicle with: pos, vel, acc, r, maxspeed, maxforce, target
 » commit
 vehicle.show, .update,
 vehicle.applyForce
 vehicle.seek, flee » behaviors
 » commit
 vehicle.arrive
 textpoints afraid of mouse
 » commit
*/

let font
let vehicles = []

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf');

}

function setup() {
    createCanvas(600, 300);
    colorMode(HSB, 360, 100, 100, 100);
    background(30)
    fill(220, 80, 80)
    textSize(200)
    stroke(220, 80, 80)
    strokeWeight(4)
    textFont(font)
    // text("Train", 10, 2*height/3)
    let points = font.textToPoints("Train", 10, 2*height/3)
    for (let i = 0; i < points.length; i++) {
        let pt = points[i]
        vehicles.push(new Vehicle(pt.x, pt.y))
    }
}

function draw() {
    background(30)
    for (let i = 0; i < vehicles.length; i++) {
        let vehicle = vehicles[i]
        vehicle.show()
    }
}