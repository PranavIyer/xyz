// The below line creates different constant variables for Engine, World, Bodies etc.
const {Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector} = Matter;

const {Engine} =Matter.Engine

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(800,800);

    // Creating sprites.
    // Creating the ground.
    ground = new Ground(400, 790, 800, 20);

    // Creating the tanker.
    //tanker = new Tanker(200, 750, 120, 100);

    // Creating the bubble balls.
    //ball = new Ball(650, 790, 20);
}

function draw() {
    // Remember to update the Matter Engine and set the background.

    // Displaying the sprites.
    ground.display();
    //tanker.display();
    //ball.display();
}