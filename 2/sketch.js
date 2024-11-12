// TODO: add other files
// TODO: add sound to exercise 1

let bloop = [];

function preload() {
  bloop.push = loadSound("../assets/bloop-0.mp3");
  bloop.push = loadSound("../assets/bloop-1.mp3");
  bloop.push = loadSound("../assets/bloop-2.mp3");
  bloop.push = loadSound("../assets/bloop-3.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(120, 120, 120);
}

function mouseClicked() {
  let mBloop = random(bloops);
  mBloop.play();
}
