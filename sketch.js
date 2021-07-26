const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var world, engine
var ground
var particle=[]
var division = []
var divisionHeight = 300
var plinko = []

function setup() {
  createCanvas(480,800);

  engine = Engine.create()
  world = engine.world
  
  ground = new Ground(240, 795, 480, 10)

  for( var b = 0; b <= width; b = b+80){

    division.push(new Divisions(b, height-divisionHeight/2, 10, divisionHeight))
  }

  for(var t = 15; t <= width; t = t+50){
    plinko.push(new Plinko(t, 55))
  }

  for(var t = 40; t <= width; t = t+50){
    plinko.push(new Plinko(t, 155))
  } 

  for(var t = 15; t <= width; t = t+50){
    plinko.push(new Plinko(t, 255))
  } 

  for(var t = 40; t <= width; t = t+50){
    plinko.push(new Plinko(t, 355))
  } 

  for(var t = 15; t <= width; t = t+50){
    plinko.push(new Plinko(t, 455))
  } 
}


function draw() {
  background("black"); 

 Engine.update(engine)
  
  ground.display()

 for(var n=0; n<division.length; n++){
   division[n].display()
 }

 for(var t = 0; t < plinko.length; t++ ){
   plinko[t].display()
 }

 if(frameCount%60 === 0){
  particle.push(new Particles(random(width/2-125, width/2+125), 10, 10))
}

 for(var h = 0; h < particle.length; h++ ){
  particle[h].display()
 }

 //console.log(particle)

  drawSprites();
}
