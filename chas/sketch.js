function setup() {
  createCanvas(512,512);
  stroke(0,255,0);
}

function draw() {
  background(0,40,40);
  //text(second(),100,100);
  //text(minute(),100,200);
  //text(hour(),100,300);
  translate(256,256);
  strokeWeight(20);
  point(0,0);
  strokeWeight(10);
  for(i=0;i<12;i++){
    rotate(PI/6);
    point(0,-200);}
  strokeWeight(2);
  rotate(second()*PI/30);
    line(0,0,0,-180);
  rotate(-(second()*PI/30))
  strokeWeight(5);
  rotate(minute()*PI/30);
    line(0,0,0,-150);
  rotate(-(minute()*PI/30));
  strokeWeight(10);
  rotate(hour()*PI/6);
    line(0,0,0,-100);
}