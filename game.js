let x= 100;
let y= 100;

function setup() {
  createCanvas(800, 600);
  noStroke();
  //grass green background
  background(207,196,97);
}

function maze(x,y) {
//dirt floor
push();
translate(100, 100);
fill(150, 121, 105);
rect(0,0, 600, 400);
pop();

//bush maze FRAME
push();
translate(x-10, y+ 390);
stroke(91, 153, 90);
strokeWeight(30);
angleMode(DEGREES);
rotate(-10);
line(0, 0, 570, 100);
pop();

push();
translate(100, 490);
stroke(91, 153, 90);
strokeWeight(30);
angleMode(DEGREES);
rotate(-132);
line(0, 0, 110, 100);
pop();

push();
translate(100, 250);
stroke(91, 153, 90);
strokeWeight(30);
angleMode(DEGREES);
rotate(-132);
line(0, 0, 110, 100);
pop();

push();
translate(110, 100);
stroke(91, 153, 90);
strokeWeight(30);
angleMode(DEGREES);
rotate(-10);
line(0, 0, 570, 100);
pop();

push();
translate(700, 250);
stroke(91, 153, 90);
strokeWeight(30);
angleMode(DEGREES);
rotate(-132);
line(0, 0, 110, 100);
pop();

push();
translate(700, 490);
stroke(91, 153, 90);
strokeWeight(30);
angleMode(DEGREES);
rotate(-132);
line(0, 0, 110, 100);
pop();

//bush maze INSIDE

push();
translate(190, 410);
stroke(91, 153, 90);
strokeWeight(30);
angleMode(DEGREES);
rotate(-123);
line(0, 0, 30, 20);
pop();

push();
translate(190, 410);
stroke(91, 153, 90);
strokeWeight(30);
angleMode(DEGREES);
rotate(-33);
line(0, 0, 30, 20);
pop();

push();
translate(230, 465);
stroke(91, 153, 90);
strokeWeight(30);
angleMode(DEGREES);
rotate(-143);
line(0, 0, 40, 50);
pop();

}



function draw() {
  background(207,196,97);
  maze(); 
}