const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon_img ; 
var polygon ; 
var sling ; 


function preload() {

polygon_img = loadImage("polygon.png")  ; 

}

function setup(){

    var canvas = createCanvas(1200,400);


    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,250,200,20) ; 
    ground2 = new Ground(873,173,200,20) ; 



    box1 = new Box(516,215,30,30);
    box2 = new Box(575,215,30,30) ; 
    box3 = new Box(625,215,30,30) ; 
    box4 = new Box(675,215,30,30); 
    box5 = new Box(575,165,30,30) ; 
    box6 = new Box(625,165,30,30) ; 

    box7 = new Box(797,139,30,30);
    box8 = new Box(847,139,30,30) ; 
    box9 = new Box(897,139,30,30) ; 
    box10 = new Box(947,139,30,30); 
    box11 = new Box(847,89,30,30) ; 
    box12 = new Box(897,89,30,30) ; 


   
    polygon = new Polygon(68,192,70,70) ; 
    

    sling = new SlingShot(polygon.body,{x:80, y:203}) ; 

    Engine.run(engine) ; 

   

}

function draw(){
    background("black");

    text(mouseX+","+mouseY,50,50) ; 
    

    Engine.update(engine);

    ground.display() ;  
    ground2.display() ;



    fill("blue") ; 
    box1.display() ; 
    box2.display() ; 
    box3.display () ; 
    box4.display () ; 
    box5.display () ; 
    box6.display () ; 
    box7.display () ; 
    box8.display () ; 
    box9.display () ; 
    box10.display () ; 
    box11.display () ; 
    box12.display () ; 
    polygon.display () ; 

    sling.display () ; 

    console.log(box5.body.speed) ; 
   

}

function mouseDragged (){

 Matter.Body.setPosition(polygon.body, {x:mouseX,y:mouseY})  
}

function mouseReleased() {
    sling.fly();
  }
