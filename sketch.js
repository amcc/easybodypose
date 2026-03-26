// easeBodyPose is based on this:
// https://docs.ml5js.org/#/reference/bodypose

// how to use:

// "person": access individual body part positions with the 'person' object.
// for instance: person.nose.x, person.nose.y
// see end of file for all available body parts

// "keypoints" you can use the keypoints array to show all body parts by looping over it.

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

  noStroke();

  // examples of how you can use this code

  // track the nose
  circle(person.nose.x, person.nose.y, 50);
}

// these are the available variables...

// list of all variables
// person <- object containing the person

// within the person object we have:
// box
// confidence

// the body parts within the person object:
// left_ankle
// left_ear
// left_elbow
// left_eye
// left_hip
// left_knee
// left_shoulder
// left_wrist
// nose
// right_ankle
// right_ear
// right_elbow
// right_eye
// right_hip
// right_knee
// right_shoulder
// right_wrist

// for instance:
// person.nose.x

// poses is the root bodyPose object
