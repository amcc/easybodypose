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

  // track the eyes
  fill(255, 255, 0);
  circle(person.right_eye.x, person.right_eye.y, 50);
  circle(person.left_eye.x, person.left_eye.y, 50);

  // we can use the person.confidence value to only show the part if a person is detected
  fill(0, 255, 255);
  if (person.confidence > 0) {
    circle(person.nose.x, person.nose.y, 50);
  }

  // show all the keypoints - useful for seeing what is available:
  fill(255, 0, 0);
  for (let i = 0; i < keypoints.length; i++) {
    circle(keypoints[i].x, keypoints[i].y, 10);
  }
}

// these are the available variables...
// console.log(person) will show you everything in the console.
// for instance:
// person.nose.x

// list of all variables
// box
// confidence
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
