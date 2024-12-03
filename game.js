let x= 100;
let y= 100;

let goalX = x + 630;
let goalY = y + 160;
let goalWidth = 60;
let goalHeeight = 75;

let gameState = "playing";

function setup() {
  createCanvas(800, 600);
  noStroke();
  //grass background
  background(207,196,97);
}


//classes
class bush {
  
      push();
      fill(0, 255, 0);
      rect(x * tileSize_X, y * tileSize_Y, tileSize_X, tileSize_Y);
      strokeWeight(20);
      angleMode(DEGREES);
      pop();
  
}

class ground {
  
      push();
      fill(150, 121, 105);
      rect(x * tileSize_X, y * tileSize_Y, tileSize_X, tileeSize_Y);
      strokeWeight(20);
      angleMode(DEGREES);
      pop();
  }
//map arrays

let map = [
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

];

const tileSize_X = 32;
const tileSize_Y = 32;

function bear() {

  //bear body light
  push();
  translate(x - 44, y + 195);
  fill(139, 86, 33);
  ellipse(0, 0, 34, 38);
  pop();


    //bear arms
    push();
    translate(x - 36, y + 180);
    fill(77, 47, 17);
    ellipse(0, 0, 16, 11);
    pop();

    push();
    translate(x - 36, y + 209);
    fill(77, 47, 17);
    ellipse(0, 0, 16, 11);
    pop();

  //bear head
  push();
  translate(x - 50, y + 195);
  fill(102, 51, 0);
  ellipse(0, 0, 30, 40);
  pop();
  
  //bear ears
  push();
  translate(x - 61, y + 184);
  fill(102, 51, 0);
  ellipse(0, 0, 15, 15);
  pop();

  push();
  translate(x - 61, y + 206);
  fill(102, 51, 0);
  ellipse(0, 0, 15, 15);
  pop();

   //bear nose
 push();
 translate(x - 36, y + 195);
 fill(0);
 ellipse(0, 0, 8, 10);
 pop();

    //bear eyes
    push();
    translate(x - 46, y + 187);
    fill(0);
    ellipse(0, 0, 5, 5);
    pop();

    push();
    translate(x - 46, y + 203);
    fill(0);
    ellipse(0, 0, 5, 5);
    pop();

}

function trap() {
  //trap 1
  push();
  translate(x + 202, y + 100);
  fill(192, 192, 192);
  ellipse(0, 0, 25, 14);
  pop();

  push();
  translate(x + 202, y + 100);
  noFill();
  stroke(64, 64, 64);
  strokeWeight(3);
  ellipse(0, 0, 25, 14);

  pop();

  //trap 2
  push();
  translate(x + 289, y + 343);
  fill(192, 192, 192);
  ellipse(0, 0, 25, 14);
  pop();

  push();
  translate(x + 289, y + 343);
  noFill();
  stroke(64, 64, 64);
  strokeWeight(3);
  ellipse(0, 0, 25, 14);
  pop();

  //trap 3
  push();
  translate(x + 29, y + 315);
  fill(192, 192, 192);
  ellipse(0, 0, 25, 14);
  pop();

  push();
  translate(x + 29, y + 315);
  noFill();
  stroke(64, 64, 64);
  strokeWeight(3);
  ellipse(0, 0, 25, 14);
  pop();

  //trap 4
  push();
  translate(x + 460, y + 80);
  fill(192, 192, 192);
  ellipse(0, 0, 25, 14);
  pop();

  push();
  translate(x + 460, y + 80);
  noFill();
  stroke(64, 64, 64);
  strokeWeight(3);
  ellipse(0, 0, 25, 14);
  pop();

  //trap 5
  push();
  translate(x + 573, y + 367);
  fill(192, 192, 192);
  ellipse(0, 0, 25, 14);
  pop();

  push();
  translate(x + 573, y + 367);
  noFill();
  stroke(64, 64, 64);
  strokeWeight(3);
  ellipse(0, 0, 25, 14);
  pop();
}

function startScreen() {
  //background
  push();
  fill(135, 206, 235);
  rect(0, 0, 800, 600);
  pop();

  //Game title 
  push();
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  textFont('monospace');
  textStyle(BOLDITALIC);
  text("BEARBERRY CHASE", 400, 100);
  pop();

  //push button bar
  push();
  fill(135, 136, 265);
  rect(280, 240, 230, 60, 20);
  pop();

  push();
  fill(135, 136, 265);
  rect(280, 340, 230, 60, 20);
  pop();

  //start button text
  push();
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  textFont('helvetica');
  textStyle(BOLD);
  text("PLAY", 393, 274);
  pop();
}

function gameWin() {
  //background 
  push();
  fill(135, 206, 235);
  rect(0, 0, 800, 600);
  pop();

  //Win feedback text
  push();
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  textFont('monospace');
  textStyle(BOLDITALIC);
  text("YOU FOUND ALL THE BERRIES!", 400, 100);
  pop();

  push();
  fill(255);
  textSize(25);
  textAlign(CENTER, CENTER);
  textFont('monospace');
  textStyle(BOLD);
  text("Can you beat your time next round?", 400, 170);
  pop();

}

function gameLose() {
  //background
  push();
  fill(135, 206, 235);
  rect(0, 0, 800, 600);
  pop();

  //Lose feedback text
  push();
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  textFont('monospace');
  textStyle(BOLDITALIC);
  text("Better luck next time...", 400, 100);
  pop();

}

function goal() {
  //game ends when player steps on the ground 

  push();
translate(x + 630, y + 160);
fill(120, 121, 105);
rect(0,0, 60, 75);
pop();

}

function restart() {
  //restart button bar
  push();
  fill(135, 136, 265);
  rect(280, 240, 230, 60, 20);
  pop();

  //restart text
  push();
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  textFont('helvetica');
  textStyle(BOLD);
  text("RETRY", 393, 274);
  pop();


}



function gamePlay() {
bear(x,y);
  if (keyIsDown(87)) { // 'W' key
    y -= 10;
  }
  if (keyIsDown(65)) { // 'A' key
    x -= 10;
  }
  if (keyIsDown(83)) { // 'S' key
    y += 10;
  }
  if (keyIsDown(68)) { // 'D' key
    x += 10;
  }
  


 
 

  //game ends when player is inside goal
  if (
    x + 44 > goalX && 
    x + 44 < goalX + goalWidth &&
    y + 195 > goalY && 
    y + 195 < goalY + goalHeight
  ) {
    gameState = "gameSucceeded";
}

}
  
function mouseClicked() {

  //click on start botton
  if (gameState === "start" && 
    mouseX > 280 &&
    mouseX < 510 &&
    mouseY > 240 &&
    mouseY < 300 
  ) {
  gameState = "playing";
  
  x = 100;
  y = 100;

} else if ((gameState === "gameOver" || gameState === "gameSucceeded") &&
    mouseX > 280 &&
    mouseX < 510 &&
    mouseY > 240 &&
    mouseY < 300 
  ) {
    gameState = "playing";

    x = 100;
    y = 100;
  }
  }



function draw() {
  background(207,196,97);
   
  goal(x,y);
  trap(x,y);

 

  
  //gameplay stages
  
  if (gameState === "start") {
    startScreen();
  } else if (gameState === "playing") {
    gamePlay();
  } else if (gameState === "gameOver") {
    gameLose();
    restart();
  } else if (gameState === "gameSucceeded") {
    gameWin();
    restart();
  }

 
}