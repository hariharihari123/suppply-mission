var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var supply,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("black")


	engine = Engine.create();
	world = engine.world;

	var supply_options = {
		restitution : 0.7
		}
		supply = Bodies.circle(400,200,40,supply_options);
		World.add(world,supply);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width,10,{isStatic:true} );
	 World.add(world,ground);
	 
	
	 Matter.Body.setStatic(supply,true);
	Engine.run(engine);

}


function draw() {
	if (keyDown("DOWN_ARROW")){
      Matter.Body.setStatic(supply,false);
	  }
  rectMode(CENTER);
  background(0);
  ellipse(supply.position.x,supply.position.y,40);
  packageSprite.x= supply.position.x 
  packageSprite.y= supply.position.y
  drawSprites();
  keyPressed();
}
function keyPressed(){
}


