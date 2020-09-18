//create all variables
var bkgrnd;
var rbimage,rb;
var gbimage,gb;
var bbimage,bb;
var pbimage,pb;
var bowimage,bow;

var arrowgroup,rbgroup,gbgroup,bbgroup,pbgroup;

var score=0;


function preload(){
 //load images 
 bkgrndimage=loadImage("background0.png");
 rbimage=loadImage("red_balloon0.png");
 gbimage=loadImage("green_balloon0.png");
 bbimage=loadImage("blue_balloon0.png");
 pbimage=loadImage("pink_balloon0.png");
 bowimage=loadImage("bow0.png");
 arrowimage=loadImage("arrow0.png");

}

function setup() {
  //create canvas
  createCanvas(600, 600);
  
  //create background
  bkgrnd=createSprite(300,50,600,600);
  bkgrnd.addImage("bkrunning", bkgrndimage);
  bkgrnd.scale=3;
 
  //bow
  bow=createSprite(550,300,30,30);
  bow.addImage("bowpic",bowimage);
  arrowgroup= new Group();
  rbgroup=new Group();
  gbgroup=new Group();
  bbgroup=new Group();
  pbgroup=new Group();
}

function draw() {
  background("white");
  
  
  
  //make background move 
  bkgrnd.velocityX=-3;
  if(bkgrnd.x<0)
  {bkgrnd.x=bkgrnd.width/2;}
  
  //make bow move up and down
  bow.y=mouseY;
  
  arrow();
  
  var rand=Math.round(random(1,4));
  
  switch(rand)
  {
    case 1: spawnRedBalloons();
      break;
    case 2: spawnGreenBalloons();
      break;
    case 3: spawnBlueBalloons();
      break;
    case 4: spawnPinkBalloons();
      break;
      default: break;
  }

  if(arrowgroup.isTouching(rbgroup)){
    score=score+1;
    rbgroup.destroyEach(); 
    arrowgroup.destroyEach();
  
  }
  
  if(arrowgroup.isTouching(gbgroup)){
    score=score+2;
    gbgroup.destroyEach(); 
    arrowgroup.destroyEach();
  
  }
  
  if(arrowgroup.isTouching(bbgroup)){
    score=score+3;
    bbgroup.destroyEach(); 
    arrowgroup.destroyEach();
  
  }
  
  if(arrowgroup.isTouching(pbgroup)){
    score=score+4;
    pbgroup.destroyEach(); 
    arrowgroup.destroyEach();
  
  }
 
 
  // display all sprites   
  drawSprites();
  
  textSize(20);
  text("Score:"+score, 270,30);
 
}

function arrow()
{
  arr=createSprite(550,bow.y,30,30);
  arr.addImage("arrow", arrowimage);
  arr.visible=false;
  arr.lifetime=80;
  arrowgroup.add(arr);

  if(keyDown("space"))
       {
     arr.visible=true;
     arr.velocityX=-8;
     arr.scale=0.4;
     }
}

function spawnRedBalloons()
{
  if(frameCount%80===0)
  {
    rand=Math.round(random(50,400));
    var rb=createSprite(0,rand,20,20)
    rb.addImage("redballoon", rbimage);
    rb.scale=0.1;
    rb.velocityX=3;
    rb.lifetime=205;
    rbgroup.add(rb);
    
  }


}

function spawnGreenBalloons()
{
  if(frameCount%80===0)
  {
    rand=Math.round(random(50,400));
    var gb=createSprite(0,rand,20,20)
    gb.addImage("greenballoon", gbimage);
    gb.scale=0.1;
    gb.velocityX=3;
    gb.lifetime=205;
    gbgroup.add(gb);
  }


}

function spawnBlueBalloons()
{
  if(frameCount%80===0)
  {
    rand=Math.round(random(50,400));
    var bb=createSprite(0,rand,20,20)
    bb.addImage("blueballoon", bbimage);
    bb.scale=0.1;
    bb.velocityX=3;
    bb.lifetime=205;
    bbgroup.add(bb);
  }


}

function spawnPinkBalloons()
{
  if(frameCount%80===0)
  {
    rand=Math.round(random(50,400));
    var pb=createSprite(0,rand,20,20)
    pb.addImage("pinkballoon", pbimage);
    pb.scale=1.2;
    pb.velocityX=3;
    pb.lifetime=205;
    pbgroup.add(pb);
  }


}

