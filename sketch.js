var mic;
let buttonStart;
let buttonStop
let vol;
function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn()
  buttonStart = createButton("Start Your Microphone");
  buttonStop = createButton("Stop Your Microphone");

  buttonStart.mousePressed( () =>{
    mic.start();
    console.log(vol)
    buttonStart.html('in use')
  })
  buttonStop.mousePressed( () =>{
    mic.stop();
    buttonStart.html("Start Your Microphone")
  })
}

function draw() {
  background(0)
  vol = mic.getLevel()
  fill(255)
  ellipse(200,200, vol * 400, vol * 400)
}
