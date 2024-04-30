let message = "imprisonment";
let typed = "";

let bgimg;
let house;
let house1;
let font;
let fade = 0;
let scenenum = 0;

function preload() {
  house = loadImage("interactivehouse.png");
  font = loadFont("LeagueScript-Regular.ttf");
  house1 = loadImage("house1.png");
  bgimg = loadImage("sizedpinknotebookpaper.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(bgimg, 0, 0);
  image(house, width / 6, height / 12);
}

function draw() {
  fill("black");
  textFont(font);
  textSize(50);
  text("We felt the", width / 6, height / 7.25);
  text("of being a girl.", width - width / 3.25, height - height / 9);

  if (mouseIsPressed) {
    text(typed, width / 2.5, height / 7.25);

    if (typed.length < message.length) {
      let nextChar = message.charAt(typed.length);

      if (frameCount % 5 === 0) {
        typed += nextChar;
      }
    }
  }
}

function mousePressed() {
  image(house1, width / 6, height / 12);
}
