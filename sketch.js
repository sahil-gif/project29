const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9 ;
var platform;
var bird, slingshot;


function preload() {
    backgroundImg = loadImage("sprites/d.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new  Box(530,235,30,40);
    box2 = new  Box(570,235,30,40);
    box3= new  Box(610,235,30,40);
    box4 = new  Box(650,235,30,40);
    box5 = new  Box(690,235,30,40);
    box6 = new  Box(580,195,30,40);

    box7 = new  Box(610,195,30,40);
    box8 = new  Box(640,195,30,40);

    box9 = new  Box(610,155,30,40);
    box11 = new  Box(730,235,30,40);
    box21 = new  Box(770,235,30,40);
    box31= new  Box(810,235,30,40);
    box41 = new  Box(850,235,30,40);
    box51 = new  Box(890,235,30,40);
    box61 = new  Box(780,195,30,40);

    box71 = new  Box(810,195,30,40);
    box81 = new  Box(840,195,30,40);

    box91 = new  Box(810,155,30,40);
   
   
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Slingshot(this.polygon,{x:100, y:200});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    

    box3.display();
    box4.display();
    
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
   
    box11.display();
    box21.display();
    

    box31.display();
    box41.display();
    
    box51.display();
    box61.display();
    box71.display();
    box81.display();
    box91.display();
   
    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
   // drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}