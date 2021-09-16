// describes a vehicle that can seek, arrive at, or flee from
// any target. this.target is confusing, but it's the original pos.

function Vehicle(x, y) {
    this.pos = new p5.Vector(random(width), random(height))
    this.vel = p5.Vector.random2D()
    this.acc = new p5.Vector(0, 0)
    this.target = new p5.Vector(x, y)
    // how large is the vehicle? r is the radius
    this.r = 2
    this.maxSpeed = 4
    this.maxForce = 0.3
    // How far can we see? This handles our perception radius.
    this.perceptionRadius = 50
}

Vehicle.prototype.show = function() {
    strokeWeight(this.r*2)
    stroke(220, 80, 80)
    point(this.pos.x, this.pos.y)
}

Vehicle.prototype.update = function() {
    this.pos.add(this.vel)
    this.vel.add(this.acc)
    this.acc.mult(0)
}

Vehicle.prototype.applyForce = function(f) {
    // F = ma, but m = 1 so F = a
    this.acc.add(f)
}

// A vehicle is desperately seeking to get back into formation
// so that it can complete a show for the giant, me. We use
// the seek function to do this.
Vehicle.prototype.seek = function(target) {
    // The first step is finding a vector from us to the target.
    let desired = new p5.Vector.sub(target, this.pos)
    // we want to go as fast as possible!
    desired.setMag(this.maxSpeed)
    // steering force = desired velocity - current velocity
    desired.sub(this.vel)
    // We can't turn any faster than our maxForce instance field.
    desired.limit(this.maxForce)
    // Now we can return the fruit of our labour!
    return desired
}

// This is the opposite of seek
Vehicle.prototype.flee = function(target) {
    // The first step is finding a vector from us to the target.
    let desired = new p5.Vector.sub(target, this.pos)
    // we want to go as fast as possible!
    let velocity = this.maxSpeed

    if (desired.mag() < this.perceptionRadius) {
        velocity = map(desired.mag(),
            0, 50,
            0, this.maxSpeed)

        desired.setMag(velocity)
        // steering force = desired velocity - current velocity
        desired.sub(this.vel)
        // We can't turn any faster than our maxForce instance field.
        desired.limit(this.maxForce)
        // Now we can return the fruit of our labour!
        return desired.mult(-1)
    }

    else {
        return new p5.Vector(0, 0)
    }

}

// When we seek, we overshoot a bit because when we're close
// we don't slow down enough. We fix this by slowing down
// when we're close enough to our target, which is called "arrival".
Vehicle.prototype.arrive = function(target) {
    // The first step is finding a vector from us to the target.
    let desired = new p5.Vector.sub(target, this.pos)
    // we want to go as fast as possible!
    let velocity = this.maxSpeed

    if (desired.mag() < this.perceptionRadius) {
        velocity = map(desired.mag(),
                       0, 50,
                       0, this.maxSpeed)
    }

    desired.setMag(velocity)
    // steering force = desired velocity - current velocity
    desired.sub(this.vel)
    // We can't turn any faster than our maxForce instance field.
    desired.limit(this.maxForce)
    // Now we can return the fruit of our labour!
    return desired
}

// We call all our seek/flee/arrival behaviors here.
Vehicle.prototype.behaviors = function() {
    // We want to seek our target
    let seek = this.arrive(this.target)
    // this is afraid of the mouse!
    let mouse = new p5.Vector(mouseX, mouseY)
    let flee = this.flee(mouse)

    // scaling area {
    flee.mult(2)
    // }

    // Now we apply the forces that were scaled in the scaling area.
    this.applyForce(seek)
    this.applyForce(flee)
}
