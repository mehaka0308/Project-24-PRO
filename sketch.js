
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  paper = new Paper(200,550,15);

  ground = new Ground(400,680,800,20);

  leftwall = new Dustbin(550,630,15,80);
  rightwall = new Dustbin(670,630,15,80);
  bottomwall = new Dustbin(610,662,140,15);

  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
   

  Engine.update(engine);

  paper.display();
  ground.display();
  leftwall.display();
  rightwall.display();
  bottomwall.display();
  
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position, {x:30, y: -30});
  }
}