function preload() {
	world_start = loadSound("world_start.wav");
	jump = loadSound("jump.wav");
	Coin = loadSound("coin.wav");
	mario_over= loadSound("gameover.wav");
    mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);


	video=createCapture(VIDEO);
	video.size(600,300);
    

	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on('pose',gotPoses);
}

function modelLoaded(){
	console.log("モデルがロードされました (model is loaded)");
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}

function draw() {
	game();
    
}






