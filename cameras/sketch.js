let mCamera;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  mCamera = createCapture(VIDEO);
  mCamera.hide();
}

function draw() {
  background(220, 20, 120);
  
  mCamera.loadPixels();

  let spacing = 32;

    for (let y = 0; y < mCamera.height; y += spacing) {
      for (let x = 0; x < mCamera.width; x += spacing) {
        let pixelIndex = 4 * (y * mCamera.width + x);
        let redVal = mCamera.pixels[pixelIndex + 0];
        let greenVal = mCamera.pixels[pixelIndex + 1];
        let blueVal = mCamera.pixels[pixelIndex + 2];
      
      fill(redVal, greenVal, blueVal);
      ellipse(x, y, spacing, spacing);
      }
    }

  mCamera.updatePixels();
}
