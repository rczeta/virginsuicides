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
    "This interactive web project is based off of the",
    width / 7,
    height / 4.75
  );
  text(
    "novel 'The Virgin Suicides' by Jeffrey Eugenides.",
    width / 7,
    height / 3.85
  );
  text(
    "This project follows the journey of the Lisbon",
    width / 6,
    height / 2.4
  );
  text(
    "sisters through their suburbian suffocation and ",
    width / 7,
    height / 2.15
  );
  text(
    "eventual suicides, observed by neighboring boys.",
    width / 6.75,
    height / 1.925
  );
  text(
    "Through their naive male gaze, we get a glimpse ",
    width / 7,
    height / 1.5
  );
  text(
    "into the indifference of the boys as they watch",
    width / 6.5,
    height / 1.38
  );
  text("the girls descend into self-destruction.", width / 5, height / 1.29);
}
