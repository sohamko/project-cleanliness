var ground,wall1,wall2,wall3
var paper1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 300, 800, 10 , {isStatic:true} );
	wall1=new Wall(250,225,20,250);
	wall2=new Wall(292,283,150,20);
	wall3=new Wall(330,225,20,250);
	wall1.debug=true;
	wall2.debug=true;
	wall3.debug=true;

	
	World.add(world, ground);
	 
	 //create paper
	 paper1=new Paper(100,200);	
	
	Engine.run(engine);
  
}


function draw() {
	console.log(paper1.body.position.y)
  rectMode(CENTER);
  
  background(0);
  Engine.update(engine);
  //ground.display();
  paper1.display();
  wall1.display();
  wall2.display();
  wall3.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:20,y:-65})

}
	/*mouseX=paper1.body.position.x
	mouseY=paper1.body.position.y
Matter.Body.setPosition(paper1.body,{x: mouseX,y: mouseY})
//Matter.Body.translate(paper1.body,pos.x,pos.y)*/

}



