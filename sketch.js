// please look at the instructions here:
// https://github.com/amcc/easybodypose

// make a variable for the webcam video
let video;

function setup() {
  createCanvas(640, 480);

  // turn on and use the webcam
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  // start bodyPose and give it the webcam video as input
  startBodyPose(video);
}

function draw() {
  background(220);

  // optionally display the video
  image(video, 0, 0);

  // track the nose once a person is detected, look at the instructions above for more.
  circle(noseX, noseY, 50);
}
