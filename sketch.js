var path,mainCyclist,opponent1,opponent2,opponent3,gameOver;
var pathImg,mainRacerImg1,mainRacerImg2,opp1Img,opp2Img,opp3Img,gameOverImg;
var opp1G,opp2G,opp3G;
var bellSound;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2 = loadAnimation("images/mainPlayer3.png");
  opp1Img = loadAnimation("images/opponent1.png","images/opponent2.png");
  opp2Img = loadAnimation("images/opponent4.png","images/opponent5.png");
  opp3Img = loadAnimation("images/opponent7.png","images/opponent8.png");
  bellSound = loadSound("bell.mp3");
  gameOverImg = loadImage("gameOver.png");
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = 3+distance/100;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
  opp1G=new Group();
  opp2G=new Group();
  opp3G=new Group();
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist.collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    
    distance=distance+1;
    
    if(keyDown("space")) {
      bellSound.play();
    }
    
    var select_opp = Math.round(random(1,3))
    
    if(frameCount % 150 === 0) {
      if(select_opp === 1) {
        oppon1();
      } else if(select_opp === 2) {
        oppon2();
      } else if(select_opp === 3) {
        oppon3();
      }
    }
 }
  if(gameState === END) {
    Distance = Distnce+0;
    

    
    opp1G.setVelocityXEach(0);
    opp2G.setVelocityXEach(0);
    opp3G.setVelocityXEach(0);
    
    opp1G.setLifetimeEach(-1);
    opp2G.setLifetimeEach(-1);
    opp3G.setLifetimeEach(-1);
  }
}
function oppon1() {
  opponent1=createSprite(0,Math.round(random(10,290)));
  opponent1.addAnimation("opp1riding",opp1Img);
  opponent1.scale=0.07;
  opp1G.add(opponent1);
  opponent1.velocityX = 2+distance/100;
  opponent1.lifetime = 200;
}
function oppon2() {
  opponent2=createSprite(0,Math.round(random(10,290)));
  opponent2.addAnimation("opp2Riding",opp2Img);
  opponent2.scale=0.07;
  opp2G.add(opponent2);
  opponent2.velocityX = 2+distance/100;
  opponent2.lifetime = 200;
}

function oppon3() {
  opponent3=createSprite(0,Math.round(random(10,290)));
  opponent3.addAnimation("opp3riding",opp3Img);
  opponent3.scale=0.07;
  opp3G.add(opponent3);
  opponent3.velocityX = 2+distance/100;
  opponent3.lifetime = 200;
}