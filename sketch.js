var hr,mn,sc;

function setup(){
  createCanvas(800,800);
  angleMode(DEGREES);  
}

function draw(){
  background(0);
  
  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(6);  
  noFill();

  stroke("yellow");
  var mysecond = map(sc,0,60,0,360);
  arc(400,300,500,500,0, mysecond);

  stroke("red");
  var myminute = map(mn,0,60,0,360);
  arc(400,300,480,480,0, myminute);

  stroke("blue");
  var myhour = map(hr %12,0,12,0,360);
  arc(400,300,460,460,0, myhour);

  fill("coral");
  noStroke();
  textSize(75);
  text(hr + ':' + mn + ':' + sc,260,700);

  fill("lightBlue");
  textSize(35);
  text("Time is Tickining",285,50);
}