function Vehicle(x, y) {
    this.pos = new p5.Vector(x, y)
    this.vel = p5.Vector.random2D()
    this.acc = new p5.Vector(0, 0)
    this.target = new p5.Vector(x, y)
    this.maxspeed = 4
    this.maxforce = 0.1
    this.r = 8
}

Vehicle.prototype.update = function() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0)
}

Vehicle.prototype.show = function() {
    strokeWeight(this.r)
    point(this.pos.x, this.pos.y)
}


Vehicle.prototype.applyForce = function(force) {
    // F = ma, but m = 1 so F = a
    this.acc.add(force)
}
