let message = "women";
let typed = "";

let house;
let womenhouse;
let font;
let bgimg;

function preload() {
  house = loadImage("interactivehouse.png");
  font = loadFont("LeagueScript-Regular.ttf");
  womenhouse = loadImage("womenhouse.png");
  bgimg = loadImage("sizedpinknotebookpaper.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(bgimg, 0, 0, windowWidth, windowHeight);
  image(house, width / 6, height / 12);
}

function draw() {
  fill("black");
  textFont(font);
  textSize(50);
  text("We knew, finally,", width / 6, height / 7.25);
  text(
    "that the girls were really              in disguise.",
    width / 5,
    height - height / 18
  );

  if (mouseIsPressed) {
    text(typed, width - width / 2.45, height - height / 32);

    if (typed.length < message.length) {
      let nextChar = message.charAt(typed.length);

      if (frameCount % 10 === 0) {
        typed += nextChar;
      }
    }
  }
}

function mousePressed() {
  image(womenhouse, width / 6, height / 12);
}
