// Run startBodyPose() in setup to load the model and start detection.

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

let noseX = initialValues.x;
let noseY = initialValues.y;
let leftEyeX = initialValues.x;
let leftEyeY = initialValues.y;
let rightEyeX = initialValues.x;
let rightEyeY = initialValues.y;
let leftEarX = initialValues.x;
let leftEarY = initialValues.y;
let rightEarX = initialValues.x;
let rightEarY = initialValues.y;
let leftShoulderX = initialValues.x;
let leftShoulderY = initialValues.y;
let rightShoulderX = initialValues.x;
let rightShoulderY = initialValues.y;
let leftElbowX = initialValues.x;
let leftElbowY = initialValues.y;
let rightElbowX = initialValues.x;
let rightElbowY = initialValues.y;
let leftWristX = initialValues.x;
let leftWristY = initialValues.y;
let rightWristX = initialValues.x;
let rightWristY = initialValues.y;
let leftHipX = initialValues.x;
let leftHipY = initialValues.y;
let rightHipX = initialValues.x;
let rightHipY = initialValues.y;
let leftKneeX = initialValues.x;
let leftKneeY = initialValues.y;
let rightKneeX = initialValues.x;
let rightKneeY = initialValues.y;
let leftAnkleX = initialValues.x;
let leftAnkleY = initialValues.y;
let rightAnkleX = initialValues.x;
let rightAnkleY = initialValues.y;

async function startBodyPose(videoOrImage, model = "MoveNet") {
  bodyPose = await ml5.bodyPose(model, () => {
    console.log(`🤖 BodyPose model loaded! Using ${model} model.`);
  });

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

  noseX = person.nose.x;
  noseY = person.nose.y;
  leftEyeX = person.left_eye.x;
  leftEyeY = person.left_eye.y;
  rightEyeX = person.right_eye.x;
  rightEyeY = person.right_eye.y;
  leftEarX = person.left_ear.x;
  leftEarY = person.left_ear.y;
  rightEarX = person.right_ear.x;
  rightEarY = person.right_ear.y;
  leftShoulderX = person.left_shoulder.x;
  leftShoulderY = person.left_shoulder.y;
  rightShoulderX = person.right_shoulder.x;
  rightShoulderY = person.right_shoulder.y;
  leftElbowX = person.left_elbow.x;
  leftElbowY = person.left_elbow.y;
  rightElbowX = person.right_elbow.x;
  rightElbowY = person.right_elbow.y;
  leftWristX = person.left_wrist.x;
  leftWristY = person.left_wrist.y;
  rightWristX = person.right_wrist.x;
  rightWristY = person.right_wrist.y;
  leftHipX = person.left_hip.x;
  leftHipY = person.left_hip.y;
  rightHipX = person.right_hip.x;
  rightHipY = person.right_hip.y;
  leftKneeX = person.left_knee.x;
  leftKneeY = person.left_knee.y;
  rightKneeX = person.right_knee.x;
  rightKneeY = person.right_knee.y;
  leftAnkleX = person.left_ankle.x;
  leftAnkleY = person.left_ankle.y;
  rightAnkleX = person.right_ankle.x;
  rightAnkleY = person.right_ankle.y;
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
let bodyPose;
let poses = [];
let imageInput = false;
let input;
let bodyPoseVideo;
