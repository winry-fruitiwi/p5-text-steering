function Vehicle(x, y) {
    this.pos = new p5.Vector(x, y)
    this.vel = p5.Vector.random2D()
    this.acc = new p5.Vector(0, 0)
    this.target = new p5.Vector(x, y)
    this.maxspeed = 4
    this.maxforce = 0.3
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


Vehicle.prototype.seek = function(target) {
    // We need a force from us to the target.
    let desired = p5.Vector.sub(target, this.pos)
    // go as fast as you possibly can!
    desired.setMag(this.maxspeed)
    // steering_force = desired_velocity - current_velocity
    desired.sub(this.vel)
    // keep things to the maximum force
    desired.limit(this.maxforce)
    return desired
}


Vehicle.prototype.flee = function(target) {
    return this.seek(target).mult(-1)
}

Vehicle.prototype.behaviors = function() {
    let seekForce = this.seek(this.target)
    this.applyForce(seekForce)
}
