var canvas=document.getElementById("myCanvas");
var context=canvas.getContext("2d");

var largura=90;
var altura=170;

var backgroundImage = "parkingLot.jpg";
var greencarImage = "car2.png";

var x=5;
var y=225;

var planoDeFundo;
var carrinho;

function add() {
	planoDeFundo=new Image();
	planoDeFundo.onload=uploadBackground;
	planoDeFundo.src=backgroundImage;

	carrinho=new Image();
	carrinho.onload=uploadGreenCar;
	carrinho.src=greencarImage;
}

function uploadBackground() {
	context.drawImage(planoDeFundo, 0, 0, canvas.width ,canvas.height);
}

function uploadGreenCar() {
	context.drawImage(carrinho, x, y, largura ,altura);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
var keyPressed = e.keyCode;
	console.log(keyPressed);
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
	if(y>=0) {
		y = y - 10
		uploadBackground();
		uploadGreenCar();
	}
}

function down()
{
	
	if(y<=500) {
		y = y + 10
		uploadBackground();
		uploadGreenCar();
	}
}

function left()
{
	if(x>=0) {
		x = x - 10
		uploadBackground();
		uploadGreenCar();
	}
}

function right()
{
	if(x<=900) {
		x = x + 10
		uploadBackground();
		uploadGreenCar();
	}
}
