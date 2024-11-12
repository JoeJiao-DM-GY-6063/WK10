let song;
let amplitude;
let fft;

function preload() {
  song = loadSound("../assets/epic.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  amplitude = new p5.Amplitude();
  fft = new p5.FFT();
}

function draw() {
  background(120, 120, 120);

  //音量gd
  let volume = amplitude.getLevel();
  let diam = map(volume, 0, 1, 0, width);

  noStroke();
  fill(255);
  ellipse(width / 2, height / 2, diam);

  //频谱
  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h);
  }
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
