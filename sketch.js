function setup () {
createCanvas(windowWidth, windowHeight);
background(120, 0, 0);
}

function draw() {
if (mouseIsPressed) {
var size = random(5, 25);
fill( random(255), random(255));
ellipse(mouseX, mouseY, size, size);
}
if (keyIsPressed) frameRate(10);
else frameRate(60);
}