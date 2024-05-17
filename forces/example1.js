let movers = [];
let howMany = 3;
let t = 0;
let gravity;
let c = 0.1;
let liquid;

function setup() {
  createCanvas(windowWidth, windowHeight - 1);
  for (let i = 0; i < howMany; i++) {
    movers[i] = new Mover();
  }
  textSize(32);
  gravity = createVector(0, 1);
  liquid = new liq(0, height / 2, width, height / 2, 0.1);
}

function draw() {
  background(200);
  liquid.show();
  for (let i = 0; i < movers.length; i++) {
    // Is the Mover in the liquid?
    if (liquid.contains(movers[i])) {
      // Calculate drag force
      let dragForce = liquid.getDrag(movers[i]);
      // Apply drag force to Mover
      movers[i].applyForce(dragForce);
    }
    let wind = createVector(
      floor(1 * random(-1, 3)) * noise(t),
      floor(2 * random(-1, 3)) * noise(t + 10000)
    );
    for (let i = 0; i < howMany; i++) {
      movers[i].update();
      movers[i].applyForce(gravity);
      if (mouseIsPressed) {
        movers[i].applyForce(wind);
      }

      if (movers[i].contactEdge()) {
        let friction = movers.vel.copy();
        friction.mult(-1);
        friction.setMag(c);
        movers[i].applyForce(friction);
        // Apply the friction force vector to the object.
      }
      movers[i].checkEdges();
      movers[i].show(i);
    }

    text(`${movers[0].acc}`, 10, windowHeight - 42);
    text(`${movers[0].pos}`, 10, windowHeight - 10);

    t += 0.01;
  }
}
