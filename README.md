# ML5JS easyBodyPose

[Play with easyBodyPose here]()
easyBodyPose allows you to easily use [ML5JS](https://lab.amcc.io/easybodypose) bodyPose without worrying about loops and if statements. You can access all the body parts of a person
by typing `person.nose.x` for example to get the x position of your nose.

To avoid errors if there are no poses detected a `person` variable has been created with pre-filled objects for each body part and the keypoints. If you want to see how this is done open the `easyBodyPose.js` file.

How to use this sketch:
use the `person` variable, add a body part and access its position

<pre>
circle(person.nose.x, person.nose.y, 10)
</pre>

List of possible body parts in the person object:

<pre>
box
confidence
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

Other objects:

<pre>
poses
keypoints
</pre>
