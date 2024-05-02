let font;

let bgimg;

function preload() {
  font = loadFont("LeagueScript-Regular.ttf");
  bgimg = loadImage("sizedpinknotebookpaper.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(bgimg, 0, 0, windowWidth, windowHeight);
}

function draw() {
  textFont(font);
  textSize(50);

  text(
    "This interactive web project is based off of a passage",
    width / 7,
    height / 5
  );
  text(
    "from'The Virgin Suicides' by Jeffrey Eugenides.",
    width / 5.5,
    height / 3.85
  );
  text(
    "This project follows the journey of the Lisbon",
    width / 5.5,
    height / 2.6
  );
  text(
    "sisters through their suburbian suffocation and ",
    width / 6,
    height / 2.25
  );
  text(
    "eventual suicides, observed by the neighboring boys.",
    width / 7,
    height / 1.95
  );
  text(
    "Through their naive male gaze, we get a glimpse ",
    width / 6,
    height / 1.58
  );
  text(
    "into the indifference of the boys as they watch the",
    width / 6.5,
    height / 1.43
  );
  text("girls descend into self-destruction.", width / 4, height / 1.32);
}
