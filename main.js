
img = "";
objects = []
status = "";

function preload(){
  img = loadImage('house.webp');
  }
  
function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380, 380);
  video.hide();
}
  function start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }


function draw() {
    image(image, 0, 0, 640, 420);

    if(status != "")
    {
      objectDetector.detect(image, gotResult);
      for(i = 0; i < objects.length; i++)
      {
        document.getElementById("status").innerHTML = "Status : Object Detected";
        document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + objects.length;

        fill(r,g,b);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
    fill("#00FF00");
    text("edd", 45, 75);
    noFill();
    stroke("#00FF00");
    rect(30, 60, 450, 350 );
  }

function modelLoaded() {
console.log("Model Loaded!")
status = true;
}
function gotResult(error, results) {
if (error) {
  console.log(error);
}
console.log(results);
objects = results;
}





