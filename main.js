img = "";
status = "";
function preload() {
    img=loadimage("dog_cat.jpg");
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectdetector = ml5.objectDetector("cocossd", modelLoad);
    document.getElementById("status").innerHTML = "status detectando objetos";
}
function modelLoad() {
    console.log("o modelo foi carregado");
    status = true;
    objectdetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    console.log(results);
}
function draw() {
    image(img, 0, 0, 640, 420 );
    fill("#778899");
    text("dog", 45, 75);
    noFill();
    sroke(#778899);
    rect(30, 60, 450, 350); 
    fill("#778899");
    text("cat", 320, 120);
    noFill();
    sroke(#778899);
    rect(300, 90, 270, 320);
}