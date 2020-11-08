
var monkey,monkey_running;
var ground;
var banana, bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var survivaltime = 0;
var score = 0;
var banana;
var rock;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(600, 350, 900, 10);
  ground.velocityX = -4;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  if (ground.x) {
    ground.x = ground.width/2;
  }
  monkey.collide(ground);
  monkey.velocityY = monkey.velocityY + 0.8;
  if (keyDown("space")) {
     monkey.velocityY = -12;
  }
  if (foodGroup.isTouching(monkey)) {
    score = score + 1;
    foodGroup.destroyEach();
  }
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: "+ score, 500, 50);
  
  survivaltime = Math.ceil(frameCount/frameRate())

  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time: "+ survivaltime, 100, 50)
  
  food();
  obstacles();
  
  drawSprites();
}

function food() {
  if (frameCount % 80 === 0) {
    banana=createSprite(620, 150, 20, 20);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.lifetime = 200;
    foodGroup.add(banana);
    banana.scale = 0.1;
  }
}
function obstacles() {
  if (frameCount % 300 === 0) {
    rock=createSprite(620, 330, 20, 20);
    rock.addImage(obstacleImage);
    rock.velocityX = -5;
    obstacleGroup.add(banana);
    rock.scale = 0.1;
  }
}