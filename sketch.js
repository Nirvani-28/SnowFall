const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, platform
var snowman1;
var snowball = []
var backgroundImg


function preload() {
    backgroundImg = loadImage("snow1.jpg")
}

function setup() {
    engine = Engine.create();
    world = engine.world;
    createCanvas(800, 400);



    snowman1 = new Snowman(100, 200)


    for (var j = 75; j <= width; j = j + 50) {

        snowball.push(new Snow(j, 75));
    }

    for (var j = 50; j <= width - 10; j = j + 50) {

        snowball.push(new Snow(j, 175));
    }

    for (var j = 75; j <= width; j = j + 50) {

        snowball.push(new Snow(j, 275));
    }

    for (var j = 50; j <= width - 10; j = j + 50) {

        snowball.push(new Snow(j, 375));
    }
}

function draw() {
    Engine.update(engine);
    background(backgroundImg);
    if (frameCount % 60 === 0) {
        for (var j = 75; j <= width; j = j + 50) {

            snowball.push(new Snow(j, 75));
        }

        for (var j = 50; j <= width - 10; j = j + 50) {

            snowball.push(new Snow(j, 175));
        }

        for (var j = 75; j <= width; j = j + 50) {

            snowball.push(new Snow(j, 275));
        }

        for (var j = 50; j <= width - 10; j = j + 50) {

            snowball.push(new Snow(j, 375));
        }
    }
    for (var i = 0; i < snowball.length; i++) {

        snowball[i].display();

    }

    snowman1.display();
    drawSprites();
}