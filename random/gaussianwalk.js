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
    let choice = floor(random(4));
    let step = randomGaussian(4, 3);
    // 0, 1, 2, or 3. The random choice determines the step.

    if (choice === 0) {
      this.x += step;
    } else if (choice === 1) {
      this.x -= step;
    } else if (choice === 2) {
      this.y += step;
    } else {
      this.y -= step;
    }
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
