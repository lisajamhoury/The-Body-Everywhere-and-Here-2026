let bodyPose;
let myVid;
let poses = [];

async function setup() {
  createCanvas(640, 480);
  
  myVid = createCapture(VIDEO);
  myVid.size(640,480);
  myVid.hide()
  bodyPose = ml5.bodyPose();
  await bodyPose.ready;
  bodyPose.detectStart(myVid, gotPoses);
}

function draw() {
  background(255,255,0);
  image(myVid,0,0,width,height);

  if (poses.length < 1) {
    console.log('returning');
    return;
  }

  const leftEye = poses[0].left_eye;
  const leftWrist = poses[0].left_wrist;

  copy(leftEye.x-25, leftEye.y-25, 50,50, leftWrist.x, leftWrist.y, 100,100);

  // const myBox = poses[0].box;

  // strokeWeight(10);
  // stroke("pink");
  // noFill();
  // rect(myBox.xMin, myBox.yMin,myBox.width, myBox.height); 
  
}

function gotPoses(results){
  poses = results;
}
