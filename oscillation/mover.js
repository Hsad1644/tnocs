class Mover {
  constructor() {
    this.pos = createVector();
    this.vel = createVector();
    this.acc = createVector();

    this.mass = 1.0;

    this.angle = 0;
    this.avel = 0;
    this.aacc = 0;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.avel += this.aacc;

    this.avel = constrain(this.avel, -0.1, 0.1);

    this.angle += this.avel;

    this.aacc = this.acc.x; // using x component of linear acceleration to define angular acc

    this.acc.mult(0);
  }

  show() {
    stroke(0);
    fill(175, 200);
    push(); //Use push() to save the current state so the rotation of this shape doesn’t affect the rest of the world.

    translate(this.pos.x, this.pos.y);

    rotate(this.angle);

    circle(0, 0, this.radius * 2);
    line(0, 0, this.radius, 0);

    pop(); // restore previous state after completing rotation
  }
}
