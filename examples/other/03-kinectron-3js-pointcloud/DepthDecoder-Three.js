/**
 * DepthDecoder - Converts Kinectron 1.0.1 WebP depth data to Uint16Array
 *
 * Kinectron 1.0.1 sends depth data as a WebP-encoded image where each pixel's
 * R and G channels encode a 16-bit depth value (R = low byte, G = high byte).
 * This class decodes that image and returns a standard Uint16Array.
 *
 * Usage:
 *   <script src="DepthDecoder.js"></script>
 *
 *   let decoder = new DepthDecoder(320, 288);
 *
 *   decoder.decode(kinectronDepthData, (depthArray) => {
 *     // depthArray is now a Uint16Array of depth values
 *     console.log(depthArray[0]); // Access depth at index 0
 *   });
 *
 *  // In a function
 *  function gotDepth(depthData) {
 *      // Decode the Kinectron WebP depth data to a Uint16Array
 *      depthDecoder.decode(depthData, (decodedArray) => {
 *      depthBuffer = decodedArray;
 *  });
 * }
 *
 *
 *
 */

//call setup to initialize p5 for p5 createGraphics to work
function setup(){}; 

class DepthDecoder {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.pg = null; // Graphics buffer for decoding (created on first use)
  }

  /**
   * Decodes Kinectron depth data to Uint16Array
   *
   * @param {Object} depthData - The depth data object from Kinectron
   * @param {Function} callback - Called with the decoded Uint16Array: callback(depthArray)
   */
  decode(depthData, callback) {
    // Create the graphics buffer on first use (after p5 is initialized)
    if (!this.pg) {
      this.pg = createGraphics(this.width, this.height);
      this.pg.pixelDensity(1); // Ensure 1:1 pixel mapping (important for high-DPI displays)
    }

    // Get the base64 WebP image data
    // Kinectron stores it in either raw.data or src depending on version
    const imageData = depthData.raw?.data || depthData.src;

    // Load the WebP image
    loadImage(imageData, (img) => {
      // Draw the decoded image to our graphics buffer
      this.pg.clear();
      this.pg.image(img, 0, 0, this.width, this.height);
      this.pg.loadPixels();

      // Create array to store depth values
      const depthArray = new Uint16Array(this.width * this.height);

      // Extract depth values from pixels
      // Each pixel has 4 values in the array: [R, G, B, A]
      // Depth is encoded in R (low byte) and G (high byte) channels
      for (let i = 0; i < this.width * this.height; i++) {
        const pixelIndex = i * 4;
        const lowByte = this.pg.pixels[pixelIndex]; // R channel (0-255)
        const highByte = this.pg.pixels[pixelIndex + 1]; // G channel (0-255)

        // Reconstruct 16-bit depth value from two 8-bit values
        // Bitwise OR combines: lowByte + (highByte * 256)
        depthArray[i] = lowByte | (highByte << 8);
      }

      // Return the decoded array via callback
      callback(depthArray);
    });
  }
}
