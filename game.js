let x= 100;
let y= 100;

let goalX = x + 630;
let goalY = y + 160;
let goalWidth = 60;
let goalHeeight = 75;

let gameState = "start";

function setup() {
  createCanvas(800, 600);
  noStroke();
  //grass green background
  background(207,196,97);
}

function ground() {

//left side start ground
push();
translate(x - 90, y + 160);
fill(150, 121, 105);
rect(0,0, 100, 75);
pop();

//right side end ground
push();
translate(x + 590, y + 160);
fill(150, 121, 105);
rect(0,0, 100, 75);
pop();

push();
translate(x, y);
fill(150, 121, 105);
rect(0,0, 600, 400);
pop();

}

function maze() {

//bush maze FRAME
push();
translate(x + 10, y + 390);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-10);
line(0, 0, 570, 100);
pop();

push();
translate(x, y + 390);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-132);
line(0, 0, 110, 100);
pop();

push();
translate(x, y + 150);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-132);
line(0, 0, 110, 100);
pop();

push();
translate(x + 10, y);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-10);
line(0, 0, 570, 100);
pop();

push();
translate(x + 600, y + 150);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-132);
line(0, 0, 110, 100);
pop();

push();
translate(x+ 600, y + 390);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-132);
line(0, 0, 110, 100);
pop();

//bush maze INSIDE

//vertical bushes

push();
translate(x + 90, y + 310);
stroke(91, 153, 90);
strokeWeight(15);
angleMode(DEGREES);
rotate(-123);
line(0, 0, 30, 20);
pop();

push();
translate(x + 130, y + 315);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(38);
line(0, 0, 39, 50);
pop();

push();
translate(x + 90, y + 175);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(57);
line(0, 0, 30, 20);
pop();

push();
translate(x + 170, y + 205);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(85);
line(0, 0, 40, 5);
pop();

push();
translate(x + 210, y + 261);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(88);
line(0, 0, 60, 5);
pop();

push();
translate(x + 130, y + 115);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(77);
line(0, 0, 20, 5);
pop();

push();
translate(x + 230, y + 10 );
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(89);
line(0, 0, 190, 5);
pop();

push();
translate(x + 300, y + 60 );
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(89);
line(0, 0, 200, 5);
pop();

push();
translate(x + 270, y + 261);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(84);
line(0, 0, 53, 5);
pop();

push();
translate(x + 370, y + 60 );
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(89);
line(0, 0, 260, 5);
pop();

push();
translate(x + 430, y + 280 );
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(81);
line(0, 0, 40, 5);
pop();

push();
translate(x + 490, y + 280 );
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(84);
line(0, 0, 40, 5);
pop();

push();
translate(x + 430, y  );
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(87);
line(0, 0, 100, 5);
pop();

push();
translate(x + 430, y + 160  );
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(85);
line(0, 0, 60, 5);
pop();


push();
translate(x + 490, y + 60 );
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(89);
line(0, 0, 160, 5);
pop();

push();
translate(x + 545, y + 60 );
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(89);
line(0, 0, 160, 5);
pop();

push();
translate(x + 545, y + 320 );
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(85);
line(0, 0, 60, 5);
pop();





//horizontal bushes
push();
translate(x + 90, y + 310);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-33);
line(0, 0, 30, 20);
pop();

push();
translate(x + 105, y + 194);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-50);
line(0, 0, 40, 50);
pop();

push();
translate(x + 170, y + 260);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-33);
line(0, 0, 30, 20);
pop();

push();
translate(x + 20, y + 110);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-2);
line(0, 0, 109, 5);
pop();

push();
translate(x + 60, y + 55);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-5);
line(0, 0, 100, 10);
pop();

push();
translate(x + 270, y + 260);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-25);
line(0, 0, 20, 10);
pop();

push();
translate(x + 270, y + 320);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-34);
line(0, 0, 30, 20);
pop();

push();
translate(x + 380, y + 280);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-34);
line(0, 0, 30, 20);
pop();

push();
translate(x + 390, y + 100);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-34);
line(0, 0, 30, 20);
pop();

push();
translate(x + 442, y + 320);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-34);
line(0, 0, 30, 20);
pop();

push();
translate(x + 440, y + 160);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-34);
line(0, 0, 30, 20);
pop();

push();
translate(x + 560, y + 150);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-34);
line(0, 0, 30, 20);
pop();

push();
translate(x + 10, y + 340);
stroke(91, 153, 90);
strokeWeight(20);
angleMode(DEGREES);
rotate(-34);
line(0, 0, 30, 20);
pop();





}

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
  ground();
  maze(x,y); 
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