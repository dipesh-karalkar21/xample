
var player;
var score=0;
var wormGroup;

function preload(){
  wormimage=loadImage("images/chocolate.png");
  playerimage=loadImage("images/boy.png");
  bgimage=loadImage("images/bg.jpg");
}
function setup() {
createCanvas(600,600);
bgsprite=createSprite(300,300);
bgsprite.addImage(bgimage);
bgsprite.scale=4.0
player = createSprite(40,550,30,30); 
player.scale=0.5;
player.addImage(playerimage);
wormGroup= new Group();
}

function draw() {
background("black");  

player.x= mouseX;
player.y= mouseY;


generateWorms();

for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }

  drawSprites();
  textSize(20);
  text("Worms destroyed: "+score,350,50);
}

function generateWorms(){
if(frameCount % 30===0){
  console.log(frameCount);
  var worm = createSprite(random(40,380),random(200,400),40,5);
  worm.scale=random(0.1,0.3)
  worm.addImage(wormimage);
  worm.velocityX=random(-4,4);
  worm.velocityY=random(-4,4);
  wormGroup.add(worm);

  }
}
