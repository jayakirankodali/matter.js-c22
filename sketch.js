const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var ball_options={
        restitution:0.1
    }
    ball=Bodies.circle(200,200,20,ball_options);
    World.add(world,ball);
    console.log(ball);
    console.log(ball.position.x);
    console.log(ball.position.y);
}

function draw(){
    background(0);
    Engine.update(engine);
    push();
    rectMode(CENTER);
    fill("yellow");
    rect(ground.position.x,ground.position.y,400,20);
    pop();
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}