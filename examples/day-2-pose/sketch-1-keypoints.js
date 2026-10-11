let bodyPose;
let myVid;
let poses = [];

async function setup() {
  createCanvas(640, 480);
  

  myVid = createCapture(VIDEO,{flipped:true});
  myVid.size(640,480);
  myVid.hide()
  bodyPose = ml5.bodyPose();
  await bodyPose.ready;
  bodyPose.detectStart(myVid, gotPoses);
}

function draw() {
  background(255,255,0);

  if (poses.length < 1) {
    console.log('returning');
    return;
  }

  const lElbow = poses[0].left_elbow;
  const rHip = poses[0].right_hip;
  
  fill('pink');
  circle(lElbow.x, lElbow.y, 20);

  fill('blue');
  circle(rHip.x, rHip.y, 40);


  // const keyPoints = poses[0].keypoints;

  // for (let i = 0; i<keyPoints.length; i++) {
  //   const keyPoint = keyPoints[i];

  //   if (keyPoint.confidence > 0.5) {
  //   noStroke();
  //   fill('pink');
  //   circle(keyPoint.x, keyPoint.y, 30);
  //   }

  // }



  
}

function gotPoses(results){
  poses = results;
}
