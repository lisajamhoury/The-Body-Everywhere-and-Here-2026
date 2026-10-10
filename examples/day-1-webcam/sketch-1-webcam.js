let myVid;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);

  myVid = createCapture(VIDEO, {flipped:true});
  myVid.hide();
}

function draw() {
  // image(myVid,0,0,width,height);

  myVid.loadPixels(); 

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) { 

      let i = (y*width+x)*4;

      // myVid.pixels[i] = 255; // red 
      myVid.pixels[i+1] = 255; // green
      // myVid.pixels[i+2] = 255; // blue 
      myVid.pixels[i+3] = 100; // alpha 

    } 
  }

  myVid.updatePixels();

  image(myVid, 0,0,width,height);

  push(); 
  translate(width,0);
  scale(-1,1)
  image(myVid,0,0,width,height);
  pop();
}
