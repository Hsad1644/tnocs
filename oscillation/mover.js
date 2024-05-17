class Mover {
  constructor() {
    this.pos = createVector();
    this.vel = createVector();
    this.acc = createVector();

    this.mass = 10;
    // this.radius = floor(random(5, 20));
    this.radius = 20;

    this.angle = 0;
    this.avel = 0;
    this.aacc = 0;
  }

  checkEdges() {
    // translate(-this.pos.x, -this.pos.y);

    if (this.pos.x + this.rad > width || this.pos.x - this.rad < 0) {
      this.vel.x *= -0.9;
      this.acc.x *= -0.9;
      // noLoop();
    }
    if (this.pos.y + this.rad > height || this.pos.y - this.rad < 0) {
      this.vel.y *= -0.9;
      this.acc.y *= -0.9;
      // noLoop();
    }
  }
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.aacc = this.acc.x / 10.0; // using x component of linear acceleration to define angular acc
    this.avel += this.aacc;

    this.avel = constrain(this.avel, -0.1, 0.1);
    this.vel.limit(10);

    this.angle += this.avel;

    this.acc.mult(0);
  }

  show() {
    stroke(0);
    fill(175, 200);
    push(); //Use push() to save the current state so the rotation of this shape doesn’t affect the rest of the world.

    // translate(this.pos.x, this.pos.y);

    rotate(this.angle);

    circle(this.pos.x, this.pos.y, this.radius * 2);
    // line(this.pos.x, this.pos.y, this.radius, 0);

    pop(); // restore previous state after completing rotation
  }
}
