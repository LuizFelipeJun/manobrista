var canvas=document.getElementById("meuCanvas");
var contexto=canvas.getContext("2d");
var alturaDoCarro="10px"
var larguraDoCarro="5px"

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";


function add() {
	//carregar carro e imagens de fundo na tela.
}

function uploadBackground() {
	//Defina a função ‘uploadBackground’

}

function uploadGreenCar() {
	onload=""

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			cima();
			console.log("cima");
		}
	
		if(keyPressed == '40')
		{
			baixo();
			console.log("baixo");
		}
		
		if(keyPressed == '37')
		{
			esquerda();
			console.log("esquerda");
		}
	
		if(keyPressed == '39')
		{
			direita();
			console.log("direita");
		}
		
		
}

function cima()
{
	if (tecla=="38") {
		console.log("cima");
		cima();
}

function baixo()
{
	if (tecla=="40") {
		console.log("baixo");
		baixo();
}

function esquerda()
{
	if (tecla=="37") {
		console.log("esquerda");
		esquerda();
}

function direita() {
	if (tecla=="39") {
		console.log("direita");
		direita();
	}
}