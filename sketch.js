
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 550);
	 
	engine = Engine.create();
	world = engine.world;

    
	//Create the Bodies Here.

	ground = new Ground(400,500,width,20);
	dustbin = new Dustbin(200,300,width,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  dustbin.display();

  drawSprites();
 
}



