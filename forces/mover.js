class Mover {
  constructor() {
    this.pos = createVector(
      floor(random(50, width / 2)),
      floor(random(50, height / 2))
    );
    this.vel = createVector();
    this.acc = createVector();

    this.mass = floor(random(5, 20));
    this.rad = 10;
  }

  applyForce(f) {
    let tf = p5.Vector.div(f, this.mass);
    //f is some force p5.Vector being applied -referenced statically into tf after accounting for mass
    this.acc.add(tf); // considering mass of 1, a = f . 1 = f
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.mult(0); // clear acceleration once done applying (as its force dependent, not a body's characteristic)
  }

  show(i) {
    stroke(0);
    fill(145, 145, 145, 90);
    circle(this.pos.x, this.pos.y, this.rad * this.mass);
    text(`${i}`, this.pos.x, this.pos.y);
  }

  contactEdge() {
    return this.pos.y > height - this.rad - 1;
    //   The mover is touching the edge when it’s within 1 pixel.
  }

  bounceEdges() {
    let bounce = -0.9;
    //   A new variable to simulate an inelastic collision: 10% of the velocity’s x- or y-component is lost.

    if (this.pos.y > height - this.rad) {
      this.pos.y = height - this.rad;
      this.vel.y *= bounce;
    }
  }

  checkEdges() {
    if (
      this.pos.x + (this.rad / 2) * this.mass > width ||
      this.pos.x - (this.rad / 2) * this.mass < 0
    ) {
      this.vel.x *= -0.9;
      this.acc.x *= -1;
    }
    if (
      this.pos.y + (this.rad / 2) * this.mass > height ||
      this.pos.y - (this.rad / 2) * this.mass < 0
    ) {
      this.vel.y *= -0.9;
      this.acc.y *= -1;
    }
  }
}
