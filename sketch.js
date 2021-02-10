const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var drops;
var maxDrops=100;

function preload(){
    
}

function setup(){
   var canvas = createCanvas(400,900);
   engine = Engine.create();
   world = engine.world;

   drops= new Drops(200,20)
}

function draw(){
    background(0);

    drops.display();

}   

