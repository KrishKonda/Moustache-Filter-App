noseX=0;
noseY=0;
function preload(){
moustache=loadImage("https://i.postimg.cc/TP9dHFPz/Moustache-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
image(moustache,noseX,noseY,100,30);
stroke(0,0,0);
fill(0,0,0);
}
function take_snapshot(){
    save("myFilterImage.png");
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotPoses(results){
    if (results.length>0) {
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("x axis="+results[0].pose.nose.x);
        console.log("y axis="+results[0].pose.nose.y);
        console.log(result);
    }
}