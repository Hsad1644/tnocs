// to draw a baton and rotate it
let length = 55;
let radius = 15;
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(215);
  stroke(2);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(t);
  background(225);
  line(-length, 0, length, 0);
  circle(-length, 0, radius);
  circle(length, 0, radius);
  t += 0.2;
}
