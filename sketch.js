const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world;
var block1,block2,block3,block4,block5;
var ground;
var sling;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground=new Ground();
  block1= new Block(400,20);
  block2= new Block(420,40);
  block3 =new Block(440,60);
  block4= new Block(460,80);
  block5= new Block(480,120);

}


function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  drawSprites();

}