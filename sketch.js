var shooterstanding,shooterstandingImg,shooter_running,shooter,shooter_firring;
var jungle,jungleImg;
var button,buttonImg;
var jungle1,jungle1Img;
var bullet,bulletImg;
var bullet2,bullet2Img;
var gameState="START";
var firring;
var enemy,enemyfirringImg,enemy_firring,enemy2,enemy2Img;
var dead1,dead1Img,dead2,dead2Img;

function preload(){
 
buttonImg=loadImage("button.png");
bulletImg=loadImage("bullet.png");
enemy_firring=loadAnimation("enemy.png","enemyfirring.png");
enemyfirringImg=loadImage("enemy.png");
shooter_running = loadAnimation("shooter1.png","shooter2.png","shooter3.png","shooter4.png","shooter5.png","shooter6.png");
shooterstandingImg=loadImage("shooterstanding.png");
jungleImg=loadImage("jungle.jpg");
bullet2Img=loadImage("bullet2.png");
dead1Img=loadImage("dead1.png");
dead2Img=loadImage("dead2.png");
enemy2Img=loadImage("enemy2.png");
}
function setup() {
  createCanvas(900,400);
 
 button=createSprite(450,200,10,10);
 button.addImage(buttonImg);
 shooter=createSprite(100,250);
 shooter.addAnimation("shooter",shooter_running);
 shooter.scale=0.5;
 shooter.visible=false;
 enemy=createSprite(800,250,10,10);
 enemy.addAnimation("enemy",enemy_firring);
 enemy.scale=0.6;
 

}

function draw() {
  background(jungleImg);
  jungleImg.velocityX=-2;
  bullet=createSprite(195,215,5,5);
  bullet.addImage(bulletImg);
  bullet.scale=0.02;
 bullet.visible=false; 
 bullet2=createSprite(765,230,10,10);
 bullet2.addImage(bullet2Img);
 bullet2.scale=0.08;
  bullet2.visible=false;
 
  
 
 shooter.velocityX=0;
 shooter.velocityY=0;
  if(mousePressedOver(button)) { 
    button.visible = false;
  
  }
  if (gameState ==="START") {
    enemy.visible=false;
  
   if (button.visible === false) {
    textSize(25);
    fill("yellow");
    text("INTRODUCTION",340,40); 
    fill('yellow')
    text("YOU ARE A SPECIAL COMMANDO",200,80);
    fill("yellow");
    text("1-Army force have sent you on the base of terrorist",10,140);
    fill("yellow");
    text("2-They have gave you a mission",10,190);
    fill("yellow");
    text("3-Your mission is to kill all enemies and destroy their base",10,240);
    fill("yellow");
    text("4-And come back to your Army camp",10,290);
    fill("yellow");
    text("OK, Good Luck Commando",10,340);
    fill("white");
    text("Press- S -TO START THE GAME",200,390);
    fill("yellow");
    text("CONTROLS",708,110);
    fill("white");
    text("Space key-for shooting",631,140);
    
    if(keyDown("S")){
      gameState = "PLAY";
      enemy.visible=true;
     shooter.visible=true;
     bullet2.velocityX=-100;
     bullet2.visible=true;
    
    }
   
  }
}

if (gameState ==="PLAY") {
  if(keyDown("space")){
    bullet.visible=true;
   bullet.velocityX=200;
   dead1=createSprite(800,250,10,10);
   dead1.addImage(dead1Img);
   dead1.scale=0.5;
   enemy .visible=false;
   dead2=createSprite(700,220,10,10);
    dead2.addImage(dead2Img);
    dead2.scale=0.5;
    gameState="END";
    
  }
  if(bullet.visible=true){
    enemy2=createSprite(700,220,10,10);
    enemy2.addImage(enemy2Img);
    enemy2.scale=0.6;
    enemy2.visible=false;
    
  }
  
 
} 

  drawSprites();
} 
function spawnEnemy(){
  
}