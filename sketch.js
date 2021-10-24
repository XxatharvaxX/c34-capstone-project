
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;

var stone;
var bgImage;
var ground;

var mangoOne, mangoTwo, mangoThree, mangoFour, mangoFive, mangoSix;

var arrow;


function preload()
{
  bgImage = loadImage("background.jpg");
}




function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

  stone = new Stone(350,400);

  mangoOne = new Mango(400,70);
  mangoTwo = new Mango(500,100);
  mangoThree = new Mango(450,150);
  mangoFour = new Mango(200,200);
  mangoFive = new Mango(100,50);
  mangoSix = new Mango(200,50);

  arrow = createImg('arrow-removebg-preview.png');
  arrow.position(200,450);
  arrow.size(70,70);



  ground_options = {
    isStatic: true
  };

  ground = Bodies.rectangle(0,550,600,50,ground_options);
  World.add(world,ground);
  
}


function draw() 
{
  background(bgImage);
  Engine.update(engine);

  stone.display();
  mangoOne.display();
  mangoTwo.display();
  mangoThree.display();
  mangoFour.display();
  mangoFive.display();
  mangoSix.display();
  rect(ground.position.x,ground.position.y,600,50);

}

function Throw()
{
  
}

