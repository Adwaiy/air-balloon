var balloonImage,bg;
var position;
var database;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage=loadAnimation("hotairballoon1.png","hotairballoon2.png","hotairballoon3.png");
   
//Function to set initial environment
function setup() {
  database=firebase.database();
  console.log(database);
  createCanvas(500,500);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage);
  balloon.scale=0.4;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    
    balloon.x=balloon.x-10;
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    
    balloon.x=balloon.x+10;
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.x-10;

    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y=balloon.x-10;
    //write code to move air balloon in down direction
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
}