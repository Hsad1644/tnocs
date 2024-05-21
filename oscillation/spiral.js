let r,
  t = 0;
let theta;

function setup() {
  createCanvas(windowWidth, windowHeight - 1);
  //   r = height * t;
  theta = 0;
  // Initialize all values.
}

function draw() {
  //   background(255);
  r = height * t;

  translate(width / 2, height / 2);
  // Translate the origin point to the center of the screen.

  let x = r * cos(theta);
  let y = r * sin(theta);
  // Polar coordinates (r, theta) are converted to Cartesian (x, y) for use in the circle() function.

  fill(0);
  stroke(0);
  //   line(0, 0, x, y);
  circle(x, y, 20);
  theta += 0.02;
  t += 0.0001;
  // Increase the angle over time.
}
