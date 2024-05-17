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
    let r = random(1);
    if (r < 0.75) {
      {
        let choice = floor(random(4));
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
    } else {
      let dx = mouseX - this.x;
      let dy = mouseY - this.y;

      let dist = sqrt(dx * dx + dy * dy);
      dx /= dist;
      dy /= dist;
      // Normalize the direction vector
      this.x += dx;
      this.y += dy;
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
    walkers[j].step();
    walkers[j].show();
  }
}
