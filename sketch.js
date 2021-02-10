
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var balld;
var ground;
var b1, b2, b3;

function preload(){

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	balld = new Ball(200,200);
	ground = new Ground(200,height,1200,20);
	b1 = new Trash(400,650,50,100);

	Engine.run(engine);
}


function draw() {
	Engine.update(engine);
 	background(200);

  	balld.display();
  	ground.display();
  	b1.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(balld.body, balld.body.position,{x:85, y:-85})
	}
}


