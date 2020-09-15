var score = 0, survivaltime = 0;

var PLAY = 0, END = 1, gameState = PLAY;

var ground;

var monkey,monkey_animation;

var bannanaGroup, rockGroup;

var bannana, rock, banana_Image, rock_Image;

var background1, backg_Image;



function preload(){
 monkey_animation = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  rock_Image = loadImage("stone.png");
  
  banana_Image = loadImage("banana.png");
  
  backg_Image = loadImage("jungle.jpg");
  
 
}




function setup() {
  createCanvas(400, 400);
  background(220);

   bannanaGroup = createGroup();
   rockGroup = createGroup();
  
   background1 = createSprite (200,200,400,10);
   background1.addImage(backg_Image);
   background1.velocityX = -5;
  
  monkey = createSprite(60,345,10,10)
  monkey.addAnimation("monk",monkey_animation)
  monkey.scale = 0.1;
  
    ground = createSprite(200,380,400,10);
}



function draw() {
  
  
  if (background1.x < 0){
    background1.x = background1.width/2;
  }
  
    
    if (frameCount % 5 === 0) {
      survivaltime = survivaltime+1
    }
  
    if(keyDown("space") && monkey.y >= 314){
      monkey.velocityY = -17;
    }
    
    monkey.velocityY = monkey.velocityY + 0.8;
      
      
      bananer();
      rocks();
      
    
     if (bannanaGroup.isTouching(monkey)) {
    bannanaGroup.destroyEach();
    score = score+2;
     }
     switch(score)
     {
       case 10: monkey.scale = 0.12;
         break;
          case 20: monkey.scale = 0.14;
         break;
          case 30: monkey.scale = 0.16;
         break;
          case 40: monkey.scale = 0.18;
         break;
         default: break;
     }
     

     
    
  
  
    if (rockGroup.isTouching(monkey)) {
   monkey.scale = 0.08;
      score= score-2;
      rockGroup.destroyEach();
  }
  
 

  monkey.collide(ground);
  
  
  
  
  
  drawSprites();  
   stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time: "+survivaltime,100,50);
  text ("score: "+score,150,70);
  
  
}






function bananer() {
  if (frameCount % 80 === 0) {
    var bannana = createSprite();
    bannana.addImage(banana_Image);
    bannana.scale = 0.07;
    bannana.x = 500;
    bannana.y = Math.round(Number(120,200));
    bannana.velocityX = -9;
    bannana.lifetime = 150;
    bannanaGroup.add(bannana);
  }
}



function rocks() {
  if (World.frameCount % 200 === 0) {
    var rock = createSprite(0,300);
    rock.addImage(rock_Image);
    rock.scale = 0.25;
    rock.x = 500;
    rock.y = 335;
    rock.velocityX = -6;
    rock.lifetime = 150;
    rockGroup.add(rock);
  }
}