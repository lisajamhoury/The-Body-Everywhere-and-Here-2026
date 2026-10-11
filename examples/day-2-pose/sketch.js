let bodyPose;
let myVid;
let poses = [];
let p5lm;
let friendBox = 'undefined';

async function setup() {
  createCanvas(640, 480);

  p5lm = new p5LiveMedia(this, "DATA", null, "taco434");
  p5lm.on('data', gotData);

  myVid = createCapture(VIDEO,{flipped:true});
  myVid.size(640,480);
  myVid.hide()
  bodyPose = ml5.bodyPose();
  await bodyPose.ready;
  bodyPose.detectStart(myVid, gotPoses);
}

function draw() {
  background(255,255,0);
  // image(myVid,0,0,width,height);

  if (poses.length < 1) {
    console.log('returning');
    return;
  }

  const myBox = poses[0].box;
  p5lm.send(JSON.stringify(myBox));

  strokeWeight(10);
  stroke("pink");
  noFill();
  rect(myBox.xMin, myBox.yMin,myBox.width, myBox.height); 
  
  if (friendBox !== 'undefined') {

  strokeWeight(10);
  stroke("blue");
  noFill();
  rect(friendBox.xMin, friendBox.yMin,friendBox.width, friendBox.height); 
  }

}

function gotPoses(results){
  poses = results;
}

function gotData(data, id) {
  friendBox = JSON.parse(data);
}


