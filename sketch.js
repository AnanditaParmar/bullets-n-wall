var bullet,wall;
var speed,weight;
var def;
var thickness;

function setup() {
  createCanvas(1200,400);
  bullet=createSprite(50, 200, 20, 10);
  bullet.shapeColor="white";
  wall=createSprite(1100,200,thickness,height/2);
  wall.shapeColor=rgb(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
}

function draw() {
  background("black");

  if(bullet.collide(wall))
  {
    def=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    bullet.velocityX=0;
    if(def<=10)
    {
      bullet.shapeColor="green";
    }
    
    if(def>10)
    {
      bullet.shapeColor="red";
    }
  }  
  drawSprites();
}