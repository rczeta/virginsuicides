let message = "which colors went together";
let typed = "";

let font;
let whitecloud1;
let whitecloud2;
let whitecloud3;
let whitecloud4;
let bgimg;

let clouds = ["bluecloud", "yellowcloud", "pinkcloud", "greencloud"];

function preload() {
  font = loadFont("LeagueScript-Regular.ttf");
  bgimg = loadImage("sizedpinknotebookpaper.png");
  whitecloud1 = loadImage("whitecloud.png");
  whitecloud2 = loadImage("whitecloud.png");
  whitecloud3 = loadImage("whitecloud.png");
  whitecloud4 = loadImage("whitecloud.png");
  bluecloud = loadImage("bluecloud.png");
  yellowcloud = loadImage("yellowcloud.png");
  pinkcloud = loadImage("pinkcloud.png");
  greencloud = loadImage("greencloud.png");
  currentImage1 = whitecloud1;
  currentImage2 = whitecloud2;
  currentImage3 = whitecloud3;
  currentImage4 = whitecloud4;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(bgimg, 0, 0, windowWidth, windowHeight);

  fill("black");
  textFont(font);
  textSize(50);
  text("and how you ended up knowing", width / 6, height / 6.25);

  image(currentImage1, 0, height / 9);
  image(currentImage2, width / 3, height / 9);
  image(currentImage3, 0, height / 3);
  image(currentImage4, width / 3, height / 3);

  // fill("white");
  //ellipse(width / 3, height / 2.25, 100, 100);
  // ellipse(width - width / 3, height / 2.25, 100, 100);
  //ellipse(width / 3, height - height / 4, 200, 200);
  //ellipse(width - width / 3, height - height / 4, 200, 200);

  fill("black");
  text(typed, width / 2.25, height / 3.85);

  if (typed.length < message.length) {
    let nextChar = message.charAt(typed.length);

    if (frameCount % 5 === 0) {
      typed += nextChar;
    }
  }
}
function mousePressed() {
  cloudone();
  cloudtwo();
  cloudthree();
  cloudfour();
}

function cloudone() {
  let button = dist(mouseX, mouseY, width / 3, height / 2.25);
  if (button <= 50) {
    if (clouds == 0) {
      currentImage1 = bluecloud;
      console.log("bluecloud");
    } else if (clouds == 1) {
      currentImage1 = yellowcloud;
      console.log("yellowcloud");
    } else if (clouds == 2) {
      currentImage1 = pinkcloud;
      console.log("pinkcloud");
    } else if (clouds == 3) {
      currentImage1 = greencloud;
      console.log("greencloud");
    } else {
      currentImage1 = whitecloud1;
      clouds = -1;
    }
    clouds = clouds + 1;
  }
}
function cloudtwo() {
  let button = dist(mouseX, mouseY, width - width / 3, height / 2.25);
  if (button <= 50) {
    if (clouds == 0) {
      currentImage2 = bluecloud;
      console.log("bluecloud");
    } else if (clouds == 1) {
      currentImage2 = yellowcloud;
      console.log("yellowcloud");
    } else if (clouds == 2) {
      currentImage2 = pinkcloud;
      console.log("pinkcloud");
    } else if (clouds == 3) {
      currentImage2 = greencloud;
      console.log("greencloud");
    } else {
      currentImage2 = whitecloud2;
      clouds = -1;
    }
    clouds = clouds + 1;
  }
}
function cloudthree() {
  let button = dist(mouseX, mouseY, width / 3, height - height / 4);
  if (button <= 100) {
    if (clouds == 0) {
      currentImage3 = bluecloud;
      console.log("bluecloud");
    } else if (clouds == 1) {
      currentImage3 = yellowcloud;
      console.log("yellowcloud");
    } else if (clouds == 2) {
      currentImage3 = pinkcloud;
      console.log("pinkcloud");
    } else if (clouds == 3) {
      currentImage3 = greencloud;
      console.log("greencloud");
    } else {
      currentImage3 = whitecloud3;
      clouds = -1;
    }
    clouds = clouds + 1;
  }
}
function cloudfour() {
  let button = dist(mouseX, mouseY, width - width / 3, height - height / 4);
  if (button <= 100) {
    if (clouds == 0) {
      currentImage4 = bluecloud;
      console.log("bluecloud");
    } else if (clouds == 1) {
      currentImage4 = yellowcloud;
      console.log("yellowcloud");
    } else if (clouds == 2) {
      currentImage4 = pinkcloud;
      console.log("pinkcloud");
    } else if (clouds == 3) {
      currentImage4 = greencloud;
      console.log("greencloud");
    } else {
      currentImage4 = whitecloud4;
      clouds = -1;
    }
    clouds = clouds + 1;
  }
}
