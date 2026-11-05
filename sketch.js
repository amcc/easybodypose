// please look at the README.md for instructions on how to use this code

let video;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  // start bodyPose
  startBodyPose(video);
}

function draw() {
  background(220);

  // display the video
  image(video, 0, 0);

  fill(0);

  // track the nose once a person is detected
  if (person.confidence > 0) {
    circle(noseX, noseY, 50);
  }
}
