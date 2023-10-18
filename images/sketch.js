let mImg;

function preload() {
  mImg = loadImage("./abaporu.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  mImg.resize(0, height); //resize the image by the height
  print(mImg.pixels.length);
  noLoop();
}

function draw() {
  background(220, 20, 120);

  mImg.loadPixels();

  for(let vi = 0; vi < mImg.pixels.length; vi += 4){
    let redVal = mImg.pixels[vi + 0];
    let greenVal = mImg.pixels[vi + 1];
    let blueVal = mImg.pixels[vi + 2];
    let alphaVal = mImg.pixels[vi + 3];
  
    let maxVal = max(redVal, greenVal, blueVal);

  // //put green,blue,red to very high saturation(高饱和度)
  //   if(maxVal == redVal){
  //     mImg.pixels[vi + 0] = 255;
  //   } else if (maxVal == greenVal){
  //     mImg.pixels[vi + 1] = 255;
  //   } else{
  //     mImg.pixels[vi + 2] = 255;
  //   }
  // }

  // 通过调整蓝色val的alpha值去掉蓝色背景
  if(maxVal == blueVal){
    mImg.pixels[vi + 3] = 0;
  }
}


  mImg.updatePixels();

  image(mImg, (width - mImg.width)/2, 0);
}
