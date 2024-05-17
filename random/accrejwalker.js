class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(0);
    point(this.x, this.y);
  }

  step() {
    let step = 10;
    let stepx = random(-step, step);
    let stepy = random(-step, step);

    if (random(-step, step) > stepx * stepx) {
      stepx = 0;
    }

    if (random(-step, step) > stepy * stepy) {
      stepy = 0;
    }

    this.x += stepx;
    this.y += stepy;
  }
}
let walkers = [];
let howMany = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  for (let i = 0; i < howMany; i++) {
    walkers[i] = new Walker();
  }
}

function draw() {
  for (let j = 0; j < howMany; j++) {
    walkers[j].step();
    walkers[j].show();
  }
}
