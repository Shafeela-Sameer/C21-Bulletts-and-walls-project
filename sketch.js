

var thickness,wall;
var bullet,bulletspeed, bulletweight;




function setup() {

  createCanvas(1600,400);
  
  // ceating wall with random thicknes
  thickness =random(22,83);
  wall= createSprite(1200, 200, thickness, height/2);
  wall.shapeColor= (80,80,80);

  // creating bullett with random speed and weight
  bulletspeed=random(223,321);
  bulletweight=random(30,52);
  bullet= createSprite(50, 200, 20, 10);
  bullet.shapeColor="white";
  
  // giving speed to bullet
  bullet.velocityX=bulletspeed;
  
}

function draw() {
  background(0);  
  bullet.depth=wall.depth;

  // collission of wall and bullett
  if (wall.x-bullet.x< bullet.width/2+wall.width/2){

    bullet.velocityX=0;
 
    // calculationg damage using formula
  var damage=(0.5*bulletweight*bulletspeed*bulletspeed) /(thickness*thickness*thickness);

  //stopping bullett from crossing into wall when collission occurs
    bullet.x=wall.x-(wall.width+bullet.width)/2;

    // changing color of wall based on damage
  if(damage>10){

    wall.shapeColor="red";
    } 

    else {

      wall.shapeColor="green";
    }

  }

  drawSprites();
}