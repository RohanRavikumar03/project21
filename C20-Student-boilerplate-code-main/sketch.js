/*

class 22 - 23: Physics Engine
Developer:

Goals:
   ● Use a physics engine to create a world and the objects in
  them.
  ● Integrate the physics engine with the p5 code to create
  interactive objects following the rules of physics in this world.
  ● Tune the physics engine to change the behavior of the
  objects in your world.

*/
//Declare variables for game objects and behaviour indicators(FLAGS)

//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//declare variables to assign the simulation objects
var userEngine, userWorld;

var ball, ground;
var cube1, cube2;
var angle = 60;
var poly;
var wedge;


//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {}

//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
  createCanvas(800, 500);

  //create simulation and store in in variables
  userEngine = Engine.create();
  userWorld = userEngine.world;


  //construction of ball using matter.js
  var ball_options = {
    restitution: 0.7,
  };
  ball = Bodies.circle(100, 100, 20, ball_options);
  World.add(userWorld, ball);
  console.log("ball: ");
  console.log(ball);

  //construction of ground using matter.js
  /*
  var ground_options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(400, 380, 800, 20, ground_options);
  World.add(userWorld, ground);
  console.log("ground:");
  console.log(ground);
*/

 ground = new Ground(400, 500, 700, 10);
 console.log("ground object of class GROUND:");
  console.log(ground);

  //construction of wedge using matter.js
  var wedge_options = {
    isStatic: true,
  };
  wedge = Bodies.rectangle(200, 200, 100, 20, wedge_options);
  World.add(userWorld, wedge);

}

//All changes, conditions, manipulations, actions to be executed and checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.
function draw() {
  background(0);

  //activate the simulation
  Engine.update(userEngine);

  //display of ball using matter.js
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 40, 40);

  //display of ground using matter.js
  /*
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 20);
*/

ground.display();
  //display of wedge using matter.js
  Matter.Body.rotate(wedge, angle);
  push();
  translate(wedge.position.x, wedge.position.y);
  rotate(angle);
  rect(0, 0, 100, 20);
  pop();
  angle += 0.1;

 }
