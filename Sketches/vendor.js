function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
  
    // These variables control the size of the pumpkin.
    // Try changing them!
    const pumpkinCenterX = width / 2;
    const pumpkinCenterY = height / 2;
    const pumpkinWidth = 400;
    const pumpkinHeight = 200;
  
    // gray background
    background(100);
  
    // stem
    stroke(0, 160, 0);
    strokeWeight(20);
  
    // The stem is based on the size of the pumpkin!
    // It starts at the top of the pumpkin
    // and goes up and to the left.
    // If this looks confusing, try changing the values
    // to see what happens!
    line(pumpkinCenterX,
      pumpkinCenterY - pumpkinHeight * .5,
      pumpkinCenterX - pumpkinWidth * .25,
      pumpkinCenterY - pumpkinHeight * .75);
  
    // orange
    fill(255, 100, 0);
    stroke(0, 100);
    strokeWeight(3);
  
    // pumpkin
    ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth, pumpkinHeight);
    ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth * .75, pumpkinHeight);
    ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth * .5, pumpkinHeight);
    ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth * .25, pumpkinHeight);
  }