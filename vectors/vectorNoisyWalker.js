class Walker {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
  }

  show() {
    stroke(0);
    point(this.pos.x, this.pos.y);
  }

  step(k) {
    let choice = floor(random(4));
    let step = 5 * noise(k);
    // 0, 1, 2, or 3. The random choice determines the step.

    if (choice === 0) {
      this.pos.x += step;
    } else if (choice === 1) {
      this.pos.x -= step;
    } else if (choice === 2) {
      this.pos.y += step;
    } else {
      this.pos.y -= step;
    }
  }
}
let walkers = [];
let howMany = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  for (let i = 0; i < howMany; i++) {
    walkers[i] = new Walker();
  }
}

function draw() {
  for (let j = 0; j < howMany; j++) {
    walkers[j].step(random(0, 1000));
    walkers[j].show();
  }
}
