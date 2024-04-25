let message = "imprisonment";
let typed = "";

let house;
let house1;
let font;
let fade = 0
let scenenum = 0

function preload() {
  house = loadImage("interactivehouse.png");
  font = loadFont("LeagueScript-Regular.ttf");
  house1 = loadImage("house1.png");
}


function setup() {
  createCanvas(1400, 870);
   background(220);
 
}

function draw() {
  fill("black");
  textFont(font);
  textSize(50);
  text("We felt the", 180, 110); 
  text("of being a girl.", 960, 800);
  image(house,225,100)
  
 if (mouseIsPressed)  {
    text(typed, 575, 160);
  
  if (typed.length < message.length) {
    let nextChar = message.charAt(typed.length);
    
    if (frameCount % 5 === 0) {
      typed += nextChar;}}
  
  }
    
  }

function mousePressed() {
    image(house1, 225, 100)
    
     
 
}


