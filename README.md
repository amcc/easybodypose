# 🚀 ML5JS easyBodyPose

- [Use this code in the p5js editor](https://editor.p5js.org/amcc/sketches/ouGbq7DOV)
- [See the demo](https://lab.amcc.io/easybodypose)

easyBodyPose allows you to easily use [ML5JS bodyPose](https://docs.ml5js.org/#/reference/bodypose) without worrying about the more advanced coding techniques and complexity. You can just have fun - then learn that stuff later. It can be used in 2 ways:

1. For the beginner you can use this just like detecting the mouse. In p5js you can use the mouse to control things by using the p5js system variables: `mouseX` and `mouseY`. With easyBodyPose you use the same style for any part of the body that bodyPose can detect. For instance `noseX` and `noseY`. See the full list of options below.
2. You can access all the body parts using object notation in exactly the same style as the original library. This might be seen as a bit more advanced - but its what you might want to eventually learn anyway. So to get the nose position this way use `person.nose.x` and `person.nose.y`.

This code does a few things to stop error if there no person is detected: All variables have been created already with pre-filled values for each body part and the keypoints. If you want to see how this is done open the `easyBodyPose.js` file.

How to use this sketch:

1. The simple way:

<pre>
circle(noseX, noseY, 10)
</pre>

2. The standard more feature rich way:

<pre>
circle(person.nose.x, person.nose.y, 10)
</pre>

## Documentation

### Full list of `X` and `Y` simple variables you can use:

<pre>
noseX
noseY
leftEyeX
leftEyeY
rightEyeX
rightEyeY
leftEarX
leftEarY
rightEarX
rightEarY
leftShoulderX
leftShoulderY
rightShoulderX
rightShoulderY
leftElbowX
leftElbowY
rightElbowX
rightElbowY
leftWristX
leftWristY
rightWristX
rightWristY
leftHipX
leftHipY
rightHipX
rightHipY
leftKneeX
leftKneeY
rightKneeX
rightKneeY
leftAnkleX
leftAnkleY
rightAnkleX
rightAnkleY
</pre>

### Here are the variables you can use with the `person` object. Each part has a `x`, `y` and `confidence` value. For instance `person.nose.x` will give you a pixel value of the x position of the nose, `person.nose.confidence` gives you a score between `0` and `1` of how confident it is of its position.

<pre>
left_ankle
left_ear
left_elbow
left_eye
left_hip
left_knee
left_shoulder
left_wrist
nose
right_ankle
right_ear
right_elbow
right_eye
right_hip
right_knee
right_shoulder
right_wrist
</pre>

In addition the `person` object has a `confidence` value and a `box` value. `person.confidence` returns a value between `0` and `1` of how confident the model is that a person is in frame. `person.box` is an obect with `height`, `width`, `xMax`, `xMin`, `yMax` and `yMin` values.

Example of using confidence to only draw a circle if a person can be see on the camera:

<pre>
 if (person.confidence > 0) {
    circle(person.nose.x, person.nose.y, 50);
 }
</pre>

Other objects:

<pre>
keypoints
</pre>

Keypoints is an array of all the above body parts with the same values. This array is useful if you want to loop over all parts.

## Can i use this like the original bodyPose `poses` object

Yes! To access all poses as you would normally in BodyPose use the `poses` object. This is an array of all detected poses (people). [See the orgininal bodyPose documentation in order to understand this](https://docs.ml5js.org/#/reference/bodypose)

## 🚀 Why did you make this and how does it work?

EasyBodyPose was made because playing with body detection is fun, its a lovely way to see how easily we can connect to code and be creative with it. But using body detection is hard, to get it working and understand what is happening there is a high bar to just getting started.

Using BodyPose or any machine learning detection code requires knowledge of arrays, objects, conditionals and loops. Without understanding these it is hard to get started and it is very easy to run into errors from undetected poses.

What if we could access the nose, just like we access the mouse position. In p5js a lot of the complexity of many interactions is abstacted away, for instance mouseX gives us the mouse x position without setting up listeners, or worrying about why it works. EasyBodyPose aims to do just that.

_🥐 Why are there both simple variables and the person object?_

Use variables like `noseX` and `noseY` for a quick start - almost no coding knowledge needed, or `person.nose.x` and `person.nose.y` when you want to keep each body's position and confidence together and start to understand how machine learning models like bodyPose really work.

_🍖 Why do we only track one person?_

Only allowing one person means we can really simplify the code - but you still have access to the `poses` variable allowing the usage of multi-person tracking completely possible. When you're getting started with this kind of code do you really care about doing that - and once you understand about loops and conditionals then perhaps use the original [ML5js code](https://docs.ml5js.org/#/reference/bodypose)!

_🍦 Why is the canvas in the centre of the screen?_

We wanted to add a tiny bit of styling - it looks horrible when the canvas is stuck in the top corner, so a tiny bit of CSS has been added - check out the `style.css` file where there's a comment about this.

Big improvements could be made, such as scaling the camera, detecting if its landscape or portrait and changing it accordingly, using the front or back camera (this can be done by changing the camera from `user` to `environment`).

But this over complicates things for now - if you interested discuss in the [Discussions](https://github.com/amcc/easybodypose/discussions) area!
