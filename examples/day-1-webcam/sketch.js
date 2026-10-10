let myVid;
let pastPixels = [];
let currentPixels = [];
let catImg; 
let catPixels = []; 

let tSlider;

function preload() {
  catImg = loadImage('cat.jpg');
} 

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);

  tSlider = createSlider(0,255,100);

  myVid = createCapture(VIDEO, {flipped:true});
  myVid.hide();

  catImg.loadPixels();
  catPixels = catImg.pixels;
  catImg.updatePixels();

  

}

function draw() {

  const threshold = tSlider.value();

  myVid.loadPixels(); 

  currentPixels = myVid.pixels;


  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) { 

      let i = (y*width+x)*4;

      const diffR = abs(currentPixels[i] - pastPixels[i]);
      const diffG = abs(currentPixels[i+1] - pastPixels[i+1]);
      const diffB = abs(currentPixels[i+2] - pastPixels[i+2]);

      // get the difference
      const avgDiff = (diffR + diffG + diffB) / 3; // 0-255

      // set my past pixels for next frame 
      pastPixels[i] = currentPixels[i];
      pastPixels[i+1] = currentPixels[i+1];
      pastPixels[i+2] = currentPixels[i+2];
      pastPixels[i+3] = currentPixels[i+3];

      if ( avgDiff < threshold ) {
        myVid.pixels[i] = 0; // red 
        myVid.pixels[i+1] = 0; // green
        myVid.pixels[i+2] = 0; // blue 
        myVid.pixels[i+3] = 100; // alpha 
        
      } 
      else {
        myVid.pixels[i] = catPixels[i]; // red 
        myVid.pixels[i+1] = catPixels[i+1]; // green
        myVid.pixels[i+2] = catPixels[i+2]; // blue 
        myVid.pixels[i+3] = 255; // alpha 

      } 
    } 
  }
  myVid.updatePixels();
  image(myVid, 0,0,width,height);
}
