var height = 600;
var width = 800;
var ball_radius = 15;

var xo = 400;
var vxo = 200;

var yo = 15;
var vyo = 0;

var acceleration = 500;

var renderer = PIXI.autoDetectRenderer(width, height,{backgroundColor : 0xCCCCCC});
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();
var graphics = new PIXI.Graphics();
var time = new PIXI.ticker.Ticker();

//stage.addChild(dude);
stage.addChild(graphics);


// start animating
animate();

function animate()
{
	do_physics(time.elapsedMS);

	graphics.clear();

	graphics.beginFill(0x208070, 1.0);
	graphics.drawCircle(xo, yo, ball_radius);
	graphics.endFill();

    requestAnimationFrame(animate);

    // render the container
    renderer.render(stage);
}

function do_physics(time_elapsed) 
{
	var fps = 1000/ time_elapsed;

	vyo = vyo + acceleration / fps;
	yo = yo + vyo / fps;

	xo = xo + vxo / fps;

	if(yo + ball_radius > height)
	{
		yo = height - 15;
		vyo *= -.9;
	}

	if(xo + ball_radius >= width)
	{
		xo = width - 15;
		vxo *= -1;
	}

	if(xo - ball_radius <= 0)
	{
		xo = 15;
		vxo *= -1;	
	}
}






