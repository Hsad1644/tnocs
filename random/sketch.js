class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(0);
    point(this.x, this.y);
  }

  step4() {
    let choice = floor(random(4));
    // 0, 1, 2, or 3. The random choice determines the step.

    if (choice === 0) {
      this.x++;
    } else if (choice === 1) {
      this.x--;
    } else if (choice === 2) {
      this.y++;
    } else {
      this.y--;
    }
  }

  step8() {
    let xstep = floor(random(3)) - 1;
    let ystep = floor(random(3)) - 1;

    this.x += xstep;
    this.y += ystep;
  }

  stepInf() {
    let xstep = random(-1, 1);
    let ystep = random(-1, 1);
    // Any floating-point number from –1 to 1

    this.x += xstep;
    this.y += ystep;
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
    walkers[j].stepInf();
    walkers[j].show();
  }
}
