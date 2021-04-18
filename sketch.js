var canvas, backgroundImage;

var gameState = 0;


var form, player, game;
var gemImage,gem1,gem2,gem3,gem4,gem5,gem6,gem7,gem8, gun1;
var bulletGroup,bullet;
var player1;
var g;
var track, player1_img;
var enemyGroup;
var c;
var bolg;
var se1,fire,f,monsterImage,fireImage;
var zombieImage;

function preload(){
 backgroundImage = loadImage("images/background.png");
  player1_img = loadAnimation("images/w1(1).png","images/w1(2).png","images/w1(3).png");
  gemImage=loadAnimation("images/gem1.png","images/gem2.png","images/gem3.png","images/gem4.png");
  ground = loadImage("images/ground.png");
  zombieImage=loadAnimation("images/zomb1.png","images/zomb2.png");
  monsterImage=loadImage("images/Monster.png");
  fireImage=loadImage("images/fire.png");
}

function setup(){
  canvas = createCanvas(displayWidth*2 , displayHeight*2 );
// backgroundImage.scale=2;
  player1 = createSprite(100,200);
  player1.addAnimation("player1Running",player1_img);
  player1.scale=0.6

  
  gem1=createSprite(1600, 650, 10, 10);
  gem1.addAnimation("gemsRotationg",gemImage);
  gem1.scale=0.5;

  gem2=createSprite(1920,650, 10, 10);
  gem2.addAnimation("gemsRotationg",gemImage);
  gem2.scale=0.5;

  gem3=createSprite(2780,120, 10, 10);
  gem3.addAnimation("gemsRotationg",gemImage);
  gem3.scale=0.5;

  gem4=createSprite(2350,1320, 10, 10);
  gem4.addAnimation("gemsRotationg",gemImage);
  gem4.scale=0.5;

  gem5=createSprite(2020,1320, 10, 10);
  gem5.addAnimation("gemsRotationg",gemImage);
  gem5.scale=0.5;

  gem6=createSprite(1060,1140, 10, 10);
  gem6.addAnimation("gemsRotationg",gemImage);
  gem6.scale=0.5;

  gem7=createSprite(1180,1680, 10, 10);
  gem7.addAnimation("gemsRotationg",gemImage);
  gem7.scale=0.5;

  gem8=createSprite(1500,1680, 10, 10);
  gem8.addAnimation("gemsRotationg",gemImage);
  gem8.scale=0.5;
 
  se1=createSprite(2180,1400,70,70);
  se1.addImage("monster",monsterImage);
  se1.scale=0.4;
  f=0;

  se1.shapeColor="green";
  se1.visible=false;
  bulletGroup=new Group();
  enemyGroup=new Group();
  c=0;
  bolg=new Group();
  fireGroup=new Group();
}


function draw(){
  background(backgroundImage,displayWidth/2,displayHeight/2,displayWidth,displayHeight);

  
 
     console.log(player1.x,player1.y);

    if(keyIsDown(UP_ARROW) ){
      player1.y-=10
      player1.rotation=270;
      c=1;
    }
    if(keyIsDown(DOWN_ARROW)){
      player1.y +=10
      player1.rotation=90;
      c=2;
      
    }
    if(keyIsDown(LEFT_ARROW) ){
      player1.x -=10
      player1.rotation=180;
      c=3;
    
    }
    if(keyIsDown(RIGHT_ARROW) ){
      player1.x +=20
      player1.rotation=0;
      c=4;
    }

   
   if(keyWentDown("space")&&c===1){
     Bullet();
 bulletGroup.setSpeedAndDirectionEach(8,270);
 bulletGroup.remove(bullet);

   }
   if(keyWentDown("space")&&c===2){
    Bullet();
bulletGroup.setSpeedAndDirectionEach(8,90);
bulletGroup.remove(bullet);

  }   if(keyWentDown("space")&&c===3){
    Bullet();
bulletGroup.setSpeedAndDirectionEach(8,180);
bulletGroup.remove(bullet);

  }   if(keyWentDown("space")&&c===4){
    Bullet();
bulletGroup.setSpeedAndDirectionEach(8,0);
bulletGroup.remove(bullet);

  }

   
   if(player1.isTouching(gem1)){
    
    gem1.visible=false;
   
   }

   if(player1.isTouching(gem2)){
    
    gem2.visible=false;
   
   }

   if(player1.isTouching(gem3)){
    
    gem3.visible=false;
   
   }

   if(player1.isTouching(gem4)){
    
    gem4.visible=false;
   
   }

   if(player1.isTouching(gem5)){
    
    gem5.visible=false;
   
   }

   if(player1.isTouching(gem6)){
    
    gem6.visible=false;
   
   }

   if(player1.isTouching(gem7)){
    
    gem7.visible=false;
   
   }

   if(player1.isTouching(gem8)){
    
    gem8.visible=false;
   
   }
   
   if((player1.x>=2150 && player1.x<=2200) && player1.y===1180){
    se1.visible=true;
   f=1;
  }

  if(f===1){
    SuperEnemy();
  }

  if(fireGroup.isTouching(player1)){
    player1.destroy();
  }
  Enemy();

  player1.velocityX===Camera.x ;
  player1.velocityY===Camera.y;

    drawSprites();
 
  }
   
  function Bullet (){
    bullet=createSprite(10,10,20,20);
    bullet.shapeColor= "yellow";
    bullet.x=player1.x;
    bullet.x=bullet.x+8;
    bullet.y=player1.y;
    bolg.add(bullet);
    bulletGroup.add(bullet);
    bullet.lifetime=25;
    }
  function Enemy(){
    if (frameCount%100===0){
      var enemy =createSprite(random(0,1200),random(0,1200),60,60)
      enemy.addAnimation("walking",zombieImage);
      enemy.shapeColor="red";
      enemy.velocityX=(random(-6,6));
      enemy.velocityY=(random(-6,6));
      enemy.lifetime=5000;
enemyGroup.add(enemy);
    }
  }
function SuperEnemy(){
  if (frameCount%20===0){
  var fire=createSprite(2180,1400,40,40)
  fire.addImage("fire",fireImage);
  fire.scale=0.2;
  fire.velocityY=-4;
  fire.lifetime=100;
  fireGroup.add(fire)
}
}

