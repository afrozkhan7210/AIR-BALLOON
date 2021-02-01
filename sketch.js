var balloon,database;


function preload(){
  bgImg=loadImage("1.png")
  balloonImg=loadImage("balloon.png")
}




function setup() {
  createCanvas(500,500);

  database = firebase.database();
  balloon = createSprite(250, 300, 50, 50);
  balloon.addImage(balloonImg)
  balloon.scale=0.5;

  var hotAirBallonposition=database.ref('ballon/height');
  hotAirBallonposition.on("value",showError)
  }

function draw() {
  background(bgImg,); 
  if(keyDown(LEFT_ARROW)){
  balloon.x = balloon.x-10
  }
  
  if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x+10
  }

 if(keyDown(UP_ARROW)){
 balloon.y = balloon.y-10
 } 

 if(keyDown(DOWN_ARROW)){
 balloon.y = balloon.y+10
 }
  
 drawSprites();
}

function updateHeight(x,y){
  database.ref('ballon/height').set({
    'x' : height.x + x ,
    'y' : height.y + y
  })}
  
  function showError(){
  console.log("error");
  }