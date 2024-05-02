let message1 = "everything about us";
let typed1 = "";

let message2 = "fathom them at all";
let typed2 = "";

let mind1;
let mind2;
let font;
let closedmind1;
let closedmind2;
let bgimg;

function preload() {
  mind1 = loadImage("mind1.png");
  mind2 = loadImage("mind2.png");
  font = loadFont("LeagueScript-Regular.ttf");
  closedmind1 = loadImage("closedmind1.png");
  closedmind2 = loadImage("closedmind2.png");
  bgimg = loadImage("sizedpinknotebookpaper.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(bgimg, 0, 0, windowWidth, windowHeight);

  fill("black");
  textFont(font);
  textSize(50);

  if (mouseIsPressed) {
    text("and that they knew", width / 6.5, height / 7.25);

    text("though we couldn't", width - width / 2.65, height / 7.25);
    image(mind1, -width / 14, height - height / 1.2);
    image(mind2, width - width / 1.7, height - height / 1.2);

    text(typed1, width / 17, height - height / 4.2);

    if (typed1.length < message1.length) {
      let nextChar1 = message1.charAt(typed1.length);

      if (frameCount % 5 === 0) {
        typed1 += nextChar1;
      }
    }
    text(typed2, width - width / 2.75, height - height / 4.2);

    if (typed2.length < message2.length) {
      let nextChar2 = message2.charAt(typed2.length);

      if (frameCount % 5 === 0) {
        typed2 += nextChar2;
      }
    }
  } else {
    text("and that they knew", width / 6.5, height / 7.25);

    text("though we couldn't", width - width / 2.65, height / 7.25);

    image(closedmind1, -width / 14, height - height / 1.2);
    image(closedmind2, width - width / 1.7, height - height / 1.2);
  }
}
