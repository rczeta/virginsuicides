let message1 = "and that our job was merely to create the noise";
let typed1 = "";

let message2 = "that seemed to fascinate them.";
let typed2 = "";

let house;
let helphouse;
let fire;
let font;
let binoculars;
let bgimg;

function preload() {
  house = loadImage("interactivehouse.png");
  font = loadFont("LeagueScript-Regular.ttf");
  helphouse = loadImage("helphouse.png");
  fire = loadImage("fire.png");
  binoculars = loadImage("binoculars.png");
  bgimg = loadImage("sizedpinknotebookpaper.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(bgimg, 0, 0, windowWidth, windowHeight);
}

function draw() {
  image(helphouse, width / 6, height / 12);
  image(fire, 0, 0);
  fill("white");
  textFont(font);
  textSize(50);

  if (mouseIsPressed) {
    image(binoculars, -width / 30, -height / 12);

    text(typed1, width / 7, height / 10);

    if (typed1.length < message1.length) {
      let nextChar1 = message1.charAt(typed1.length);

      if (frameCount % 3 === 0) {
        typed1 += nextChar1;
      }
    }
    text(typed2, width / 4, height - height / 20);

    if (typed2.length < message2.length) {
      let nextChar2 = message2.charAt(typed2.length);

      if (frameCount % 5 === 0) {
        typed2 += nextChar2;
      }
    }
  }
}
