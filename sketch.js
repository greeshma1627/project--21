var bullet,wall
var speed,weight
var thickness = random(22,83);

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,10,50);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness, height/2);
  wall.shapeColor (80,80,80);
}

function draw() {
  background(0);  
 
  bullet.velocityX = speed;

  function hasCollided(bullet,wall)
  {
    bulletRightEdge= bullet.x + bullet.width;
    wallLeftEdge= wall.x;
    if(bulletRightEdge>= wallLeftEdge)
    {
      return true;
    }
    return false;

  }

  if(hasCollied(bullet,wall))
  {
    bullet.velosityX - 0;
    var damage= 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  }
    if(damage>10)
    {
      wall.shapeColor = color (255,0,0);
    }
      if(damge<10)
      {
        wall.shapeColor = color (0,255,0);
      }




  if(wall.x - bullet.x < (bullet.width + wall.width)/2)
  {
bullet.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22509;

if(deformation> 180)
{
  bullet.shapecolor = color(255,0,0);
}
if(deformation < 180 && deformation > 100)
{
  bullet.shapecolor =color  (230,230,0);
}
if(deformation<100)
{
  bullet.shapecolor = color(0,255,0);
}


 }
  drawSprites();
}