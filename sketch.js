var canvas;
var music;
var redSurface;;
var blueSurface;
var greenSurface;
var goldSurface;
var ball;
var t;
var bottom;
var left;
var right;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(650,600);
     
    //create 4 different surfaces
    ball=createSprite(130,35,30,30);
    ball.shapeColor="white";
    ball.velocityX=4;
    ball.velocityY=4; 
    
    goldSurface=createSprite(90,570,150,20);
    goldSurface.shapeColor="gold";

    redSurface=createSprite(250,570,150,20);
    redSurface.shapeColor="red";

    blueSurface=createSprite(410,570,150,20);
    blueSurface.shapeColor="blue";

    greenSurface=createSprite(570,570,150,20);
    greenSurface.shapeColor="green";
    
    t=createSprite(320,1,650,1);
    t.shapeColor="black";

    bottom=createSprite(325,600,650,1);
    bottom.shapeColor="black";

    left=createSprite(0,300,1,600);
    left.shapeColor="black";

    right=createSprite(650,300,1,600);
    right.shapeColor="black";

    //create box sprite and give velocity

}

function draw() {
    background("black");

    t.visible="false";
    bottom.visible="false";
    left.visible="false";
    right.visible="false";

    if(ball.isTouching(greenSurface)){
      ball.shapeColor="green";
      ball.bounceOff(greenSurface);
      music.play();
    }


   if(ball.isTouching(goldSurface)){
     ball.velocityX=0;
     ball.velocityY=0;
     ball.shapeColor="gold";
     ball.bounceOff(goldSurface);
     music.stop();
   }

   if(ball.isTouching(blueSurface)){
     ball.shapeColor="blue";
     ball.bounceOff(blueSurface);
   }

   if(ball.isTouching(redSurface)){
    ball.shapeColor="red";
    ball.bounceOff(redSurface);
   }

   if(ball.isTouching(t)){
    
    ball.bounceOff(t);

   }


   if(ball.isTouching(bottom)){
    
    ball.bounceOff(bottom);

   }

   if(ball.isTouching(left)){
    
    ball.bounceOff(left);

   }

   if(ball.isTouching(right)){
    
    ball.bounceOff(right);

   }

    //add condition to check if box touching surface and make it box
    createEdgeSprites();    
    drawSprites();
}





