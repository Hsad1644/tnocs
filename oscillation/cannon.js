// const { text } = require("express");

let gravity;
let balls = [];

function launcher(ball) {
  ball.pos.x = 15 + ball.radius * 2;
  ball.pos.y = height / 2;

  ball.vel.x = random(10, 20);
  ball.vel.y = random(-10, -20);

  ball.acc = p5.Vector.copy(ball.vel);
}

function setup() {
  gravity = createVector(0, 6);
  background(200, 100);
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 1; i++) {
    balls[i] = new Mover();
    launcher(balls[i]);
  }
}

function draw() {
  background(200);

  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.checkEdges();
    b.applyForce(gravity);
    b.update();
    b.show();
  }
  textSize(32);

  text(`${balls[0].vel}`, 16, height - 16);
}
