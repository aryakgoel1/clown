nose_x=0;
nose_y=0;
clown_nose="";
function preload() {
clown_nose= loadImage('https://i.postimg.cc/HLK957z3/clownnose.png')
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
image(video,0,0,300,300);
image(clown_nose,nose_x-10,nose_y-10,30,30)
}
function take_snapshot() {
    save('myFilterImage.png');
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
       nose_x=results[0].pose.nose.x;
       nose_y=results[0].pose.nose.y;
       console.log("nose x = "+ nose_x);
       console.log("nose y = "+ nose_y);
    }
}
       