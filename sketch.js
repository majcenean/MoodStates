/*************************************************************************
   Mood Shapes
          by Maj Jenkins

    Overview:
    Testing setting up the localhost.
 
    ---------------------------------------------------------------------
    Notes: 
     (1)
**************************************************************************/


/*************************************************************************
// Global variables
**************************************************************************/

var gDebugMode = false;
var w = 200;
var h = 200;



/*************************************************************************
// Window resize
**************************************************************************/

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/*************************************************************************
// Function preload
**************************************************************************/
let unknowable;
let cloudy;
let vessel;
let ocean;
let outside;

function preload() {
  unknowable = loadImage('assets/unknowable.png');
  cloudy = loadImage('assets/cloudy.png');
  vessel = loadImage('assets/vessel.png');
  ocean = loadImage('assets/ocean.png');
  outside = loadImage('assets/outside.png');
}

/*************************************************************************
// Function setup
**************************************************************************/

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
 }

/*************************************************************************
// Function draw
**************************************************************************/

function draw() {
  background('#B7CCD5');
  fill('#fff');
  stroke('#fff');

  image(unknowable, 7*(width/8), height/4, w, h);
  image(cloudy, width/3, height/3, w, h);
  image(vessel, 3*(width/4), height - w*1, w*1.5, h*1.5);
  image(ocean, 1*(width/5), height/1.5, w*3, h*3);
  image(outside, 2*(width/3), height/3, w, h);


  // Fullscreen "Press [F] to fullscreen"
  fsMessage();

	// Toggle debug Mode
  if( gDebugMode == true ) {
    drawDebugInfo();
  }

}


/*************************************************************************
// Custom functions
**************************************************************************/





/*************************************************************************
// Fullscreen and debug functions
**************************************************************************/

// Fullscreen message
function fsMessage() {
  // if (fs === true) {
      push();
      fill(255);
      noStroke();
      textSize(width/60);
      textAlign(LEFT);
      text("Press [F] for fullscreen", 0 + width/100 , height - height/100)
      pop();
    // }
}

// Get coordinates from click (dsable background)
function mouseClicked() {
    print(mouseX, mouseY);
    fill(205);
    ellipseMode(CENTER);
    ellipse(mouseX, mouseY, 5, 5);
}

// Debug mode
function drawDebugInfo() {
  push();
    fill(255);
    noStroke();
    textSize(20);
    text("X: " + mouseX + "   Y: " + mouseY, 20, 20);
  pop();
}

// keyTyped for debugMode and fullscreen
function keyTyped() {
  if (key === 'd') {
    gDebugMode = !gDebugMode;
  }
  if (key === 'f') {
    let fs = fullscreen();
    fullscreen(!fs);
  }
 }