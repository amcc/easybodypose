// how to use this
// we have preloaded the bodyPose model
// run startBodyPose() in your setup

function preload() {
  bodyPose = ml5.bodyPose("MoveNet");
}

// define initial values with x and y off the screen
let initialValues = {
  x: -10000,
  y: -10000,
  confidence: 0,
};

// define initial score (currently not added to person)
let score = 0;

// define initial keypoints
let keypoints = [
  {
    score: 0,
    part: "",
    position: {
      x: -10000,
      y: -10000,
    },
  },
];

// define the default person
let person = {
  nose: initialValues,
  left_eye: initialValues,
  right_eye: initialValues,
  left_ear: initialValues,
  right_ear: initialValues,
  left_shoulder: initialValues,
  right_shoulder: initialValues,
  left_elbow: initialValues,
  right_elbow: initialValues,
  left_wrist: initialValues,
  right_wrist: initialValues,
  left_hip: initialValues,
  right_hip: initialValues,
  left_knee: initialValues,
  right_knee: initialValues,
  left_ankle: initialValues,
  right_ankle: initialValues,
};

function startBodyPose(videoOrImage, bodyPose) {
  input = videoOrImage;
  if (!input) {
    bodyPoseVideo = createCapture(VIDEO);
    bodyPoseVideo.size(width, height);
    bodyPoseVideo.hide();
    input = bodyPoseVideo;
    imageInput = false;
  } else if (!input.elt || input.elt.nodeName !== "VIDEO") {
    imageInput = true;
  }

  // Start detecting poses in the webcam video
  bodyPose.detectStart(input, gotPoses);

  // log some help to the console
  logMessage();
}

// Callback function for when bodyPose outputs data
function gotPoses(results) {
  // Save the output to the poses variable
  poses = results;
  if (poses.length > 0) {
    addProps(poses[0]);
  } else {
    person.confidence = 0;
  }
}

function addProps(obj) {
  let result = "";
  for (const i in obj) {
    // Object.hasOwn() is used to exclude properties from the object's
    // prototype chain and only show "own properties"
    if (Object.hasOwn(obj, i)) {
      // console.log("i", i);
      // remove 'score' and 'keypoints' and add them to separate variables
      if (i !== "score" && i !== "keypoints") {
        person[i] = obj[i];
      } else if (i === "score") {
        score = obj[i];
      } else if (i === "keypoints") {
        keypoints = obj[i];
      }
    }
  }
}

function logMessage() {
  console.log(`
🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
EasyBodyPose allows you to use ML5JS BodyPose
easily without extra code.

Instructions and more information:
↳ https://github.com/amcc/easybodypose
🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
`);
}

// define all the variables we need
let poses = [];
let imageInput = false;
let input;
let bodyPoseVideo;
