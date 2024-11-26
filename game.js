let x= 100;
let y= 100;

function setup() {
  createCanvas(800, 600);
  noStroke();
  //grass green background
  background(207,196,97);
}

function maze() {
//dirt floor
push();
translate(x, y);
fill(150, 121, 105);
rect(0,0, 600, 400);
pop();

//bush maze FRAME
push();
translate(x + 10, y + 390);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-10);
line(0, 0, 570, 100);
pop();

push();
translate(x, y + 390);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-132);
line(0, 0, 110, 100);
pop();

push();
translate(x, y + 150);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-132);
line(0, 0, 110, 100);
pop();

push();
translate(x + 10, y);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-10);
line(0, 0, 570, 100);
pop();

push();
translate(x + 600, y + 150);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-132);
line(0, 0, 110, 100);
pop();

push();
translate(x+ 600, y + 390);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-132);
line(0, 0, 110, 100);
pop();

//bush maze INSIDE

//vertical bushes

push();
translate(x + 90, y + 310);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-123);
line(0, 0, 30, 20);
pop();

push();
translate(x + 130, y + 315);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(38);
line(0, 0, 39, 50);
pop();

push();
translate(x + 90, y + 175);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(57);
line(0, 0, 30, 20);
pop();

push();
translate(x + 170, y + 205);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(85);
line(0, 0, 50, 5);
pop();

push();
translate(x + 210, y + 261);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(88);
line(0, 0, 123, 5);
pop();

push();
translate(x + 130, y + 115);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(77);
line(0, 0, 20, 5);
pop();

push();
translate(x + 230, y + 10 );
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(89);
line(0, 0, 190, 5);
pop();

push();
translate(x + 300, y + 60 );
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(89);
line(0, 0, 200, 5);
pop();

push();
translate(x + 270, y + 261);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(84);
line(0, 0, 53, 5);
pop();

push();
translate(x + 370, y + 60 );
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(89);
line(0, 0, 260, 5);
pop();

push();
translate(x + 430, y + 280 );
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(81);
line(0, 0, 40, 5);
pop();

push();
translate(x + 490, y + 280 );
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(84);
line(0, 0, 40, 5);
pop();

push();
translate(x + 430, y  );
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(87);
line(0, 0, 100, 5);
pop();

push();
translate(x + 430, y + 160  );
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(85);
line(0, 0, 60, 5);
pop();


push();
translate(x + 490, y + 60 );
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(89);
line(0, 0, 160, 5);
pop();

push();
translate(x + 545, y + 60 );
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(89);
line(0, 0, 160, 5);
pop();

push();
translate(x + 545, y + 320 );
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(85);
line(0, 0, 60, 5);
pop();





//horizontal bushes
push();
translate(x + 90, y + 310);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-33);
line(0, 0, 30, 20);
pop();

push();
translate(x + 105, y + 194);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-50);
line(0, 0, 40, 50);
pop();

push();
translate(x + 170, y + 260);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-33);
line(0, 0, 30, 20);
pop();

push();
translate(x + 20, y + 110);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-2);
line(0, 0, 109, 5);
pop();

push();
translate(x + 60, y + 55);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-5);
line(0, 0, 100, 10);
pop();

push();
translate(x + 270, y + 260);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-25);
line(0, 0, 20, 10);
pop();

push();
translate(x + 270, y + 320);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-34);
line(0, 0, 30, 20);
pop();

push();
translate(x + 380, y + 280);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-34);
line(0, 0, 30, 20);
pop();

push();
translate(x + 390, y + 100);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-34);
line(0, 0, 30, 20);
pop();

push();
translate(x + 442, y + 320);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-34);
line(0, 0, 30, 20);
pop();

push();
translate(x + 440, y + 160);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-34);
line(0, 0, 30, 20);
pop();

push();
translate(x + 560, y + 150);
stroke(91, 153, 90);
strokeWeight(25);
angleMode(DEGREES);
rotate(-34);
line(0, 0, 30, 20);
pop();




}



function draw() {
  background(207,196,97);
  maze(); 
}