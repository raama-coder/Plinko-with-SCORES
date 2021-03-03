const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var particlesLanded = [];
var plinkos = [];
var division = [];

var gameState = 1;
var playState = 1;
var endState = 0;
var particle
var divisionHeight = 300;
var score = 0;
var counter = 1;
var backgroundImg

function preload(){
  backgroundImg = loadImage("GameOver.png");
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  particle=new Particle(random(width/2-30, width/2+30), 10,10) 
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Divisions (k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    Engine.run(engine);
}
 


function draw() {
  if(gameState===playState){
    background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }
   for (var k = 0; k < division.length; k++) {
     division[k].display();
   }

 

  if(particle.body.position.y>=700){
    counter++
    console.log(counter);
    particlesLanded = particles
    for (var l = 0; l < particlesLanded.length; l++) {
      if (particlesLanded[l].body.position.x>=550 ){
        score+=50
      }
    if (particlesLanded[l].body.position.x>=350 && particlesLanded[l].body.position.x<=550 ){
      score+=100
      } 
      else (
        score+=0
      ) 
      }
    }
    if(counter>=100){
      gameState = endState
    }
  
}

    if(gameState === endState){
  background(backgroundImg);
  score=score
    }

  }

  function keyPressed(){
    if(keyCode===32){
      particle=new Particle(random(width/2-30, width/2+30), 10,10)
      particles.push(particle);
    }
  }
