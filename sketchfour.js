let message1 = "that we all";
let typed1 = "";

let message2 = "existed in space";
let typed2 = "";

let message3 = "like animals with";
let typed3 = "";

let message4 = "identical skins";
let typed4 = "";

let fullface1;
let fullface2;
let font;
let offset = 0;
let easing = 0.01;
let bgimg;

function preload() {
  fullface1 = loadImage("drawfullface.png");
  fullface2 = loadImage("fullfce2.png");
  font = loadFont("LeagueScript-Regular.ttf");
  bgimg = loadImage("sizedpinknotebookpaper.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(bgimg, 0, 0);
  image(fullface1, 100, 300); // Display at full opacity
  let dx = mouseX + fullface1.width / 1000 - offset;
  offset += dx * easing;

  image(fullface2, offset, 300);
  fill("black");
  textFont(font);
  textSize(50);
  text("We knew", width / 6, height / 7.25);
  text("that the", width / 4.5, height / 4.85);
  text("girls were", width / 3.75, height / 3.75);
  text("our twins", width / 3.25, height / 3);

  text(typed1, width - width / 4, height / 7.25);

  if (typed1.length < message1.length) {
    let nextChar1 = message1.charAt(typed1.length);

    // Type one character every 5 frames
    if (frameCount % 5 === 0) {
      typed1 += nextChar1;
    }
  }

  text(typed2, width - width / 3, height / 4.85);

  if (typed2.length < message2.length) {
    let nextChar2 = message2.charAt(typed2.length);

    // Type one character every 5 frames
    if (frameCount % 5 === 0) {
      typed2 += nextChar2;
    }
  }

  text(typed3, width - width / 2.6, height / 3.75);

  if (typed3.length < message3.length) {
    let nextChar3 = message3.charAt(typed3.length);

    // Type one character every 5 frames
    if (frameCount % 5 === 0) {
      typed3 += nextChar3;
    }
  }

  text(typed4, width - width / 2.25, height / 3);

  if (typed4.length < message4.length) {
    let nextChar4 = message4.charAt(typed4.length);

    // Type one character every 5 frames
    if (frameCount % 5 === 0) {
      typed4 += nextChar4;
    }
  }
}
