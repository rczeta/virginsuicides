let message1 = "the way it made your mind";
let typed1 = "";

let bgimg;
let mind2;
let font;
let closedmind2;

function preload() {
  mind2 = loadImage("mind2.png");
  font = loadFont("LeagueScript-Regular.ttf");
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
    let message = "active and dreamy";
    let typed = "";
    let spacing = 36;

    image(mind2, width / 6, height / 6);
    for (let i = 0; i < message.length; i++) {
      let x = mouseX + i * spacing;
      let y = mouseY + sin(frameCount * 0.1 + i) * 20;
      text(message.charAt(i), x, y);
    }

    text(typed1, width / 3.25, height / 6.25);

    // If the length of the typed text is less than the message length,
    // continue typing by adding the next character of the message
    if (typed1.length < message1.length) {
      let nextChar = message1.charAt(typed1.length);

      // Type one character every 5 frames
      if (frameCount % 5 === 0) {
        typed1 += nextChar;
      }
    }
  } else {
    image(closedmind2, width / 6, height / 6);
  }
}
