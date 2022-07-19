
var canvas = new fabric.Canvas ('Canvas');

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
        });
		canvas.add(hole.obj);
	    });
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	    });
	new_image();
}

	


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball.obj);
	}

	document.getElementById("hd3").innerHTML="¡Lo Lograste!";
	document.getElementById("myCanvas").style.borderColor="red";
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_x <=119)
		{
			ball_y = ball_y + block_image_height;
			console.log("altura de la imagen = " + block_image_height);
			console.log("Cuando se presione la flecha hacia arriba, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball.obj);
			new_image();
		}
	}

	function down()
	{
		if(ball_x <=115)
		{
            ball_y = ball_y + block_image_height;
			console.log("altura de la imagen = " + block_image_height);
			console.log("Cuando se presione la flecha hacia abajo, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball.obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x <=97)
		{
			ball_y = ball_y + block_image_height;
			console.log("altura de la imagen = " + block_image_height);
			console.log("Cuando se presione la flecha hacia la izquierda, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball.obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=100)
		{
			ball_y = ball_y + block_image_height;
			console.log("altura de la imagen = " + block_image_height);
			console.log("Cuando se presione la flecha hacia la derecha, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball.obj);
			new_image();
		}
	}
	
}

