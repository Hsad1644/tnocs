let randomCounts = [];

let total = 20;

function setup() {
  createCanvas(windowWidth, windowHeight - 1);
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(255);

  let index = floor(random(randomCounts.length)); // pick a random index and then increase its count
  randomCounts[index]++;

  stroke(0); //draw the bars
  fill(175);
  let w = width / randomCounts.length;

  for (let x = 0; x < randomCounts.length; x++) {
    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  }
}
