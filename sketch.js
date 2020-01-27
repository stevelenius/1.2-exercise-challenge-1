function setup() {
  createCanvas(800,600);
}

function draw() {
  if (mouseIsPressed) {
  	fill(255);
  	ellipse(mouseX, mouseY, 80, 80);
  } else {
  	fill(0);
  }
  
}