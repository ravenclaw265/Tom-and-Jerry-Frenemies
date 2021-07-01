var cat, catImage 
var mouse, mouseImage
var bg
function preload() {
    bgImg = loadImage ("images/garden.png");
    catImg1 = loadImage ("images/cat1.png");
    mouseImg1 =loadImage ("images/mouse1.png");
    catImg2 = loadImage ("images/cat2.png");
    mouseImg2 =loadImage ("images/mouse2.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite (870,600)
cat.addAnimation("cat",catImage)
mouse = createSprite (200,600)
cat.addAnimation("mouse",mouseImage)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0
    cat.addAnimation("cat",catImage2)
    cat.scale=0.2
    mouse.addAnimation("mouse",mouseImage2)
    mouse.scale=0.2
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_AROWW){
    mouse.addAnimation ("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}


}
