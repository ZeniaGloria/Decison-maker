// References found at p5js.org

// Add your variables here



// initialize your program here


function setup() {
    createCanvas(500, 500);
    
}




// Essentially a repeat command
function draw() {
    background(50);



var r = 50;
var g = 150;
var b = 190;
var rectY = 0;

for (var i=0; i < 15; i++){
    
    fill(r, g, b);
    rect(0, rectY, 500, 500);
     rectY += 500/15;
     r += 14;
     b -= 10;
    
    fill(51);
    rect(225, 420, 60, 60);
 
}
}




