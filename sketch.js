var garden,rabbit;
var gardenImg,rabbitImg;
var Apples
var leaves
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  ApplesImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
 
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);

 
 
  rabbit.x=World=mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));

  if (frameCount % 80 === 0){
    if( select_sprites == 1){
      createApples()
    }
  else{
    createleaves()
  }
  }

 
  drawSprites();

}

function createApples(){
  Apples=createSprite(random(50,350),40,10,10);
  Apples.addImage(ApplesImg);
  Apples.scale=0.075;
  Apples.velocityY=2;
  Apples.lifetime=150;
}
function  createleaves(){
  leaves = createSprite(random(50,350),40,10,10);
  leaves.addImage(leavesImg);
  leaves.scale=0.075;
  leaves.velocityY=2;
  leaves.lifetime=150;
}