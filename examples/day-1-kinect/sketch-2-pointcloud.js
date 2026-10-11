let kinectron;
let decoder;
let depthBuffer = [];
let pointCloud = [];
const DEPTHWIDTH = 320; 
const DEPTHHEIGHT = 288;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  pixelDensity(1);

  createPoints();

  decoder = new DepthDecoder(320,288);

  kinectron = new Kinectron('10.20.82.213');

  kinectron.on('ready', () => {
    console.log('connected');
  });

  kinectron.peer.connect();

  kinectron.startDepthKey((depthFrame) => {
    processDepth(depthFrame);
  })
}

function processDepth(depthFrame) {
  decoder.decode(depthFrame, (depthArray) => {
  depthBuffer = depthArray;
  })

}

function draw() {
  background('green');
  orbitControl();

  if (depthBuffer.length < 1) {
    console.log('returning')
    return;
  }
    

    for (let y = 0; y < DEPTHHEIGHT; y+=3) {
      for (let x = 0; x < DEPTHWIDTH; x+=3) { 

        let i = (y*DEPTHHEIGHT+x);

        let myPoint = pointCloud[i];

        let depthValue = depthBuffer[i];

        if (depthValue < 100 || depthValue > 2000) {
          depthValue = Number.MAX_VALUE;
        } else {
          depthValue = map(depthValue, 0,3000,0,1000);
        }

        let newRed = (i/DEPTHHEIGHT*DEPTHWIDTH) / 255;
        
        stroke(newRed, 255-newRed, 255-newRed, 100);
        // stroke('white');
        point(myPoint.x, myPoint.y, depthValue);
      }
    }



}

function createPoints() {

  for (let y = 0; y < DEPTHHEIGHT; y++) {
      for (let x =0; x < DEPTHWIDTH; x++) { 

        let newVertex = {x:x-DEPTHWIDTH/2, y:y-DEPTHHEIGHT/2, z:0};
        pointCloud.push(newVertex);

      }
  }


}

















// function drawImage(depthImg) {
//   image(depthImg,0,0,width,height);

//   loadPixels();

//   for (let y = 0; y < height; y++) {
//     for (let x =0; x < width; x++) { 

//       let i = (y*width+x)*4;

//       const depthVal = pixels[i+2];

//       const mappedVal = map(depthVal, 100,200,0,1);

//       const newRGB = HSVtoRGB(mappedVal, 1,1);

//       pixels[i] = newRGB.r;
//       pixels[i+1] = newRGB.g;
//       pixels[i+2] = newRGB.b; 
//       pixels[i+3] = 255;


//     }
//   }

//   updatePixels();

// }


/* accepts parameters
 * h  Object = {h:x, s:y, v:z}
 * OR 
 * h, s, v
*/
function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}