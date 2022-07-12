function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }

img = "";
status = "";
objects = []

function preload(){
img = loadImage('pro latops yoooo.jpeg');
}
function modelLoaded() {
console.log("Model Loaded!")
status = true;
objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
if (error) {
  console.log(error);
}
console.log(results);
objects = results;
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
  fill("#cac7b7");
  text("laptop poggers", 45, 75);
  noFill();
  stroke("#cac7b7");
  rect(30, 60, 450, 350 );
}