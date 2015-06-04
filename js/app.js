console.log("m.p. > start");
var CanvasIDs = ['number1units', 'number1tens', 'number1ten' ,'number2units']
var canvasData = { //one place to customeion useig
	Context: '2d', 
	lineWidth: 4, 
	lineColors: ['red','black','blue','pink'],
}


function renderTest(ren, intv){
	var can1u = document.getElementById(ren);
	can1u = can1u.getContext('2d');
	can1u.beginPath();
	can1u.moveTo(0,0);
	can1u.lineTo(1000,1000);
	can1u.lineWidth = 4;
	can1u.strokeStyle = '#FB8136';
	can1u.stroke();
	console.log("intv - " + intv);
}

function FullRender(int1, int2, int3, int4){
	var canvasObject1 = CanvasIDs[0];
	
	var startCords = [0,0];
	var endCords   = [1000,1000];

	canvasObject1 = getContext( canvasData[Context] );
	canvasObject1.beginPath();
	var loopNum = 0;
	while(int1 != loopNum){//makes the lines for each canvas

	}
}

function ClearCanvas(CanvasID){
	var CanID = document.getElementById(CanvasID);
	var CanC  = CanID.getContext('2d');
	CanC.clearRect(0,0,CanC.width,CanC.height);
}

function clearAllCanvas(){
	var canAmount = CanvasIDs.length;
	console.log('var - canAmount = ' + canAmount);

}

$(document).ready(function() {
	clearAllCanvas();
	renderTest(CanvasIDs[0], 1);
	console.log("m.p. > finshed");
})

console.log("m.p. > loaded");