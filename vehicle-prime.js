// describes a vehicle that can seek, arrive at, or flee from
// any target. this.target is confusing, but it's the original pos.

function Vehicle(x, y) {
    this.pos = new p5.Vector(x, y)
    this.vel = new p5.Vector(0, 0)
    this.acc = new p5.Vector(0, 0)
    this.target = new p5.Vector(x, y)
    // how large is the vehicle? r is the radius
    this.r = 2
    this.maxSpeed = 4
    this.maxForce = 0.3
}

Vehicle.prototype.show = function() {
    strokeWeight(this.r*2)
    stroke(220, 80, 80)
    point(this.pos.x, this.pos.y)
}
