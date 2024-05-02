let house;
let deathhouse;
let fire;
let font;
let fade;
let fadeAmount = 1;
let bgimg;

function preload() {
  house = loadImage("interactivehouse.png");
  font = loadFont("LeagueScript-Regular.ttf");
  deathhouse = loadImage("deathhouse.png");
  fire = loadImage("fire.png");
  bgimg = loadImage("sizedpinknotebookpaper.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(bgimg, 0, 0, windowWidth, windowHeight);
  image(house, width / 6, height / 12);
  fade = 0;
}

function draw() {
  fill("black");
  textFont(font);
  textSize(50);
  text("that they understood love", width / 6, height / 7.25);
  text("and even death.", width - width / 3, height / 7.25);
}
function mousePressed() {
  tint(255, fade);
  image(deathhouse, width / 6, height / 12);
  image(fire, 0, 0);
  if (fade < 0) fadeAmount = 10;

  if (fade > 255) fadeAmount = -10;

  fade += fadeAmount;
  print(fade);
}
