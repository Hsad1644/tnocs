let movers = [];
let howMany = 55;

class Mover {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.acc = p5.Vector.random2D();

    this.rad = floor(random(15, 25));
    this.topSpeed = 8;
  }

  update() {
    // this.acc = p5.Vector.random2D();
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.pos);
    dir.normalize();
    dir.mult(0.4);
    this.acc = dir;
    this.vel.add(this.acc);
    this.vel.limit(this.topSpeed);
    this.pos.add(this.vel);
  }

  show() {
    stroke(0);
    fill(175);
    circle(this.pos.x, this.pos.y, this.rad);
  }

  checkEdges() {
    if (this.pos.x > width || this.pos.x < 0) {
      this.vel.x *= -1;
      this.acc.x *= -1;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      this.vel.y *= -1;
      this.acc.y *= -1;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < howMany; i++) {
    movers[i] = new Mover();
  }
}

function draw() {
  background(200);
  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].checkEdges();
    movers[i].show();
  }
}
