var garden, cat, mouse, catImg1, catImg2, catImg3, mouseImg1, mouseImg2, mouseImg3, gardenImg;

function preload() {
    //load the images here
    catImg1= loadAnimation("cat1.png");
    catImg2= loadAnimation("cat2.png");
    catImg3= loadAnimation("cat4.png");

    mouseImg1= loadAnimation("mouse2.png");
    mouseImg2= loadAnimation("mouse3.png");
    mouseImg3= loadAnimation("mouse4.png");

    gardenImg= loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    //garden= createSprite(500, 400);
    //garden.addImage(gardenImg);
    //garden.scale= 0.8;

    mouse= createSprite(200, 600);
    mouse.addAnimation("mouse-sitting", mouseImg1);
    mouse.scale= 0.1;

    cat= createSprite(870, 600);
    cat.addAnimation("cat-sitting", catImg1);
    cat.scale= 0.1;
    cat.setCollider("circle", 10, 0, 0);


}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    //cat.x= World.mouseX;
    //cat.y= World.mouseY;

    keyPressed();

    if(cat.x - mouse.x < cat.width/2 + mouse.width/2 && mouse.x - cat.x < cat.width/2 + mouse.width/2){
      cat.addAnimation("catLastImage", catImg3);
      cat.changeAnimation("catLastImage");
      cat.velocityX= 0;

      mouse.addAnimation("mouseLastImage", mouseImg3);
      mouse.changeAnimation("mouseLastImage");
      mouse.velocityX= 0;

    }
 
    else{
      cat.changeAnimation(catImg1);
      mouse.changeAnimation(mouseImg2);
    }
    
    cat.depth= mouse.depth;
    drawSprites();
}

function keyPressed(){
   
  if(keyDown("left")){
    cat.velocityX= -5;
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseRunning", mouseImg2);
    mouse.changeAnimation("mouseRunning");

  }

  else{
    //cat.addAnimation("catSitting", catImg2);
    cat.changeAnimation(catImg1);
  }
}






