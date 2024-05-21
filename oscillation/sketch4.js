// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let mover;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mover = new SMover();
}

function draw() {
  background(255);
  mover.update();
  mover.checkEdges();
  mover.display();
}
