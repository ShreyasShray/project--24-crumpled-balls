
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(650, 685, 100, 10);
	box2 = new Box(605, 665, 10, 50);
	box3 = new Box(695, 665, 10, 70);

	ground = new Ground(400, 695, 800, 10);

	ball = new Ball(100, 600, 10);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  box2.display();
  box3.display();
  ground.display();
  ball.display();
  keypressed();
  
  drawSprites();
 
}


function keypressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position,{x:5, y:-10});
	}
}
