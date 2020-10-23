var hr , mine ,sec;
var end1 , end2 , end3 ;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(0);
  translate(200,200,0);
  hr = hour();
  mine = minute();
  sec =second();
  push();
  fill(255);
  text(hr+":"+mine+":"+sec,-150,-150);
  pop();

  push()
  noFill()
  stroke(255,0,0);
  strokeWeight(7);
  end1 = map(hr,0,12,0,360);
  arc(0,0,300,300,-90,end1-90);
  rotate(end1);
  line(0,-50,0,0);
  pop();
  push();
  noFill();
  stroke(0,0,255);
  strokeWeight(6);
  end2 = map(mine,0,60,0,360);
  arc(0,0,307,307,-90,end2-90);
  rotate(end2)
  line(0,-100,0,0);
  pop();
 
  push()
  noFill()
  stroke(0,255,0)
  strokeWeight(3)
  end3 = map(sec,0,60,0,360)
  arc(0,0,311,311,-90,end3-90)
  rotate(end3);
  line(0,0,0,-100);
  pop()
  push()
  strokeWeight(10)
  stroke(255)
  fill(255)
  point(0,0)
  pop()
  
}