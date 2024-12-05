let x= 100;
let y= 100;


let goalX = x + 630;
let goalY = y + 160;
let goalWidth = 60;
let goalHeight = 75;

let gameState = "start";

function setup() {
  createCanvas(800, 600);
  noStroke();
  //grass background
  background(207,196,97);
}


//classes
class Bear {
  

  constructor(x,y) {
    this.x = 0;
    this.y = 290;
  }

  //bear movement in x- positions
  moveX(x) {

    const newX = this.x + x;
    if (this.colide(newX, this.y) === false) {
      this.x = newX;
    }
    
  }

  //bear movement in y- positions
  moveY(y) {
    const newY = this.y + y;

    if (this.colide(this.x, newY) === false) {
      this.y = newY;
    }

  }

  colide(x, y){

    let c1 = map[Math.floor(y / 32)][Math.floor(x / 32)];
    let c2 = map[Math.floor(y / 32)][Math.floor((x + bearHitboxX) / 32)];
    let c3 = map[Math.floor((y + bearHitboxY) / 32)][Math.floor(x / 32)];
    let c4 = map[Math.floor((y + bearHitboxY) / 32)][Math.floor((x + bearHitboxX) / 32)];
    

    
		if ([c1,c2,c3,c4].includes(2)){
			
			console.log("start!");
		}
    return [c1, c2, c3, c4].some(value => blockedTiles.includes(value));
  }

  draw() {
    push();
  fill(0, 255, 0);
  rect(this.x, this.y, bearHitboxX, bearHitboxY);
  strokeWeight(20);
  angleMode(DEGREES);
  pop();

  //bear body light
  push();
  translate(this.x - 8 + bearOffsetX, this.y + 15 + bearOffsetY);
  fill(139, 86, 33);
  ellipse(0, 0, 34, 38);
  pop();


  //bear arms
  push();
  translate(this.x + bearOffsetX, this.y + bearOffsetY);
  fill(77, 47, 17);
  ellipse(0, 0, 16, 11);
  pop();

  push();
  translate(this.x + bearOffsetX, this.y + 29 + bearOffsetY);
  fill(77, 47, 17);
  ellipse(0, 0, 16, 11);
  pop();

  //bear head
  push();
  translate(this.x - 14 + bearOffsetX, this.y + 15 + bearOffsetY);
  fill(102, 51, 0);
  ellipse(0, 0, 30, 40);
  pop();

  //bear ears
  push();
  translate(this.x - 25 + bearOffsetX, this.y + 4 + bearOffsetY);
  fill(102, 51, 0);
  ellipse(0, 0, 15, 15);
  pop();

  push();
  translate(this.x - 25 + bearOffsetX, this.y + 26 + bearOffsetY);
  fill(102, 51, 0);
  ellipse(0, 0, 15, 15);
  pop();

  //bear nose
  push();
  translate(this.x + bearOffsetX, this.y + 15 + bearOffsetY);
  fill(0);
  ellipse(0, 0, 8, 10);
  pop();

  //bear eyes
  push();
  translate(this.x - 10 + bearOffsetX, this.y + 7 + bearOffsetY);
  fill(0);
  ellipse(0, 0, 5, 5);
  pop();

  push();
  translate(this.x - 10 + bearOffsetX, this.y + 23 + bearOffsetY);
  fill(0);
  ellipse(0, 0, 5, 5);
  pop();

  }
}

const bear = new Bear(64, 64);


class bush {
  constructor(x, y){
      push();
      fill(0, 255, 0);
      rect(x * tileSize_X, y * tileSize_Y, tileSize_X, tileSize_Y);
      strokeWeight(20);
      angleMode(DEGREES);
      pop();
  }
}

class ground {
  constructor(x,y) {
      push();
      fill(150, 121, 105);
      rect(x * tileSize_X, y * tileSize_Y, tileSize_X, tileSize_Y);
      strokeWeight(20);
      angleMode(DEGREES);
      pop();
  }
}

class start {
  constructor(x, y){
      push();
      fill(150, 191, 105);
      rect(x * tileSize_X, y * tileSize_Y, tileSize_X, tileSize_Y);
      strokeWeight(20);
      angleMode(DEGREES);
      pop();
  }
}

class goal {
  constructor(x, y){
      push();
      fill(25, 25, 25);
      rect(x * tileSize_X, y * tileSize_Y, tileSize_X, tileSize_Y);
      strokeWeight(20);
      angleMode(DEGREES);
      pop();
  }
}



//map 2D arrays

let map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 3],
  [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1],
  [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const tileSize_X = 32;
const tileSize_Y = 32;

 

function maze() {

  for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
          if(map[i][j] === 0)
          {
              new ground(j, i);
          }
          if(map[i][j] === 1)
          {
              new bush(j, i);
          }
          if(map[i][j] === 2)
          {
              new start(j, i);
          }
          if(map[i][j] === 3)
          {
              new goal(j, i);
          }
      }
  }
}

//bear hitbox collision detector 
const bearOffsetX = 24;
const bearOffsetY = 0;
const bearHitboxX = 28;
const bearHitboxY = 28;

const safeTiles = [0, 2, 3];
const blockedTiles = [1];


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
  
  let newX = x;
  let newY = y;

  if (keyIsDown(87)) { // 'W' key
        bear.moveY(-5);
    }
    if (keyIsDown(65)) { // 'A' key
        bear.moveX(-5);
    }
    if (keyIsDown(83)) { // 'S' key
        bear.moveY(5);
    }
    if (keyIsDown(68)) { // 'D' key
        bear.moveX(5);
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
  maze(x, y);

  bear.draw();
  

 

  
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